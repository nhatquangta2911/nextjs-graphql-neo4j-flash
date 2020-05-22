export interface User {
  _id: string;
  name: string;
  github: string;
  email: string;
  taskList: TaskList;
}

export interface TaskList {
  _id: string;
  weekNo: string;
  total: number;
  completed: number;
  tasks: [Task];
}

export interface Task {
  _id: string;
  title: string;
  status: string;
  primary: Boolean;
}

export interface FormattedDate {
  day: number;
  month: number;
  year: number;
  formatted: string;
}

export interface Book {
  bookId: string;
  _id: string;
  title: string;
  pages: number;
  completedPages: number;
  startDate: FormattedDate;
  finishDate: FormattedDate;
  status: string;
  coverImage: string;
}

export interface Post {
  id: number;
  title: string;
  tags: [Tag];
  content: string;
  coverImage: string;
  slug: string;
}

export interface Tag {
  id: number;
  name: string;
}
