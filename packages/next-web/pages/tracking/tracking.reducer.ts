import { IActionPageTracking } from './tracking.action';

export interface IPageTrackingState {
  dialog: {
    dialogVisible: boolean;
    dialogContent: string;
  };
  newestTask: string;
  total: number;
  completed: number;
  addBookDialogVisible: boolean;
  shouldRefetch: boolean;
}

const initialState: IPageTrackingState = {
  dialog: {
    dialogVisible: false,
    dialogContent: '',
  },
  newestTask: 'Not updated',
  total: 0,
  completed: 0,
  addBookDialogVisible: false,
  shouldRefetch: false,
};

export const pageTrackingReducer = (
  state = initialState,
  action: IActionPageTracking
): IPageTrackingState => {
  switch (action.type) {
    case 'DISPLAY_DIALOG':
      return {
        ...state,
        dialog: {
          dialogVisible: true,
          dialogContent: action.title,
        },
      };
    case 'HIDE_DIALOG':
      return {
        ...state,
        dialog: {
          dialogVisible: false,
          dialogContent: '',
        },
      };
    case 'UPDATE_NEWEST_TASK':
      return {
        ...state,
        newestTask: action.newestTask,
      };
    case 'UPDATE_STATS':
      return {
        ...state,
        total: action.total,
        completed: action.completed,
      };
    case 'TRIGGER_ADD_BOOK_DIALOG':
      return {
        ...state,
        addBookDialogVisible: true,
      };
    case 'HIDE_ADD_BOOK_DIALOG':
      return {
        ...state,
        addBookDialogVisible: false,
      };
    case 'TRIGGER_REFETCH':
      return {
        ...state,
        shouldRefetch: true,
      };
    default:
      return state;
  }
};

export type StorePageTrackingReducer = ReturnType<typeof pageTrackingReducer>;
