import { ThunkDispatch } from "@reduxjs/toolkit";
import { Dispatch } from "react";
import { connect } from "react-redux";
import { fetchFilmSessions } from "../../store/actionCreator/filmSession";
import { FilmSessionsReduserState, IFilmSessionStore } from "../../types/typesFilmSession";
import FilmCard from "./FilmCard";

const mapStateToProps = ({filmSessions}:  IFilmSessionStore): Partial<FilmSessionsReduserState> => ({...filmSessions});
const mapDispatchToProps = (dispatch:Dispatch<any> & ThunkDispatch<any, any, any>) => ({
    fetchFilmSessions: () => dispatch(fetchFilmSessions())
})

export default connect(mapStateToProps, mapDispatchToProps)(FilmCard);


