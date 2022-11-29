import { authHost, host } from "../../service/index";
import { RatingsActionTypes, FetchRatings } from "../../types/typesRating";
import { Dispatch } from "react";

export const fetchAllRatings = () => {
    return async (dispatch: Dispatch<FetchRatings>) => {
      try {
        dispatch({ type: RatingsActionTypes.FETCH_DATA_BEGIN});
        const response = await host.get("api/rating");
        dispatch({
          type: RatingsActionTypes.FETCH_DATA_SUCCESS,
          payload: response.data,
        });      
      } catch (error) {
        dispatch({
          type: RatingsActionTypes.FETCH_DATA_ERROR,
          payload: "Произошла ошибка при загрузке страницы",
        });
      }
    };
  };

  export const fetchOneRating = (id: number) => {
    return async (dispatch: Dispatch<FetchRatings>) => {
      try {
        dispatch({ type: RatingsActionTypes.FETCH_DATA_BEGIN });
        const response = await host.get("api/rating" + id);
        dispatch({
          type: RatingsActionTypes.FETCH_ONE_RATING,
          payload: response.data,
        });
        console.log(response)
      } catch (error) {
        dispatch({
          type: RatingsActionTypes.FETCH_DATA_ERROR,
          payload: "Произошла ошибка при загрузке страницы",
        });
      }
    };
  };