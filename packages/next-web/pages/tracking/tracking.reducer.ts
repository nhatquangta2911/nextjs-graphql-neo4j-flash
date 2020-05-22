import { Book } from "./../../types/index";
import { IActionPageTracking } from "./tracking.action";

export interface IPageTrackingState {
  dialog: {
    dialogVisible: boolean;
    dialogContent: string;
  };
  newestTask: string;
  total: number;
  completed: number;
  addBookDialogVisible: boolean;
  updateBookDialogVisible: boolean;
  shouldRefetch: boolean;
  book: Book;
}

const initialState: IPageTrackingState = {
  dialog: {
    dialogVisible: false,
    dialogContent: "",
  },
  newestTask: "Not updated",
  total: 0,
  completed: 0,
  addBookDialogVisible: false,
  updateBookDialogVisible: false,
  shouldRefetch: false,
  book: {} as Book,
};

export const pageTrackingReducer = (
  state = initialState,
  action: IActionPageTracking
): IPageTrackingState => {
  switch (action.type) {
    case "DISPLAY_DIALOG":
      return {
        ...state,
        dialog: {
          dialogVisible: true,
          dialogContent: action.title,
        },
      };
    case "HIDE_DIALOG":
      return {
        ...state,
        dialog: {
          dialogVisible: false,
          dialogContent: "",
        },
      };
    case "UPDATE_NEWEST_TASK":
      return {
        ...state,
        newestTask: action.newestTask,
      };
    case "UPDATE_STATS":
      return {
        ...state,
        total: action.total,
        completed: action.completed,
      };
    case "TRIGGER_ADD_BOOK_DIALOG":
      return {
        ...state,
        addBookDialogVisible: true,
      };
    case "HIDE_ADD_BOOK_DIALOG":
      return {
        ...state,
        addBookDialogVisible: false,
      };
    case "TRIGGER_REFETCH":
      return {
        ...state,
        shouldRefetch: true,
      };
    case "TRIGGER_UPDATE_BOOK_DIALOG":
      return {
        ...state,
        updateBookDialogVisible: true,
        book: action.book,
      };
    case "HIDE_UPDATE_BOOK_DIALOG":
      return {
        ...state,
        updateBookDialogVisible: false,
      };
    default:
      return state;
  }
};

export type StorePageTrackingReducer = ReturnType<typeof pageTrackingReducer>;
