import React, { useState, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Form, Button, Label, Input } from 'semantic-ui-react';
import {
  UpdateBookDialogWrapper,
  UpdateBookDialogLeftCoverImage,
  UpdateBookDialogEditor,
} from './UpdateBookDialog.style';
import { IPageTrackingState } from 'pages/tracking/tracking.reducer';
import { Book } from 'types';
import { Bounce, Slide } from 'react-awesome-reveal';
import { useMutation } from '@apollo/react-hooks';
import { UPDATE_BOOK } from 'graphql/mutation/book.mutation';
import cogoToast from 'cogo-toast';
import { PlaceHolder } from '../../components';

type UpdateBookDialogProps = {};

const UpdateBookDialog: React.FC<UpdateBookDialogProps> = () => {
  const book: Book = useSelector((state: IPageTrackingState) => state.book);

  const [updatedBook, setUpdatedBook] = useState(book as Book);
  const [updateBook] = useMutation(UPDATE_BOOK);
  const dispatch = useDispatch();
  const hideUpdateBookDialog = useCallback(
    () => dispatch({ type: 'HIDE_UPDATE_BOOK_DIALOG' }),
    [dispatch]
  );
  const triggerRefetch = useCallback(
    () => dispatch({ type: 'TRIGGER_REFETCH' }),
    [dispatch]
  );

  const handleUpdate = async (done: boolean) => {
    try {
      await updateBook({
        variables: {
          bookId: updatedBook.bookId,
          title: updatedBook.title,
          completedPages:
            updatedBook.completedPages > book.pages || done
              ? book.pages
              : updatedBook.completedPages,
          status:
            updatedBook.completedPages >= book.pages || done
              ? 'Done'
              : 'Reading',
        },
      });
      cogoToast.success(
        `Update your progress of "${updatedBook.title}" (${
          !done && updatedBook.completedPages < book.pages
            ? updatedBook.completedPages
            : book.pages
        }/${book.pages}) `
      );
      setUpdatedBook({} as Book);
      await hideUpdateBookDialog();
      await triggerRefetch();
    } catch (error) {
      cogoToast.error(JSON.stringify(error, null, 2));
    }
  };

  return (
    <UpdateBookDialogWrapper>
      <UpdateBookDialogLeftCoverImage>
        <Bounce duration={500}>
          <PlaceHolder type='text' />
          {/* <img src={book.coverImage} style={{ width: '150px' }} /> */}
        </Bounce>
      </UpdateBookDialogLeftCoverImage>
      <UpdateBookDialogEditor>
        <Form>
          <Form.Field>
            <label>Title</label>
            <input
              value={updatedBook.title}
              onChange={(event) =>
                setUpdatedBook({ ...updatedBook, title: event.target.value })
              }
            />
            {updatedBook.title?.trim() === '' && (
              <Bounce>
                <Label pointing>Please enter a value</Label>
              </Bounce>
            )}
          </Form.Field>
          <Form.Field>
            <Input labelPosition='right' type='number'>
              <input
                value={
                  updatedBook.completedPages > updatedBook.pages
                    ? updatedBook.pages
                    : updatedBook.completedPages
                }
                onChange={(event) =>
                  setUpdatedBook({
                    ...updatedBook,
                    completedPages: parseInt(event.target.value),
                  })
                }
              />
              <Label> / {book.pages} pages</Label>
            </Input>
            {updatedBook.completedPages < 0 && (
              <Bounce>
                <Label pointing>Please enter a valid number</Label>
              </Bounce>
            )}
          </Form.Field>
          <Form.Field>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              {updatedBook.completedPages >= book.pages && (
                <Bounce duration={1500}>
                  <Label color='green' tag>
                    Done Reading?
                  </Label>
                </Bounce>
              )}
              <Button
                color='blue'
                compact
                disabled={
                  updatedBook.completedPages < 0 ||
                  updatedBook.title?.trim() === '' ||
                  !updatedBook.completedPages
                }
                onClick={() => handleUpdate(false)}
              >
                Update
              </Button>
              {updatedBook.completedPages <= book.pages + 1 && (
                <Button
                  color='green'
                  basic
                  compact
                  onClick={() => handleUpdate(true)}
                >
                  I'm done
                </Button>
              )}
            </div>
          </Form.Field>
        </Form>
      </UpdateBookDialogEditor>
    </UpdateBookDialogWrapper>
  );
};

export default UpdateBookDialog;
