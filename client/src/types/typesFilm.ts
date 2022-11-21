export interface IFilm {
  id: number;
  title: string;
  img: string;
  description: string;
  age_limit: string;
  genre: string;
  info: string;
  price: number;
}
export interface FilmsReducerState {
  filmsList: IFilm[];
  isLoaded: boolean;
  error: boolean;
}

export interface IFilmStore {
  films: FilmsReducerState;
}

export interface FilmsAction {
  type: FilmsActionTypes;
  payload?: any;
}

export enum FilmsActionTypes {
  FETCH_DATA_BEGIN = "FETCH_DATA_BEGIN_FILM",
  FETCH_DATA_SUCCESS = "FETCH_DATA_SUCCESS_FILM",
  FETCH_DATA_ERROR = "FETCH_DATA_ERROR_FILM",
  FETCH_ONE_FILM = "FETCH_ONE_FILM",
}
interface FetchDataBegin {
  type: FilmsActionTypes.FETCH_DATA_BEGIN;
}
interface FetchDataSuccess {
  type: FilmsActionTypes.FETCH_DATA_SUCCESS;
  payload: IFilm[];
}
interface FetchDataError {
  type: FilmsActionTypes.FETCH_DATA_ERROR;
  payload: string;
}

interface FetchOneFilm {
  type: FilmsActionTypes.FETCH_ONE_FILM;
  payload: IFilm;
}

export type FetchData =
  | FetchDataBegin
  | FetchOneFilm
  | FetchDataSuccess
  | FetchDataError;