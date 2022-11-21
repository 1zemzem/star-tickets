import { createSelector } from "@reduxjs/toolkit";
import type { RootState } from "../../store/store";

const filmRoomsSelector = (store: RootState) => store.filmRooms;

const filmRoomsListSelector = createSelector(
  [filmRoomsSelector], 
  (filmRooms) => filmRooms.filmRoomsList
);

const filmRoomByIdSelector = createSelector(
  [filmRoomsListSelector, (store: RootState, id: number) => id],
  (filmRooms, id) => filmRooms.find((item) => item.id === id)
);

const isLoadedfilmRoomselector = createSelector(
  [filmRoomsSelector], 
  (filmRooms) => filmRooms.isLoaded
);

const errorfilmRoomselector = createSelector(
  [filmRoomsSelector], 
  (filmRooms) => filmRooms.error
);

//   const filmByIdSelector = (id: number) => (store: RootState) => {
//     return store.filmRooms.filmRoomsList.filter(
//       (film) => film.ratingId === id
//     );
//   };

export { filmRoomsListSelector, filmRoomByIdSelector, isLoadedfilmRoomselector, errorfilmRoomselector };