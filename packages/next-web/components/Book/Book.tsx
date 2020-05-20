import React from "react";
import {
  BookWrapper,
  BookCardHeader,
  BookCardContent,
  BookCardImage,
  BookCardControl,
} from "./Book.style";
import { Book as BookType } from "types";
import { Button } from "primereact/button";

type BookProps = {
  book: BookType;
};

const Book: React.FC<BookProps> = ({ book }) => {
  return (
    <BookWrapper>
      <BookCardHeader>{book?.title}</BookCardHeader>
      <BookCardContent>
        <BookCardImage>
          <img
            src={book?.coverImage}
            style={{ width: "100%", height: "100%", objectFit: "scale-down" }}
          />
        </BookCardImage>
      </BookCardContent>
      <BookCardControl>
        Status: {book?.completedPages} / {book?.pages} pages
        <Button
          label="Update"
          icon="pi pi-pencil"
          style={{ marginTop: "0.5vh", fontSize: "0.9em" }}
          className="p-button-secondary"
        />
      </BookCardControl>
    </BookWrapper>
  );
};

export default Book;
