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
  console.log(props);

  const styles = useStyles();
  const navigate = useNavigate();

  useEffect(() => {
    fetchFilms();
  }, []);

  console.log(props);
  console.log(filmsList);

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
            <Grid
              item
              lg={3}
              md={4}
              sm={6}
              xs={12}
              
            >
              <FilmListItem {...film} key={film.id}/>
              {/* <Card
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  border: "none",
                  boxShadow: "none",
                  mr: 0,
                  mb: 8,
                }}
              >
                <CardMedia
                  sx={{ mb: 4 }}
                  className={styles.cover}
                  component="img"
                  image={API_URL_FILM + film.img}
                  alt="img"
                />
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography sx={{ mb: 4 }}>{film.age_limit}</Typography>
                    <Typography
                      gutterBottom
                      variant="h5"
                      component="h2"
                      sx={{ mb: 4 }}
                    >
                      {film.title}
                    </Typography>
                    <Typography>{film.genre}</Typography>
                  </CardContent>

                  <CardActions
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                    }}
                  >
                    <Button variant="outlined" sx={{ mb: 4 }}>
                      Time
                    </Button>
                    <Button>Купить</Button>
                  </CardActions>
                </Box>
              </Card> */}
            </Grid>
          ))}
        </Grid>
      </Container>
    </Paper>
  );
};

export default FilmsList;
