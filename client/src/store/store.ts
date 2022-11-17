import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import { filmsReducer } from "./reducers/filmsReducer";
import { filmSessionsReducer } from "./reducers/FilmSessionsReducer";
import { RatingsReducer } from "./reducers/RatingsReducer";

export const store = configureStore({
  reducer: {
    films: filmsReducer,
    filmSessions: filmSessionsReducer,
    ratings: RatingsReducer,
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
