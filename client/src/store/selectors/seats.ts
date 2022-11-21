import { createSelector } from "@reduxjs/toolkit";
import type { RootState } from "../../store/store";

const seatsSelector = (store: RootState) => store.seats;

const seatsListSelector = createSelector(
  [seatsSelector], 
  (seats) => seats.seatsList
);

const seatByIdSelector = createSelector(
  [seatsListSelector, (store: RootState, id: number) => id],
  (seats, id) => seats.find((item) => item.id === id)
);

const isLoadedRatingselector = createSelector(
  [seatsSelector], 
  (seats) => seats.isLoaded
);

const errorRatingselector = createSelector(
  [seatsSelector], 
  (seats) => seats.error
);

//   const filmByIdSelector = (id: number) => (store: RootState) => {
//     return store.ratings.ratingsList.filter(
//       (film) => film.ratingId === id
//     );
//   };

export { seatsListSelector, seatByIdSelector, isLoadedRatingselector, errorRatingselector };