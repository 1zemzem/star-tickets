import {
  FilmsReducerState,
  FilmsAction,
  FilmsActionTypes,
} from "../../types/typesFilm";

export const initialState: FilmsReducerState = {
  filmsList: [],
  isLoaded: false,
  error: false,
};

export const filmsReducer = (
  state = initialState,
  action: FilmsAction
): FilmsReducerState => {
  // console.log(action.type, action.payload);
  switch (action.type) {
    case FilmsActionTypes.FETCH_DATA_BEGIN:
      return {
        ...state,
        isLoaded: true,
      };
    case FilmsActionTypes.FETCH_DATA_ERROR:
      return {
        ...state,
        isLoaded: false,
        error: action.payload,
      };

    case FilmsActionTypes.FETCH_DATA_SUCCESS:
      return {
        ...state,
        isLoaded: false,
        filmsList: action.payload,
        error: false,
      };
    case FilmsActionTypes.FETCH_ONE_FILM:
      return {
        ...state,
        isLoaded: false,
        error: false,
        filmsList: [...state.filmsList, action.payload],
      };

    default:
      return state;
  }
};
