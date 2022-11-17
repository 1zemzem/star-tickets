import { createSelector } from "@reduxjs/toolkit";
import type { RootState } from "../../store/store";

const ratingsSelector = (store: RootState) => store.ratings;

const ratingsListSelector = createSelector(
  [ratingsSelector], 
  (ratings) => ratings.ratingsList
);

const ratingByIdSelector = createSelector(
  [ratingsListSelector, (store: RootState, id: number) => id],
  (ratings, id) => ratings.find((item) => item.id === id)
);

const isLoadedRatingselector = createSelector(
  [ratingsSelector], 
  (ratings) => ratings.isLoaded
);

const errorRatingselector = createSelector(
  [ratingsSelector], 
  (ratings) => ratings.error
);

//   const filmByIdSelector = (id: number) => (store: RootState) => {
//     return store.ratings.ratingsList.filter(
//       (film) => film.ratingId === id
//     );
//   };

export { ratingsListSelector, ratingByIdSelector, isLoadedRatingselector, errorRatingselector };