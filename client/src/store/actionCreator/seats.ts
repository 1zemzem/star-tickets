import { authHost, host } from "../../service/index";
import { SeatsActionTypes, FetchSeats } from "../../types/typesSeat";
import { Dispatch } from "react";

export const FetchAllSeats = (filmRoomId: number) => {
  return async (dispatch: Dispatch<FetchSeats>) => {
    try {
      dispatch({ type: SeatsActionTypes.FETCH_DATA_BEGIN });
      const response = await host.get("api/seat", { params: { filmRoomId } });

      dispatch({
        type: SeatsActionTypes.FETCH_DATA_SUCCESS,
        payload: response.data,
      });
    } catch (error) {
      dispatch({
        type: SeatsActionTypes.FETCH_DATA_ERROR,
        payload: "Произошла ошибка при загрузке страницы",
      });
    }
  };
};

export const fetchOneSeat = (id: number) => {
  return async (dispatch: Dispatch<FetchSeats>) => {
    try {
      dispatch({ type: SeatsActionTypes.FETCH_DATA_BEGIN });
      const response = await host.get("api/seat" + id);
      dispatch({
        type: SeatsActionTypes.FETCH_ONE_SEAT,
        payload: response.data,
      });
      console.log(response);
    } catch (error) {
      dispatch({
        type: SeatsActionTypes.FETCH_DATA_ERROR,
        payload: "Произошла ошибка при загрузке страницы",
      });
    }
  };
};
