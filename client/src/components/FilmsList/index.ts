import { ThunkDispatch } from "@reduxjs/toolkit";
import { Dispatch } from "react";
import { connect } from "react-redux";
import { fetchFilms } from "../../store/actionCreator/film";
import { FilmsReducerState, IFilmStore } from "../../types/typesFilm";
import FilmsList from "./FilmsList";

const mapStateToProps = ({films}:  IFilmStore): Partial<FilmsReducerState> => ({...films});
const mapDispatchToProps = (dispatch:Dispatch<any> & ThunkDispatch<any, any, any>) => ({
    fetchFilms: () => dispatch(fetchFilms())
})

export default connect(mapStateToProps, mapDispatchToProps)(FilmsList);

