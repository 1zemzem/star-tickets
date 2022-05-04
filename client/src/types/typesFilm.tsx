export interface IFilm {
  id: string;
  title: string;
  img: any;
  description: string;
  age_limit: string;
  genre: string;
  info: string;
}

export interface FilmsState {
  list: IFilm[];
  isLoaded: boolean;
  error: boolean;
}

export interface FilmsAction {
  type: string;
  payload?: any;
}

export enum FilmsActionTypes {
  FETCH_DATA_BEGIN = "FETCH_DATA_BEGIN",
  FETCH_DATA_SUCCESS = "FETCH_DATA_SUCCESS",
  FETCH_DATA_ERROR = "FETCH_DATA_ERROR",
}
interface FetchDataBegin {
  type: FilmsActionTypes.FETCH_DATA_BEGIN;
}
interface FetchDataSuccess {
  type: FilmsActionTypes.FETCH_DATA_SUCCESS;
  payload: IFilm;
}
interface FetchDataError {
  type: FilmsActionTypes.FETCH_DATA_ERROR;
  payload: string;
}

export type FetchData = FetchDataBegin | FetchDataSuccess | FetchDataError;
