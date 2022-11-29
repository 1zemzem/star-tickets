import { authHost, host, API_URL_FILMSESSION } from "../../service/index";
import {
  FilmSessionsActionTypes,
  FetchFilmSession,
} from "../../types/typesFilmSession";
import { Dispatch } from "react";

export const fetchAllFilmSessions = (filmId: number) => {
  return async (dispatch: Dispatch<FetchFilmSession>) => {
    try {
      dispatch({ type: FilmSessionsActionTypes.FETCH_DATA_BEGIN_FILMSESSION });
      const response = await host.get(API_URL_FILMSESSION, {
        params: { filmId },
      });

      dispatch({
        type: FilmSessionsActionTypes.FETCH_DATA_SUCCESS_FILMSESSION,
        payload: response.data,
      });
    } catch (error) {
      dispatch({
        type: FilmSessionsActionTypes.FETCH_DATA_ERROR_FILMSESSION,
        payload: "Произошла ошибка при загрузке страницы",
      });
    }
  };
};

export const fetchOneFilmSession = (id: number) => {
  return async (dispatch: Dispatch<FetchFilmSession>) => {
    try {
      dispatch({ type: FilmSessionsActionTypes.FETCH_DATA_BEGIN_FILMSESSION });
      const response = await host.get(API_URL_FILMSESSION + id);
      dispatch({
        type: FilmSessionsActionTypes.FETCH_ONE_FILMSESSION,
        payload: response.data,
      });
      // console.log(response);
    } catch (error) {
      dispatch({
        type: FilmSessionsActionTypes.FETCH_DATA_ERROR_FILMSESSION,
        payload: "Произошла ошибка при загрузке страницы",
      });
    }
  };
};
