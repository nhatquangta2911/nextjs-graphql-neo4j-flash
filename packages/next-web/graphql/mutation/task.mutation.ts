import gql from "graphql-tag";

export const ADD_TASK = gql`
  mutation addTask($title: String!, $status: String!, $primary: Boolean!) {
    CreateTask(title: $title, status: $status, primary: $primary) {
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

export const UPDATE_TASK_STATUS = gql`
  mutation updateTaskStatus($status: String!, $title: String!) {
    UpdateTask(status: $status, title: $title) {
      _id
      title
      status
      primary
    }
  }
`;

export const UPDATE_TASKLIST = gql`
  mutation updateTaskList($total: Int!, $weekNo: String!, $completed: Int!) {
    UpdateTaskList(total: $total, weekNo: $weekNo, completed: $completed) {
      weekNo
      total
      completed
      tasks {
        title
      }
    }
  }
`;
