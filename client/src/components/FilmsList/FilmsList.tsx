import { useEffect } from "react";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import { Paper } from "@mui/material";
import { makeStyles } from "@mui/styles";
import Spinner from "../Spinner";
import ErrorIndicator from "../ErrorIndicator";
import FilmListItem from "../FilmListItem";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import {
  errorFilmSelector,
  filmsListSelector,
  isLoadedFilmSelector,
} from "../../store/selectors/film";
import { fetchFilms } from "../../store/actionCreator/film";

const FilmsList = () => {
  const dispatch = useAppDispatch();

  const films = useAppSelector(filmsListSelector);
  const isLoaded = useAppSelector(isLoadedFilmSelector);
  const error = useAppSelector(errorFilmSelector);

  useEffect(() => {
    dispatch(fetchFilms());
  }, []);

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
          {films?.map((film) => (
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
