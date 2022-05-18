import * as React from "react";
import { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Container, Grid } from "@mui/material";
import { host } from "../../service";
import { useParams } from "react-router-dom";

const FilmCard = () => {
  const { id } = useParams();
  console.log(id);

  const fetchOneFilm = async (id) => {
    const { data } = await host.get("api/film/" + id);
    return data;
  };
  const [film, setFilm] = useState({});

  useEffect(() => {
    fetchOneFilm(id).then((data) => setFilm(data));
  }, []);

  return (
    <Card sx={{ bgcolor: "#27272a" }}>
      <CardMedia component="img" image={film.img} alt="img" height="400" />
      <Container>
        <CardActions>
          <Button
            size="large"
            variant="contained"
            color="secondary"
            sx={{ borderRadius: 20, my: 2 }}
          >
            Купить билет
          </Button>
        </CardActions>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" sx={{ mb: 4 }}>
            {film.title}
          </Typography>

          <Typography paragraph sx={{ mb: 2 }}>
            {film.info}
          </Typography>
          <Grid container spacing={2}>
            <Grid item>
              <Button variant="outlined" sx={{ mb: 4 }}>
                Time
              </Button>
            </Grid>
            <Grid item>
              <Button variant="outlined" sx={{ mb: 4 }}>
                Time
              </Button>
            </Grid>
            <Grid item>
              <Button variant="outlined" sx={{ mb: 4 }}>
                Time
              </Button>
            </Grid>
          </Grid>
        </CardContent>
      </Container>
    </Card>
  );
};

export default FilmCard;
