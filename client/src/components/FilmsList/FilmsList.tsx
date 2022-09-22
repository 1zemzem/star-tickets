import * as React from "react";
import { useEffect } from "react";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { Box, Paper } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useAppSelector, useAppDispatch } from "../../hooks/hooks";
import { FilmsReduserState } from "../../types/typesFilm";
import { fetchFilms } from "../../store/actionCreator/film";
import Spinner from "../Spinner";
import ErrorIndicator from "../ErrorIndicator";
import { API_URL_FILM } from "../../service";
import { useNavigate } from "react-router-dom";
import { FILM_ROUTE } from "../../utils/const";
import FilmListItem from "../FilmListItem";

type Props = Partial<FilmsReduserState> & { fetchFilms: Function };

const useStyles = makeStyles({
  cover: {
    borderRadius: "2rem",
  },
});

const FilmsList = (props: Props) => {
  const { filmsList, fetchFilms, error, isLoaded } = props;
  // console.log(props);

  const styles = useStyles();
  const navigate = useNavigate();

  useEffect(() => {
    fetchFilms();
  }, []);

  // console.log(props);
  // console.log(filmsList);

  if (isLoaded) {
    return <Spinner />;
  }

  if (error) {
    return <ErrorIndicator />;
  }

  return (
    <Paper sx={{ py: 6 }}>
      <Container maxWidth="lg">
        <Grid
          container
          rowSpacing={8}
          columnSpacing={4}
          px={4}
          justifyContent="center"
        >
          {filmsList?.map((film: any) => (
            // <div>{film.title}</div>
            <Grid item lg={3} md={4} sm={6} xs={12}>
              <FilmListItem {...film} key={film.id} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Paper>
  );
};

export default FilmsList;
