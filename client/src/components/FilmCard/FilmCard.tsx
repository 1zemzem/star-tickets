/* eslint-disable react-hooks/exhaustive-deps */
import * as React from "react";
import { API_URL } from "../../service/index";
import { useEffect } from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box, Button, Container, Divider, Grid } from "@mui/material";
import { useParams, useNavigate } from "react-router-dom";
import Spinner from "../Spinner";
import ErrorIndicator from "../ErrorIndicator";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import {
  errorSessionsSelector,
  filmSessionsByIdSelector,
  isLoadedSessionsSelector,
} from "../../store/selectors/filmSession";
import { fetchAllFilmSessions } from "../../store/actionCreator/filmSession";
import { fetchOneFilm } from "../../store/actionCreator/film";
import { filmByIdSelector } from "../../store/selectors/film";
import "moment/locale/ru";
import { TICKETS_ROUTE } from "../../utils/const";
// import {
//   errorfilmRoomselector,
//   filmRoomsListSelector,
//   isLoadedfilmRoomselector,
// } from "../../store/selectors/filmRoom";
// import { fetchAllFilmRooms } from "../../store/actionCreator/filmRoom";

const FilmCard = () => {
  const Img = styled("img")({
    margin: "auto",
    display: "block",
    maxWidth: "100%",
    maxHeight: "100%",
    borderRadius: "0.5rem",
  });

  const moment = require("moment");
  moment.locale("ru"); // затребовать используемый модуль
  const navigate = useNavigate();
  const { id } = useParams();
  const filmId = Number(id);
  const dispatch = useAppDispatch();
  const film = useAppSelector((state) => filmByIdSelector(state, filmId));

  // const items = useSelector(state => selectItemsByCategory(state, 'javascript'));
  const filmSessions = useAppSelector((state) =>
    filmSessionsByIdSelector(state, filmId)
  );
  const isLoaded = useAppSelector(isLoadedSessionsSelector);
  const error = useAppSelector(errorSessionsSelector);

  // const filmRoom = useAppSelector(filmRoomsListSelector);
  // const isLoadedFilmRoom = useAppSelector(isLoadedfilmRoomselector);
  // const errorFilmRoom = useAppSelector(errorfilmRoomselector);

  useEffect(() => {
    dispatch(fetchOneFilm(filmId));
    dispatch(fetchAllFilmSessions(filmId));
  }, [filmId]);

  if (isLoaded) {
    return <Spinner />;
  }

  if (error) {
    return <ErrorIndicator />;
  }

  // useEffect(() => {
  //   dispatch(fetchAllFilmRooms());
  // }, []);

  // if (isLoadedFilmRoom) {
  //   return <Spinner />;
  // }

  // if (errorFilmRoom) {
  //   return <ErrorIndicator />;
  // }

  return (
    <Card sx={{ bgcolor: "#27272a", py: 12, px: 2 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm>
          <Grid
            container
            flexDirection="column"
            alignItems="center"
            spacing={2}
          >
            <Grid item>
              <Typography gutterBottom variant="h4" component="div">
                {film?.title}
              </Typography>
            </Grid>
            <Grid item>
              <CardMedia sx={{ height: 400 }}>
                <Img alt="img" src={API_URL + "/" + film?.img} />
              </CardMedia>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} md={8}>
          <Container>
            <Divider />
            <CardContent>
              <Grid container spacing={2} justifyContent="center">
                {filmSessions?.map((filmSession) => (
                  <Grid item key={filmSession.id} sm={3} md>
                    <Button
                      variant="outlined"
                      sx={{ mb: 4 }}
                      onClick={() => navigate(TICKETS_ROUTE)}
                      
                    >
                      <Grid>
                        <Grid item>
                          {moment(filmSession.datetime).format("HH:mm")}
                        </Grid>
                        <Grid item>
                          {moment(filmSession.datetime).format("DD MMMM")}
                        </Grid>
                        <Grid item>
                          <Box sx={{ borderBottom: 1, my: 1 }} />
                        </Grid>
                        <Grid item>{filmSession.film_roomId} {filmId}</Grid>
                      </Grid>
                    </Button>
                  </Grid>
                ))}
              </Grid>
              <Divider />
              <Typography paragraph sx={{ my: 2 }}>
                {film?.info}
              </Typography>
            </CardContent>
          </Container>
        </Grid>
      </Grid>
    </Card>
  );
};

export default FilmCard;
