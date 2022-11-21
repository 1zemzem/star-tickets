export interface ISeat {
  id: number;
  row_number: number;
  seat_number: number;
  filmRoomID: number;
}
export interface SeatsReducerState {
  seatsList: ISeat[];
  isLoaded: boolean;
  error: boolean;
}

export interface ISeatsStore {
  seats: SeatsReducerState;
}

export interface SeatsAction {
  type: SeatsActionTypes;
  payload?: any;
}

export enum SeatsActionTypes {
  FETCH_DATA_BEGIN = "FETCH_SEATS_BEGIN",
  FETCH_DATA_SUCCESS = "FETCH_SEATS_SUCCESS",
  FETCH_DATA_ERROR = "FETCH_SEATS_ERROR",
  FETCH_ONE_SEAT = "FETCH_ONE_SEAT",
}
interface FetchDataBegin {
  type: SeatsActionTypes.FETCH_DATA_BEGIN;
}
interface FetchDataSuccess {
  type: SeatsActionTypes.FETCH_DATA_SUCCESS;
  payload: ISeat[];
}
interface FetchDataError {
  type: SeatsActionTypes.FETCH_DATA_ERROR;
  payload: string;
}

interface FetchOneSeat {
  type: SeatsActionTypes.FETCH_ONE_SEAT;
  payload: ISeat;
}

export type FetchSeats =
  | FetchDataBegin
  | FetchDataError
  | FetchDataSuccess
  | FetchOneSeat