import {
  IFilm,
  FilmState,
  FilmAction,
  FilmActionTypes,
} from "../../types/typesFilm";

export const initialState: FilmState = {
  film: {} as IFilm,
  isLoaded: false,
  error: false,
};

export const filmReduser = (
  state = initialState,
  action: FilmAction
): FilmState => {
  switch (action.type) {
    // case DataActionTypes.ADD_CITY:
    //   return {
    //     ...state,
    //     city: action.payload,
    //   };
    case FilmActionTypes.FETCH_DATA_BEGIN:
      return {
        ...state,
        isLoaded: true,
      };
    case FilmActionTypes.FETCH_DATA_ERROR:
      return {
        ...state,
        isLoaded: false,
        error: true,
      };
    case FilmActionTypes.FETCH_DATA_SUCCESS:
      return {
        ...state,
        isLoaded: false,
        film: action.payload,
        error: false,
      };

    default:
      return state;
  }
};
