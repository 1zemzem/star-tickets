export interface IFilmSession {
  id: number;
  datetime: string;
  filmId: number;
  film_roomId: number;
}
export interface FilmSessionsReducerState {
  filmSessionsList: IFilmSession[];
  isLoaded: boolean;
  error: boolean;
}

export interface IFilmSessionStore {
  filmSessions: FilmSessionsReducerState;
}

export interface FilmSessionsAction {
  type: FilmSessionsActionTypes;
  payload?: any;
}

export enum FilmSessionsActionTypes {
  FETCH_DATA_BEGIN_FILMSESSION = "FETCH_DATA_BEGIN_FILMSESSION",
  FETCH_DATA_SUCCESS_FILMSESSION = "FETCH_DATA_SUCCESS_FILMSESSION",
  FETCH_DATA_ERROR_FILMSESSION = "FETCH_DATA_ERROR_FILMSESSION",
  FETCH_ONE_FILMSESSION = "FETCH_ONE_FILMSESSION",
}
interface FetchDataBegin {
  type: FilmSessionsActionTypes.FETCH_DATA_BEGIN_FILMSESSION;
}
interface FetchDataSuccess {
  type: FilmSessionsActionTypes.FETCH_DATA_SUCCESS_FILMSESSION;
  payload: IFilmSession[];
}
interface FetchDataError {
  type: FilmSessionsActionTypes.FETCH_DATA_ERROR_FILMSESSION;
  payload: string;
}

interface FetchOneFilmSession {
  type: FilmSessionsActionTypes.FETCH_ONE_FILMSESSION;
  payload: IFilmSession;
}

export type FetchFilmSession =
  | FetchDataBegin
  | FetchOneFilmSession
  | FetchDataSuccess
  | FetchDataError;
