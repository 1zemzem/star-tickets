import * as React from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { useParams, useNavigate } from "react-router-dom";
import { styled } from "@mui/material/styles";
import { CardMedia, Container, Divider, Grid, Typography } from "@mui/material";
import imgSmall from "../../images/0a035c40-0875-4704-ae46-52d1f27d6dc3.jpg";
import { errorFilmSelector, filmByIdSelector, isLoadedFilmSelector } from "../../store/selectors/film";
import Spinner from "../Spinner";
import ErrorIndicator from "../ErrorIndicator/ErrorIndicator";
import { fetchOneFilm } from "../../store/actionCreator/film";
import { useEffect } from "react";

const Img = styled("img")({
  margin: "auto",
  display: "block",
  maxWidth: "100%",
  maxHeight: "100%",
  borderRadius: "0.5rem",
});

const FilmCardMini = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  console.log(id)
  const filmId = Number(id);
  const dispatch = useAppDispatch();
  const film = useAppSelector((state) => filmByIdSelector(state, filmId));

  // const items = useSelector(state => selectItemsByCategory(state, 'javascript'));
  
  const isLoaded = useAppSelector(isLoadedFilmSelector);
  const error = useAppSelector(errorFilmSelector);

  // const filmRoom = useAppSelector(filmRoomsListSelector);
  // const isLoadedFilmRoom = useAppSelector(isLoadedfilmRoomselector);
  // const errorFilmRoom = useAppSelector(errorfilmRoomselector);

  useEffect(() => {
    dispatch(fetchOneFilm(filmId));
    
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filmId]);

  if (isLoaded) {
    return <Spinner />;
  }

  if (error) {
    return <ErrorIndicator />;
  }
  return (
    <Container maxWidth="xl" sx={{ paddingTop: 12 }}>
      <Divider />
      <Grid container spacing={4} sx={{ py: 4 }}>
        <Grid item>
          <CardMedia sx={{ height: 180 }} >
            <Img alt="img" src={film?.img} />
          </CardMedia>
        </Grid>
        <Grid item xs={12} sm container alignItems="center">
          <Grid item xs container direction="column" spacing={2}>
            <Grid item xs>
              <Typography gutterBottom variant="h5" component="div">
                Film Title
              </Typography>
              <Typography variant="body1" gutterBottom>
                Film Room
              </Typography>
              <Typography variant="body1" gutterBottom>
                Age Limit
              </Typography>
            </Grid>
          </Grid>
          <Grid item>
            <Typography variant="h5" component="div">
              Date Time
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Divider />
    </Container>
  );
};

export default FilmCardMini;
