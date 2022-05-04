import {
  FilmsState,
  FilmsAction,
  FilmsActionTypes,
} from "../../types/typesFilm";

export const initialState: FilmsState = {
  list: [],
  isLoaded: false,
  error: false,
};

export const filmsReduser = (
  state = initialState,
  action: FilmsAction
): FilmsState => {
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
        list: action.payload,
        error: false,
      };

    default:
      return state;
  }
};
