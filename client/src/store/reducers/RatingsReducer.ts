import {
  RatingsReducerState,
  RatingsAction,
  RatingsActionTypes,
} from "../../types/typesRating";

export const initialState: RatingsReducerState = {
  ratingsList: [],
  isLoaded: false,
  error: false,
};

export const RatingsReducer = (
  state = initialState,
  action: RatingsAction
): RatingsReducerState => {
  // console.log(action.type, action.payload);
  switch (action.type) {
    case RatingsActionTypes.FETCH_RATING_BEGIN:
      return {
        ...state,
        isLoaded: true,
      };
    case RatingsActionTypes.FETCH_RATING_ERROR:
      return {
        ...state,
        isLoaded: false,
        error: action.payload,
      };
    case RatingsActionTypes.FETCH_RATING_SUCCESS:
      return {
        ...state,
        isLoaded: false,
        ratingsList: action.payload,
        error: false,
      };

    default:
      return state;
  }
};
