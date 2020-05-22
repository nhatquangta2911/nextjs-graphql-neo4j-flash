import gql from "graphql-tag";

export const GET_BOOKS = gql`
  query getBooks($name: String!, $first: Int!) {
    User(name: $name) {
      books(first: $first) {
        _id
        bookId
        title
        pages
        status
        completedPages
        coverImage
        startDate {
          formatted
        }
      }
    }
  }
`;
