import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import FilmCard from "../../components/FilmCard/FilmCard";
import { fetchOneFilm } from "../../store/actionCreator/film";

const FilmPage = () => {
  const [film, setFilm] = useState({ info: [] });

  useEffect(() => {
    fetchOneFilm(id).then((data) => setFilm(data));
  }, []);

  const { id } = useParams();
  console.log(id);
  return <FilmCard id={id} />;
};

export default FilmPage;
