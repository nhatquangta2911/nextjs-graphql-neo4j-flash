import React, { useEffect } from "react";
import cogoToast from "cogo-toast";
import { Carousel } from "primereact/carousel";
import { BooksWrapper } from "./BookCarousel.style";
import { useQuery } from "@apollo/react-hooks";
import { GET_BOOKS } from "graphql/query/book.query";
import { Book } from "components";
import { Book as BookType } from "types";

type BooksProps = {};

const BookCarousel: React.FC<BooksProps> = () => {
  const { data, loading, error, refetch } = useQuery(GET_BOOKS, {
    variables: { name: "Shawn", first: 4 },
  });
  const books = data?.User[0]?.books;
  const bookTemplate = (book: BookType) => <Book book={book} />;
  if (error) cogoToast.error("Something went wrong. Please try again.");
  return (
    <BooksWrapper>
      {books?.length > 0 && (
        <Carousel
          style={{ width: "100%", height: "100%" }}
          value={books}
          itemTemplate={bookTemplate}
          numVisible={books?.length || 0}
          numScroll={1}
        ></Carousel>
      )}
    </BooksWrapper>
  );
};

export default BookCarousel;
