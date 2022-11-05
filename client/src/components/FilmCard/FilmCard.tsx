import * as React from "react";
import { API_URL } from "../../service/index";
import { useEffect, useState } from "react";
import Card from "@mui/material/Card";
// import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, Container, Grid, Paper } from "@mui/material";
import { host } from "../../service";
import { useParams } from "react-router-dom";
import { IFilm } from "../../types/typesFilm";
import Spinner from "../Spinner";
import ErrorIndicator from "../ErrorIndicator";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import {
  errorSessionsSelector,
  filmSessionsByIdSelector,
  isLoadedSessionsSelector,
} from "../../store/selectors/filmSession";
import { fetchFilmSessions } from "../../store/actionCreator/filmSession";

const FilmCard = () => {
  const { id } = useParams();

  const dispatch = useAppDispatch();

  const filmSessions = useAppSelector(filmSessionsByIdSelector(Number(id)));

  const isLoaded = useAppSelector(isLoadedSessionsSelector);
  const error = useAppSelector(errorSessionsSelector);

  const [film, setFilm] = useState<IFilm | null>(null);

  console.log(filmSessions);

  const fetchOneFilm = async (id: any) => {
    const { data } = await host.get("api/film/" + id);
    return data;
  };

  useEffect(() => {
    fetchOneFilm(id).then((data) => {
      setFilm(data);
      dispatch(fetchFilmSessions(data.id));
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  

  if (isLoaded) {
    return <Spinner />;
  }

  if (error) {
    return <ErrorIndicator />;
  }

  return (
    <Paper >
    <Card sx={{ bgcolor: "#27272a", py: 12, px: 2 }}>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <CardMedia
            component="img"
            src={API_URL + "/" + film?.img}
            alt="img"
            height={480}
          />
        </Grid>
        <Grid item xs={8}>
          <Container>
            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                sx={{ mb: 4 }}
              >
                {film?.title}
              </Typography>

              <Typography paragraph sx={{ mb: 2 }}>
                {film?.info}
              </Typography>

              <Grid container spacing={2}>
                {filmSessions?.map((filmSession) => (
                  <Grid item lg={3} md={4} sm={6} xs={12}>
                    <Button
                      variant="outlined"
                      sx={{ mb: 4 }}
                      key={filmSession.id}
                    >
                      {filmSession.datetime}{" "}
                    </Button>
                  </Grid>
                ))}
              </Grid>
            </CardContent>
          </Container>
        </Grid>
      </Grid>
    </Card>
    </Paper>
  );
};

export default FilmCard;
