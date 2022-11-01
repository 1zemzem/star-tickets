import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import { filmsReduser } from "./redusers/filmsReducer";
import { filmSessionsReduser } from "./redusers/FilmSessionsReduser"

export const store = configureStore({
  reducer: {
    films: filmsReduser,
    filmsessions: filmSessionsReduser,
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
