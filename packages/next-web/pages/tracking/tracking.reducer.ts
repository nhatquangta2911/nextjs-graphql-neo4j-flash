import { IActionPageTracking } from "./tracking.action";

export interface IPageTrackingState {
  dialog: {
    dialogVisible: boolean;
    dialogContent: string;
  };
}

const initialState: IPageTrackingState = {
  dialog: {
    dialogVisible: false,
    dialogContent: "",
  },
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
    default:
      return state;
  }
};

export type StoreBusinessComponentReducer = ReturnType<
  typeof pageTrackingReducer
>;
