import gql from "graphql-tag";

export const ADD_TASK = gql`
  mutation addTask($title: String!) {
    CreateTask(title: $title, status: "Doing", primary: false) {
      _id
      title
      status
      primary
    }
  }
`;
