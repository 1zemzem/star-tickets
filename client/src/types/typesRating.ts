export interface IRating {
  id: number;
  rate: number;
  comment: string;
  userId: number;
}

export interface RatingsReducerState {
  ratingsList: IRating[];
  isLoaded: boolean;
  error: boolean;
}

export interface IRatingStore {
  ratings: RatingsReducerState;
}

export interface RatingsAction {
  type: RatingsActionTypes;
  payload?: any;
}

export enum RatingsActionTypes {
  FETCH_DATA_BEGIN = "FETCH_DATA_BEGIN_RATING",
  FETCH_DATA_SUCCESS = "FETCH_DATA_SUCCESS_RATING",
  FETCH_DATA_ERROR = "FETCH_DATA_ERROR_RATING",
  FETCH_ONE_RATING = "FETCH_ONE_RATING",
}

interface FetchDataBegin {
  type: RatingsActionTypes.FETCH_DATA_BEGIN;
}

interface FetchDataError {
  type: RatingsActionTypes.FETCH_DATA_ERROR;
  payload: string;
}

interface FetchDataSuccess {
  type: RatingsActionTypes.FETCH_DATA_SUCCESS;
  payload: IRating[];
}

interface FetchOneRating {
  type: RatingsActionTypes.FETCH_ONE_RATING;
  payload: IRating;
}

export type FetchRatings =
  | FetchDataBegin
  | FetchOneRating
  | FetchDataSuccess
  | FetchDataError;
