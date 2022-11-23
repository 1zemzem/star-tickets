/* eslint-disable react-hooks/exhaustive-deps */
import * as React from "react";
import { API_URL } from "../../service/index";
import { useEffect } from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box, Button, Container, Grid } from "@mui/material";
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

const FilmCard = () => {
  const Img = styled("img")({
    margin: "auto",
    display: "block",
    maxWidth: "100%",
    maxHeight: "100%",
    borderRadius: "0.5rem",
  });

  const navigate = useNavigate();
  const { id } = useParams();
  const filmId = Number(id);
  const dispatch = useAppDispatch();

  const film = useAppSelector((state) => filmByIdSelector(state, filmId));

  const moment = require("moment");
  moment.locale("ru"); // затребовать используемый модуль

  // const items = useSelector(state => selectItemsByCategory(state, 'javascript'));
  const filmSessions = useAppSelector((state) =>
    filmSessionsByIdSelector(state, filmId)
  );

  const isLoaded = useAppSelector(isLoadedSessionsSelector);
  const error = useAppSelector(errorSessionsSelector);

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

  return (
    <Card sx={{ bgcolor: "#27272a", py: 12, px: 2 }}>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <CardMedia sx={{ height: 400 }}>
            <Img alt="img" src={API_URL + "/" + film?.img} />
          </CardMedia>
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
                  <Grid item key={filmSession.id} lg={3} md={4} sm={6} xs={12}>
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
                        <Grid item>{filmId}</Grid>
                      </Grid>
                    </Button>
                  </Grid>
                ))}
              </Grid>
            </CardContent>
          </Container>
        </Grid>
      </Grid>
    </Card>
  );
};

export default FilmCard;
