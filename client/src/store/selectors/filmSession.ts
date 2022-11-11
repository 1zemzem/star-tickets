import { createSelector } from "@reduxjs/toolkit";
import type { RootState } from "../../store/store";

const filmSessionsSelector = (store: RootState) => store.filmSessions;

const filmSessionsListSelector = createSelector(
  [filmSessionsSelector],
  (filmsSession) => filmsSession.filmSessionsList
);

// https://github.com/reduxjs/reselect#q-how-do-i-create-a-selector-that-takes-an-argument

const filmSessionsByIdSelector = createSelector(
  [filmSessionsListSelector, (store: RootState, filmId: number) => filmId],
  (sessions, filmId) => sessions.filter((session) => session.filmId === filmId)
);

const isLoadedSessionsSelector = createSelector(
  [filmSessionsSelector],
  (filmsSession) => filmsSession.isLoaded
);

const errorSessionsSelector = createSelector(
  [filmSessionsSelector],
  (filmsSession) => filmsSession.error
);

export {
  filmSessionsListSelector,
  isLoadedSessionsSelector,
  errorSessionsSelector,
  filmSessionsByIdSelector,
};
