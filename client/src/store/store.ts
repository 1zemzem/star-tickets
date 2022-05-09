import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import { filmsReduser } from "./redusers/filmsReducer";

export const store = configureStore({
  reducer: {
    films: filmsReduser,
  },
  
  
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
