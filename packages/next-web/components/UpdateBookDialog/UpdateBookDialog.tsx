import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Form, Button, Label, Input } from "semantic-ui-react";
import {
  UpdateBookDialogWrapper,
  UpdateBookDialogLeftCoverImage,
  UpdateBookDialogEditor,
} from "./UpdateBookDialog.style";
import { IPageTrackingState } from "pages/tracking/tracking.reducer";
import { Book } from "types";
import { Bounce } from "react-awesome-reveal";

type UpdateBookDialogProps = {};

const UpdateBookDialog: React.FC<UpdateBookDialogProps> = () => {
  const book: Book = useSelector((state: IPageTrackingState) => state.book);

  const [updatedBook, setUpdatedBook] = useState(book as Book);

  return (
    <UpdateBookDialogWrapper>
      <UpdateBookDialogLeftCoverImage>
        <img src={book.coverImage} style={{ width: "200px" }} />
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
            {updatedBook.title?.trim() === "" && (
              <Bounce>
                <Label pointing>Please enter a value</Label>
              </Bounce>
            )}
          </Form.Field>
          <Form.Field>
            <Input labelPosition="right" type="number">
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
          <Form.Field textAlign="justified">
            {updatedBook.completedPages >= book.pages && (
              <Label color="green" tag>
                Done Reading
              </Label>
            )}
            <Button
              color="blue"
              disabled={
                updatedBook.completedPages < 0 ||
                updatedBook.title?.trim() === "" ||
                !updatedBook.completedPages
              }
              onClick={() => alert(JSON.stringify(updatedBook, null, 2))}
            >
              Update
            </Button>
          </Form.Field>
        </Form>
      </UpdateBookDialogEditor>
    </UpdateBookDialogWrapper>
  );
};

export default UpdateBookDialog;
