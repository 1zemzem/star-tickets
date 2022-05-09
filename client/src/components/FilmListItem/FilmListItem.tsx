import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
import { IFilm } from "../../types/typesFilm";
import { API_URL_FILM } from "../../service";
import { useNavigate } from "react-router-dom";
import { FILM_ROUTE } from "../../utils/const";

const useStyles = makeStyles({
  cover: {
    borderRadius: "2rem",
  },
});

type Props = IFilm;

const FilmListItem = (props: Props) => {
  const { id, title, info, genre, age_limit, img, description } = props;

  const styles = useStyles();
  const navigate = useNavigate();

  return (
    <Card
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        border: "none",
        boxShadow: "none",
        mr: 0,
        mb: 8,
      }}
      onClick={() => navigate(FILM_ROUTE + '/' + id)}
    >
      <CardMedia
        sx={{ mb: 4 }}
        //   className={styles.cover}
        component="img"
        src={API_URL_FILM + img}
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
          <Typography sx={{ mb: 4 }}>{age_limit}</Typography>
          <Typography gutterBottom variant="h5" component="h2" sx={{ mb: 4 }}>
            {title}
          </Typography>
          <Typography>{genre}</Typography>
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
    </Card>
  );
};

export default FilmListItem;
