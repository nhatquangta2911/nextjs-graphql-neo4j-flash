import { businessComponentReducer } from "reducers/businessComponentReducer";
import { pageTrackingReducer } from "./../pages/tracking/tracking.reducer";
import { combineReducers } from "redux";

export const RootReducer = combineReducers({
  pageTrackingReducer,
  businessComponentReducer,
});

export type StoreRootState = ReturnType<typeof RootReducer>;
