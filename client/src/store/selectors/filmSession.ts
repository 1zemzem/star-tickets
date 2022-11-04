import type { RootState } from "../../store/store";

function filmSessionsSelector(store: RootState) {
  return store.filmSessions.filmSessionsList;
}

const filmSessionsByIdSelector= (id: number) => (store: RootState) => {
    return store.filmSessions.filmSessionsList.filter((session) => session.filmId === id );
  }
  
function isLoadedSessionsSelector(store: RootState) {
  return store.filmSessions.isLoaded;
}

function errorSessionsSelector(store: RootState) {
  return store.filmSessions.error;
}

export {
  filmSessionsSelector,
  isLoadedSessionsSelector,
  errorSessionsSelector,
  filmSessionsByIdSelector
};
