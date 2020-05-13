import { combineReducers } from "redux";
import { businessComponentReducer } from "./businessComponentReducer";

export const RootReducer = combineReducers({
  businessComponentReducer,
});

export type StoreRootState = ReturnType<typeof RootReducer>;
