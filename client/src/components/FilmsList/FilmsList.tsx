import { useEffect } from "react";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import { Paper } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { FilmsReducerState } from "../../types/typesFilm";
import Spinner from "../Spinner";
import ErrorIndicator from "../ErrorIndicator";
import { useNavigate } from "react-router-dom";
import FilmListItem from "../FilmListItem";

type Props = Partial<FilmsReducerState> & { fetchFilms: Function };

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
  // eslint-disable-next-line react-hooks/exhaustive-deps
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
          {filmsList?.map((film) => (
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
