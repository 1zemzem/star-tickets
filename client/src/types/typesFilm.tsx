export interface IFilm {
  film: [],
  // title: string;
  // img: File;
  // description: string;
  // age_limit: string;
  // genre: string;
  // info: string;
}

export interface FilmState {
  film: IFilm;
  isLoaded: boolean;
  error: boolean;  
}

export interface FilmAction {
  type: string;
  payload?: any;
}

export enum FilmActionTypes {
  FETCH_DATA_BEGIN = "FETCH_DATA_BEGIN",
  FETCH_DATA_SUCCESS = "FETCH_DATA_SUCCESS",
  FETCH_DATA_ERROR = "FETCH_DATA_ERROR",
}
interface FetchDataBegin {
  type: FilmActionTypes.FETCH_DATA_BEGIN;
}
interface FetchDataSuccess {
  type: FilmActionTypes.FETCH_DATA_SUCCESS;
  payload: IFilm;
}
interface FetchDataError {
  type: FilmActionTypes.FETCH_DATA_ERROR;
  payload: boolean;
}

export type FetchData =
  | FetchDataBegin
  | FetchDataSuccess
  | FetchDataError;