import { IActionPageTracking } from "./tracking.action";

export interface IPageTrackingState {
  dialog: {
    dialogVisible: boolean;
    dialogContent: string;
  };
  newestTask: string;
}

const initialState: IPageTrackingState = {
  dialog: {
    dialogVisible: false,
    dialogContent: "",
  },
  newestTask: "Not updated",
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
    default:
      return state;
  }
};

export type StorePageTrackingReducer = ReturnType<typeof pageTrackingReducer>;
