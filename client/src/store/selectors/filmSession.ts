import type { RootState } from "../../store/store";

const filmSessionsSelector = (store: RootState) => {
  return store.filmSessions.filmSessionsList;
};

const filmSessionsByIdSelector = (id: number) => (store: RootState) => {
  return store.filmSessions.filmSessionsList.filter(
    (session) => session.filmId === id
  );
};

const isLoadedSessionsSelector = (store: RootState) => {
  return store.filmSessions.isLoaded;
};

const errorSessionsSelector = (store: RootState) => {
  return store.filmSessions.error;
};

export {
  filmSessionsSelector,
  isLoadedSessionsSelector,
  errorSessionsSelector,
  filmSessionsByIdSelector,
};
