import { createSelector } from "@reduxjs/toolkit";
import type { RootState } from "../../store/store";

const filmsSelector = (store: RootState) => store.films;

const filmsListSelector = createSelector(
  [filmsSelector], 
  (films) => films.filmsList
);

const filmByIdSelector = createSelector(
  [filmsListSelector, (store: RootState, id: number) => id],
  (films, id) => films.find((item) => item.id === id)
);

const isLoadedFilmSelector = createSelector(
  [filmsSelector], 
  (films) => films.isLoaded
);

const errorFilmSelector = createSelector(
  [filmsSelector], 
  (films) => films.error
);

//   const filmByIdSelector = (id: number) => (store: RootState) => {
//     return store.films.filmsList.filter(
//       (film) => film.ratingId === id
//     );
//   };

export { filmsListSelector, filmByIdSelector, isLoadedFilmSelector, errorFilmSelector };
