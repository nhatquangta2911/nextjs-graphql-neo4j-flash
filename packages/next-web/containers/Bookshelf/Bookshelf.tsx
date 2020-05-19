import React from "react";
import {
  BookshelfWrapper,
  BookshelfHeader,
  BookshelfContent,
} from "./Bookshelf.style";

type BookshelfProps = {};

const Bookshelf: React.FC<BookshelfProps> = () => {
  return (
    <BookshelfWrapper>
      <BookshelfHeader>1</BookshelfHeader>
      <BookshelfContent>2</BookshelfContent>
    </BookshelfWrapper>
  );
};

export default Bookshelf;
