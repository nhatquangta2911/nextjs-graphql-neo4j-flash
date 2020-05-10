import gql from 'graphql-tag';

export const GET_ALL_TASKS = gql`
  query getAllTasks($_id: String!) {
    Task(_id: $_id) {
      _id
      title
    }
  }
`;
