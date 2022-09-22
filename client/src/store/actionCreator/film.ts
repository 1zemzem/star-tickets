import { authHost, host } from "../../service/index";
import { FilmsActionTypes, FetchData } from "../../types/typesFilm";
import { Dispatch } from "react";

export const fetchFilms = () => {
  return async (dispatch: Dispatch<FetchData>) => {
    try {
      dispatch({ type: FilmsActionTypes.FETCH_DATA_BEGIN });
      const response = await host.get("api/film");
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
      const response = await host.get("api/film" + id);
      dispatch({
        type: FilmsActionTypes.FETCH_DATA_SUCCESS,
        payload: response.data,
      });
      console.log(response)
    } catch (error) {
      dispatch({
        type: FilmsActionTypes.FETCH_DATA_ERROR,
        payload: "Произошла ошибка при загрузке страницы",
      });
    }
  };
};
