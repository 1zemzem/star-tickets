export interface IFilmRoom {
    id: number;
    film_room_name: string;
}

export interface FilmRoomsReducerState {
    filmRoomsList: IFilmRoom[];
    isLoaded: boolean;
    error: boolean;
  }

  export interface IFilmRoomStore {
    filmRooms: FilmRoomsReducerState;
  }
  
  export interface FilmRoomsAction {
    type: FilmRoomsActionTypes;
    payload?: any;
  }
  
  export enum FilmRoomsActionTypes {
    FETCH_DATA_BEGIN_FILMROOM = "FETCH_DATA_BEGIN_FILMROOM",
    FETCH_DATA_SUCCESS_FILMROOM = "FETCH_DATA_SUCCESS_FILMROOM",
    FETCH_DATA_ERROR_FILMROOM = "FETCH_DATA_ERROR_FILMROOM",
    FETCH_ONE_FILMROOM = "FETCH_ONE_FILMROOM",
  }
  interface FetchDataBegin {
    type: FilmRoomsActionTypes.FETCH_DATA_BEGIN_FILMROOM;
  }
  interface FetchDataSuccess {
    type: FilmRoomsActionTypes.FETCH_DATA_SUCCESS_FILMROOM;
    payload: IFilmRoom[];
  }
  interface FetchDataError {
    type: FilmRoomsActionTypes.FETCH_DATA_ERROR_FILMROOM;
    payload: string;
  }
  
  interface FetchOneFilmRoom {
    type: FilmRoomsActionTypes.FETCH_ONE_FILMROOM;
    payload: IFilmRoom;
  }

  export type FetchFilmRoom =
  | FetchDataBegin
  | FetchOneFilmRoom
  | FetchDataSuccess
  | FetchDataError;