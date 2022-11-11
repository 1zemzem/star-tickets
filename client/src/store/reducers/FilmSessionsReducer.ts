import {
  FilmSessionsReducerState,
  FilmSessionsAction,
  FilmSessionsActionTypes,
} from "../../types/typesFilmSession";

export const initialState: FilmSessionsReducerState = {
  filmSessionsList: [],
  isLoaded: false,
  error: false,
};

export const filmSessionsReducer = (
  state = initialState,
  action: FilmSessionsAction
): FilmSessionsReducerState => {
  // console.log(action.type, action.payload);

  switch (action.type) {
    case FilmSessionsActionTypes.FETCH_DATA_BEGIN:
      return {
        ...state,
        isLoaded: true,
      };
    case FilmSessionsActionTypes.FETCH_DATA_ERROR:
      return {
        ...state,
        isLoaded: false,
        error: action.payload,
      };
    case FilmSessionsActionTypes.FETCH_DATA_SUCCESS:
      return {
        ...state,
        isLoaded: false,
        filmSessionsList: action.payload,
        error: false,
      };

    default:
      return state;
  }
};
