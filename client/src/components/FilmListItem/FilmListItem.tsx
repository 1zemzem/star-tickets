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
import { makeStyles } from "@mui/styles";
import { IFilm } from "../../types/typesFilm";
import { API_URL } from "../../service/index";
import { useNavigate } from "react-router-dom";
import { FILM_ROUTE } from "../../utils/const";

type Props = IFilm;

const FilmListItem = (props: Props) => {
  const { id, title, genre, age_limit, img, } = props;

  const useStyles = makeStyles({
    cover: {
      borderRadius: "0.5rem",
    },
  });
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
    >
      <CardActionArea onClick={() => navigate(FILM_ROUTE + "/" + id)}>
       
        <CardMedia
          sx={{ mb: 4 }}
            className={styles.cover}
          component="img"
          src={API_URL + "/" +  img}
          alt="img"
          height={480}
        />
       
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <CardContent sx={{ flexGrow: 1 }}>
            
            <Typography gutterBottom variant="h5" component="h2" sx={{ mb: 4 }} textAlign="center">
              {title}
            </Typography>
            <Typography textAlign="center">{genre}</Typography>
            <Typography sx={{ mb: 4 }} textAlign="center">{age_limit}+</Typography>
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
