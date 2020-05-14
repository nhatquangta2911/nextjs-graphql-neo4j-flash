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

export type IActionPageTracking =
  | IActionDisplayDialog
  | IActionHideDialog
  | IActionUpdateNewestTask;
