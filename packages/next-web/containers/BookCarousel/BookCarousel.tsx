import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import cogoToast from "cogo-toast";
import { Carousel } from "primereact/carousel";
import { ProgressSpinner } from "primereact/progressspinner";
import { BooksWrapper } from "./BookCarousel.style";
import { useQuery } from "@apollo/react-hooks";
import { GET_BOOKS } from "graphql/query/book.query";
import { Book, Spinner } from "components";
import { Book as BookType } from "types";
import { IPageTrackingState } from "pages/tracking/tracking.reducer";
import { Bounce } from "react-awesome-reveal";

type BooksProps = {};

const BookCarousel: React.FC<BooksProps> = () => {
  const { data, loading, error, refetch } = useQuery(GET_BOOKS, {
    variables: { name: "Shawn", first: 20 },
  });

  const shouldRefetch = useSelector(
    (state: IPageTrackingState) => state?.shouldRefetch
  );

  shouldRefetch && refetch();

  const books = data?.User[0]?.books;
  const bookTemplate = (book: BookType) => <Book book={book} />;
  if (error) cogoToast.error("Something went wrong. Please try again.");
  return (
    <BooksWrapper>
      {loading && <Spinner small message="Connecting to server" />}
      {books?.length === 0 && (
        <Spinner small message="No data. Please add your first book." />
      )}
      {books?.length > 0 && (
        <Carousel
          style={{ width: "60%", height: "100%", border: "0px solid" }}
          value={books}
          itemTemplate={bookTemplate}
          numVisible={3}
          numScroll={1}
          page={0}
          circular={true}
        ></Carousel>
      )}
    </BooksWrapper>
  );
};

export default BookCarousel;
