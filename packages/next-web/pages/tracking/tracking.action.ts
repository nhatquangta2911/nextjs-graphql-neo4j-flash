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

export type IActionPageTracking =
  | IActionDisplayDialog
  | IActionHideDialog
  | IActionUpdateNewestTask
  | IActionUpdateStats;
