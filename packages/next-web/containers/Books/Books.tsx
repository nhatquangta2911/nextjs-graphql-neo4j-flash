import React from "react";
import cogoToast from "cogo-toast";
import { Carousel } from "primereact/carousel";
import { BooksWrapper } from "./Books.style";
import { useQuery } from "@apollo/react-hooks";
import { GET_BOOKS } from "graphql/query/book.query";
import { Book } from "components";
import { Book as BookType } from "types";

type BooksProps = {};

const Books: React.FC<BooksProps> = () => {
  const { data, loading, error, refetch } = useQuery(GET_BOOKS, {
    variables: { name: "Shawn", first: 4 },
  });
  const books = data?.User[0]?.books;
  const bookTemplate = (book: BookType) => <Book book={book} />;
  if (error) cogoToast.error("Something went wrong. Please try again.");
  return (
    <BooksWrapper>
      <Carousel
        style={{ width: "100%", height: "100%" }}
        value={books}
        itemTemplate={bookTemplate}
        numVisible={4}
        numScroll={1}
      ></Carousel>
    </BooksWrapper>
  );
};

export default Books;
