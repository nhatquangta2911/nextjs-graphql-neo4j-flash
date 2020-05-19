import gql from "graphql-tag";

export const ADD_BOOK = gql`
  mutation addBook(
    $title: String!
    $pages: Int
    $startDate: _Neo4jDateInput
    $coverImage: String
  ) {
    CreateBook(
      title: $title
      pages: $pages
      status: "Reading"
      completedPages: 0
      coverImage: $coverImage
      startDate: $startDate
    ) {
      _id
      title
      pages
      startDate {
        formatted
      }
      finishDate {
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
        title
      }
    }
  }
`;
