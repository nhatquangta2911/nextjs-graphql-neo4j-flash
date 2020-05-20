import gql from "graphql-tag";

export const GET_BOOKS = gql`
  query getBooks($name: String!, $first: Int!) {
    User(name: $name) {
      books(first: $first) {
        _id
        title
        pages
        completedPages
        coverImage
        startDate {
          formatted
        }
      }
    }
  }
`;
