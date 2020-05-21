export interface IActionDisplayDialog {
  type: "DISPLAY_DIALOG";
  title: string;
}

export interface IActionHideDialog {
  type: "HIDE_DIALOG";
}

export interface IActionUpdateNewestTask {
  type: "UPDATE_NEWEST_TASK";
  newestTask: string;
}

export interface IActionUpdateStats {
  type: "UPDATE_STATS";
  total: number;
  completed: number;
}

export interface IActionTriggerAddBookDialog {
  type: "TRIGGER_ADD_BOOK_DIALOG";
}

export interface IActionHideAddBookDialog {
  type: "HIDE_ADD_BOOK_DIALOG";
}

export type IActionPageTracking =
  | IActionDisplayDialog
  | IActionHideDialog
  | IActionUpdateNewestTask
  | IActionUpdateStats
  | IActionHideAddBookDialog
  | IActionTriggerAddBookDialog;
