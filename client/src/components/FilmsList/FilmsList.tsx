import { useEffect } from "react";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
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
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (isLoaded) {
    return <Spinner />;
  }

  if (error) {
    return <ErrorIndicator />;
  }

  return (
    <Container maxWidth="xl" sx={{ paddingTop: 6 }}>
      <Grid container spacing={2} justifyContent="center">
        {films?.map((film) => (
          <Grid item key={film.id} lg={3} md={4} sm={6} xs={12}>
            <FilmListItem {...film} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default FilmsList;
