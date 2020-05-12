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

export const ADD_TASK_INTO_WEEKLY_TASKLIST = gql`
  mutation addTaskIntoWeeklyTaskList($from: _TaskListInput!, $to: _TaskInput!) {
    AddTaskListTasks(from: $from, to: $to) {
      from {
        weekNo
      }
      to {
        title
      }
    }
  }
`;
