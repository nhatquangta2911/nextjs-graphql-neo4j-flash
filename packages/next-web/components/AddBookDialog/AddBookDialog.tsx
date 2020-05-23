import React, { useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { useForm, Controller } from 'react-hook-form';
import { v4 as uuidv4 } from 'uuid';
import { DatePicker } from '@progress/kendo-react-dateinputs';
import {
  AddBookDialogWrapper,
  AddBookDialogItem,
  AddBookDialogItemLabel,
  AddBookDialogItemText
} from './AddBookDialog.style';
import { Input, Button } from 'semantic-ui-react';
import { Upload } from '@progress/kendo-react-upload';
import cogoToast from 'cogo-toast';
import { useMutation } from '@apollo/react-hooks';
import { PROFILE_PAGE } from '../../constants/navigation';
import {
  ADD_BOOK,
  ADD_BOOK_INTO_USER_SHELF
} from 'graphql/mutation/book.mutation';

type AddBookDialogProps = {};

const AddBookDialog: React.FC<AddBookDialogProps> = () => {
  const [pages, setPages] = useState(200);
  const [title, setTitle] = useState('');
  const [file, setFile] = useState({} as any);
  const [day, setDay] = useState(1);
  const [month, setMonth] = useState(1);
  const [year, setYear] = useState(2020);

  const dispatch = useDispatch();
  const hideAddButtonDialog = useCallback(
    () => dispatch({ type: 'HIDE_ADD_BOOK_DIALOG' }),
    [dispatch]
  );
  const triggerRefetch = useCallback(
    () => dispatch({ type: 'TRIGGER_REFETCH' }),
    [dispatch]
  );
  const [addBook] = useMutation(ADD_BOOK);
  const [addBookIntoUserBookshelf] = useMutation(ADD_BOOK_INTO_USER_SHELF);

  const handleSubmit = async () => {
    try {
      const username = localStorage.getItem('username') || 'Shawn';
      const bookId = uuidv4();
      await addBook({
        variables: {
          bookId,
          title,
          pages,
          startedDate: {
            day,
            month,
            year
          },
          coverImage:
            'https://newshop.vn/public/uploads/products/17965/no-more-plastic-bia-truoc.jpg'
        }
      });
      await addBookIntoUserBookshelf({
        variables: {
          from: { name: username },
          to: { bookId }
        }
      });
      setPages(0);
      setTitle('');
      hideAddButtonDialog();
      triggerRefetch();
      cogoToast.success('Book added');
    } catch (error) {
      cogoToast.error(error.message);
    }
  };

  return (
    <AddBookDialogWrapper>
      <AddBookDialogItem>
        <Input
          placeholder={title?.trim() === '' && 'title is required'}
          label='Title'
          name='titleField'
          value={title}
          style={{ width: '100%' }}
          size='small'
          error={title === ''}
          onChange={event => {
            event.target.value.trim()?.length >= 0 &&
              setTitle(event.target.value);
          }}
        />
      </AddBookDialogItem>
      <AddBookDialogItem>
        <Input
          placeholder={pages <= 0 && 'page number must be greater than 0'}
          size='small'
          style={{ width: '100%' }}
          type='number'
          name='pages'
          label='Total Pages'
          value={pages}
          error={pages <= 0}
          onChange={event => {
            event.target.value.trim() !== ''
              ? setPages(parseInt(event.target.value))
              : setPages(null);
          }}
        />
      </AddBookDialogItem>
      <AddBookDialogItem>
        <AddBookDialogItemLabel>
          <AddBookDialogItemText>Start reading at</AddBookDialogItemText>
          <DatePicker
            defaultValue={new Date()}
            format='yyyy-MM-dd'
            onChange={event => {
              const date = event.target.value;
              setDay(date.getDate());
              setMonth(date.getMonth() + 1);
              setYear(date.getFullYear());
            }}
          />
        </AddBookDialogItemLabel>
        <AddBookDialogItemLabel>
          <AddBookDialogItemText large>Cover Image</AddBookDialogItemText>
          <input
            type='file'
            accept='image/*'
            onChange={event => setFile(event.target.value)}
          />
        </AddBookDialogItemLabel>
      </AddBookDialogItem>
      <Button
        color='blue'
        onClick={handleSubmit}
        disabled={title === '' || pages <= 0}
      >
        Add book
      </Button>
    </AddBookDialogWrapper>
  );
};

export default AddBookDialog;
