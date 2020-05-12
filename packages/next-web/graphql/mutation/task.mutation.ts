import gql from "graphql-tag";

export const ADD_TASK = gql`
  mutation addTask($title: String!, $primary: Boolean!) {
    CreateTask(title: $title, status: "Doing", primary: $primary) {
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

export const UPDATE_TASKLIST = gql`
  mutation updateTaskList($total: Int!, $weekNo: String!) {
    UpdateTaskList(total: $total, weekNo: $weekNo) {
      weekNo
      total
      completed
      tasks {
        title
      }
    }
  }
`;
