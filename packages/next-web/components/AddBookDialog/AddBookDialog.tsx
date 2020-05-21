import React, { useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { useForm, Controller } from 'react-hook-form';
import { DatePicker } from '@progress/kendo-react-dateinputs';
import {
  AddBookDialogWrapper,
  AddBookDialogItem,
  AddBookDialogItemLabel,
  AddBookDialogItemText,
} from './AddBookDialog.style';
import { Input, Button } from 'semantic-ui-react';
import { Upload } from '@progress/kendo-react-upload';
import cogoToast from 'cogo-toast';
import { useMutation } from '@apollo/react-hooks';
import {
  ADD_BOOK,
  ADD_BOOK_INTO_USER_SHELF,
} from 'graphql/mutation/book.mutation';

type AddBookDialogProps = {};

const AddBookDialog: React.FC<AddBookDialogProps> = () => {
  const [pages, setPages] = useState(0);
  const [title, setTitle] = useState('');
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
      await addBook({
        variables: {
          title,
          pages,
          startedDate: {
            day,
            month,
            year,
          },
          coverImage:
            'https://hazlitt.net/sites/default/files/default-book.png',
        },
      });
      await addBookIntoUserBookshelf({
        variables: {
          from: { name: username },
          to: { title },
        },
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
          placeholder='Once upon the time'
          label='Title'
          value={title}
          style={{ width: '100%' }}
          size='small'
          onChange={(event) => setTitle(event.target.value)}
        />
      </AddBookDialogItem>
      <AddBookDialogItem>
        <Input
          size='small'
          style={{ width: '100%' }}
          type='number'
          label='Total Pages'
          value={pages}
          onChange={(event) =>
            setPages(event.target.value !== '' && parseInt(event.target.value))
          }
        />
      </AddBookDialogItem>
      <AddBookDialogItem>
        <AddBookDialogItemLabel>
          <AddBookDialogItemText>Start reading at</AddBookDialogItemText>
          <DatePicker
            defaultValue={new Date()}
            format='yyyy-MM-dd'
            onChange={(event) => {
              const date = event.target.value;
              setDay(date.getDate());
              setMonth(date.getMonth() + 1);
              setYear(date.getFullYear());
            }}
          />
        </AddBookDialogItemLabel>
        <AddBookDialogItemLabel>
          <AddBookDialogItemText large>Cover Image</AddBookDialogItemText>
          <Upload />
        </AddBookDialogItemLabel>
      </AddBookDialogItem>
      <Button color='blue' onClick={handleSubmit}>
        Add book
      </Button>
    </AddBookDialogWrapper>
  );
};

export default AddBookDialog;
