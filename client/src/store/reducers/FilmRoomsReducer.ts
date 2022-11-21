import {
    FilmRoomsAction, FilmRoomsActionTypes, FilmRoomsReducerState
  } from "../../types/typesFilmRoom";
  
  export const initialState: FilmRoomsReducerState = {
    filmRoomsList: [],
    isLoaded: false,
    error: false,
  };
  
  export const filmRoomsReducer = (
    state = initialState,
    action: FilmRoomsAction
  ): FilmRoomsReducerState => {
    // console.log(action.type, action.payload);
  
    switch (action.type) {
      case FilmRoomsActionTypes.FETCH_DATA_BEGIN_FILMROOM:
        return {
          ...state,
          isLoaded: true,
        };
      case FilmRoomsActionTypes.FETCH_DATA_ERROR_FILMROOM:
        return {
          ...state,
          isLoaded: false,
          error: action.payload,
        };
      case FilmRoomsActionTypes.FETCH_DATA_SUCCESS_FILMROOM:
        return {
          ...state,
          isLoaded: false,
          filmRoomsList: action.payload,
          error: false,
        };
  
      default:
        return state;
    }
  };