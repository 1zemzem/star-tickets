import React from "react";
import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  // Grid,
  Typography,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { IFilm } from "../../types/typesFilm";
import { API_URL } from "../../service/index";
import { useNavigate } from "react-router-dom";
import { FILM_ROUTE } from "../../utils/const";

type Props = IFilm;

const FilmListItem = (props: Props) => {
  const { id, title, genre, age_limit, img } = props;

  const Img = styled("img")({
    margin: "auto",
    display: "block",
    maxWidth: "100%",
    maxHeight: "100%",
    borderRadius: "0.5rem",
  });
  const navigate = useNavigate();

  return (
    <Card
      sx={{
        display: "flex",
        flexDirection: "column",
        border: "none",
        boxShadow: "none",
        mb: 4,
      }}
    >
      <CardActionArea onClick={() => navigate(FILM_ROUTE + "/" + id)}>
        <CardMedia sx={{ height: 360 }}>
          <Img alt="img" src={API_URL + "/" + img} />
        </CardMedia>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <CardContent sx={{ flexGrow: 1 }}>
            <Typography
              gutterBottom
              variant="h5"
              component="h2"
              sx={{ mb: 4 }}
              textAlign="center"
            >
              {title}
            </Typography>
            <Typography textAlign="center">{genre}</Typography>
            <Typography sx={{ mb: 4 }} textAlign="center">
              {age_limit}+
            </Typography>
          </CardContent>

          <CardActions
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Button
              variant="outlined"
              color="secondary"
              sx={{ borderRadius: 20 }}
            >
              Купить
            </Button>
          </CardActions>
        </Box>
      </CardActionArea>
    </Card>
  );
};

export default FilmListItem;
