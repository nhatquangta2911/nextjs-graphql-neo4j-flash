import { IActionPageTracking } from "./tracking.action";

export interface IPageTrackingState {
  dialog: {
    dialogVisible: boolean;
    dialogContent: string;
  };
  newestTask: string;
  total: number;
  completed: number;
}

const initialState: IPageTrackingState = {
  dialog: {
    dialogVisible: false,
    dialogContent: "",
  },
  newestTask: "Not updated",
  total: 0,
  completed: 0,
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
    default:
      return state;
  }
};

export type StorePageTrackingReducer = ReturnType<typeof pageTrackingReducer>;
