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

const isLoadedSeatselector = createSelector(
  [seatsSelector],
  (seats) => seats.isLoaded
);

const errorSeatselector = createSelector(
  [seatsSelector],
  (seats) => seats.error
);

export {
  seatsListSelector,
  seatByIdSelector,
  isLoadedSeatselector,
  errorSeatselector,
};
