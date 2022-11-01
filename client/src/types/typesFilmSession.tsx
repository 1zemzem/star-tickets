export interface IFilmSession {
  id: number;
  datetime: string;
}
export interface FilmSessionsReduserState {
  filmSessionsList: IFilmSession[];
  isLoaded: boolean;
  error: boolean;
}

export interface IFilmSessionStore {
  filmSessions: FilmSessionsReduserState;
}

export interface FilmSessionsAction {
  type: FilmSessionsActionTypes;
  payload?: any;
}

export enum FilmSessionsActionTypes {
  FETCH_DATA_BEGIN = "FETCH_DATA_BEGIN",
  FETCH_DATA_SUCCESS = "FETCH_DATA_SUCCESS",
  FETCH_DATA_ERROR = "FETCH_DATA_ERROR",
  FETCH_ONE_FILMSESSION = "FETCH_ONE_FILMSESSION",
}
interface FetchDataBegin {
  type: FilmSessionsActionTypes.FETCH_DATA_BEGIN;
}
interface FetchDataSuccess {
  type: FilmSessionsActionTypes.FETCH_DATA_SUCCESS;
  payload: IFilmSession[];
}
interface FetchDataError {
  type: FilmSessionsActionTypes.FETCH_DATA_ERROR;
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
