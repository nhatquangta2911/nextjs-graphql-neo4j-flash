export interface IActionDisplayDialog {
  type: "DISPLAY_DIALOG";
  title: string;
}

export interface IActionHideDialog {
  type: "HIDE_DIALOG";
}

export type IActionPageTracking = IActionDisplayDialog | IActionHideDialog;
