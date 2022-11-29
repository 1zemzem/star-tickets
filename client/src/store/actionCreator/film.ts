import { authHost, host, API_URL_FILM } from "../../service/index";
import { FilmsActionTypes, FetchData } from "../../types/typesFilm";
import { Dispatch } from "react";


export const fetchFilms = () => {
  return async (dispatch: Dispatch<FetchData>) => {
    try {
      dispatch({ type: FilmsActionTypes.FETCH_DATA_BEGIN });
      const response = await host.get(API_URL_FILM);
      dispatch({
        type: FilmsActionTypes.FETCH_DATA_SUCCESS,
        payload: response.data,
      });      
    } catch (error) {
      dispatch({
        type: FilmsActionTypes.FETCH_DATA_ERROR,
        payload: "Произошла ошибка при загрузке страницы",
      });
    }
  };
};

export const fetchOneFilm = (id: number) => {
  return async (dispatch: Dispatch<FetchData>) => {
    try {
      dispatch({ type: FilmsActionTypes.FETCH_DATA_BEGIN });
      const response = await host.get(API_URL_FILM + id);
      dispatch({
        type: FilmsActionTypes.FETCH_ONE_FILM,
        payload: response.data,
      });
      // console.log(response)
    } catch (error) {
      dispatch({
        type: FilmsActionTypes.FETCH_DATA_ERROR,
        payload: "Произошла ошибка при загрузке страницы",
      });
    }
  };
};
