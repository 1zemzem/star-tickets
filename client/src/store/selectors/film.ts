import type { RootState } from "../../store/store";

const filmsSelector = (store: RootState) => {
    return store.films.filmsList;
  };

//   const filmByIdSelector = (id: number) => (store: RootState) => {
//     return store.films.filmsList.filter(
//       (film) => film.ratingId === id
//     );
//   };

  const isLoadedFilmSelector = (store: RootState) => {
    return store.films.isLoaded;
  }

  const errorFilmSelector = (store: RootState) => {
    return store.films.error;
  }

  export {
    filmsSelector,
    isLoadedFilmSelector,
    errorFilmSelector,
  }