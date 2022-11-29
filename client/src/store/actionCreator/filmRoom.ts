import { authHost, host, API_URL_FILMROOM } from "../../service/index";
import { FilmRoomsActionTypes, FetchFilmRoom } from "../../types/typesFilmRoom";
import { Dispatch } from "react";

export const fetchAllFilmRooms = () => {
  return async (dispatch: Dispatch<FetchFilmRoom>) => {
    try {
      dispatch({ type: FilmRoomsActionTypes.FETCH_DATA_BEGIN_FILMROOM });
      const response = await host.get(API_URL_FILMROOM);

      dispatch({
        type: FilmRoomsActionTypes.FETCH_DATA_SUCCESS_FILMROOM,
        payload: response.data,
      });
    } catch (error) {
      dispatch({
        type: FilmRoomsActionTypes.FETCH_DATA_ERROR_FILMROOM,
        payload: "Произошла ошибка при загрузке страницы",
      });
    }
  };
};

export const fetchOneFilmSession = (id: number) => {
  return async (dispatch: Dispatch<FetchFilmRoom>) => {
    try {
      dispatch({ type: FilmRoomsActionTypes.FETCH_DATA_BEGIN_FILMROOM });
      const response = await host.get(API_URL_FILMROOM + id);
      dispatch({
        type: FilmRoomsActionTypes.FETCH_ONE_FILMROOM,
        payload: response.data,
      });
      console.log(response);
    } catch (error) {
      dispatch({
        type: FilmRoomsActionTypes.FETCH_DATA_ERROR_FILMROOM,
        payload: "Произошла ошибка при загрузке страницы",
      });
    }
  };
};
