import { authHost, host } from "../../service/index";
import { FilmsActionTypes, FilmsAction } from "../../types/typesFilm";

export const fetchFilms = () => {
  return async (dispatch: any) => {
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
