import * as React from "react";
import HCarousel from "../../components/Carousel";
import FilmsList from "../../components/FilmsList";
import { fetchFilms } from "../../store/actionCreator/film";


export default function HomePage() {
  return (
    <>
      <HCarousel />
      <FilmsList  />
    </>
  );
}
