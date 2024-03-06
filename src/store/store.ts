import { configureStore } from "@reduxjs/toolkit";
import experimentReducer from "./slice/experimentSlice";

export const store = configureStore({
  reducer: {
    experiment: experimentReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
