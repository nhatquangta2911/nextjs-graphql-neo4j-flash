const initialState = {
  visible: false,
};

export const businessComponentReducer = (state = initialState, action) => {
  switch (action.type) {
    case "DISPLAY_DIALOG":
      return {
        ...state,
        visible: true,
      };
    case "HIDE_DIALOG":
      return {
        ...state,
        visible: false,
      };
  }
  return state;
};

export type StoreBusinessComponentReducer = ReturnType<
  typeof businessComponentReducer
>;
