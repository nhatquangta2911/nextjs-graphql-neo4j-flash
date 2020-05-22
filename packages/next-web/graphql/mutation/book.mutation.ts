import gql from "graphql-tag";

export const ADD_BOOK = gql`
  mutation addBook(
    $bookId: String!
    $title: String!
    $pages: Int
    $startDate: _Neo4jDateInput
    $coverImage: String
  ) {
    CreateBook(
      bookId: $bookId
      title: $title
      pages: $pages
      status: "Reading"
      completedPages: 0
      coverImage: $coverImage
      startDate: $startDate
    ) {
      bookId
      title
      pages
      startDate {
        formatted
      }
      status
      coverImage
    }
  }
`;

export const ADD_BOOK_INTO_USER_SHELF = gql`
  mutation addBookIntoUserShelf($from: _UserInput!, $to: _BookInput!) {
    AddUserBooks(from: $from, to: $to) {
      from {
        name
      }
      to {
        bookId
      }
    }
  }
`;

export const UPDATE_BOOK = gql`
  mutation updateBook(
    $title: String!
    $completedPages: Int!
    $bookId: String!
  ) {
    UpdateBook(
      title: $title
      completedPages: $completedPages
      bookId: $bookId
    ) {
      bookId
      title
    }
  }
`;
