import { SeatsReducerState, SeatsActionTypes, SeatsAction } from "../../types/typesSeat";

export const initialState: SeatsReducerState = {
    seatsList: [],
    isLoaded: false,
    error: false,
  };

  export const seatsReducer = (
    state = initialState,
    action: SeatsAction
  ): SeatsReducerState => {
    // console.log(action.type, action.payload);
  
    switch (action.type) {
      case SeatsActionTypes.FETCH_DATA_BEGIN:
        return {
          ...state,
          isLoaded: true,
        };
      case SeatsActionTypes.FETCH_DATA_ERROR:
        return {
          ...state,
          isLoaded: false,
          error: action.payload,
        };
      case SeatsActionTypes.FETCH_DATA_SUCCESS:
        return {
          ...state,
          isLoaded: false,
          seatsList: action.payload,
          error: false,
        };
  
      default:
        return state;
    }
  };
  