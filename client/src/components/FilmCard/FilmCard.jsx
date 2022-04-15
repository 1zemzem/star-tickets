import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Container } from "@mui/material";
import image from "../../images/strange.jpg";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  cover: {
    borderRadius: "2rem",
  },
});

export default function FilmCard() {
  const styles = useStyles();
  return (
    <Card sx={{ bgcolor: "#27272a" }}>
      <CardMedia
        className={styles.cover}
        component="img"
        height="600"
        image={image}
        alt="green iguana"
      />
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
            Доктор Стрэндж: В Мультивселенной безумия
          </Typography>
          <Typography variant="h6" sx={{ mb: 2 }}>
            Премьера: 6 мая 2022
          </Typography>
          <Typography paragraph sx={{ mb: 2 }}>
            В захватывающем дух блокбастере «Доктор Стрэндж: В Мультивселенной
            безумия» MARVEL открывает проход в Мультивселенную и как никогда
            далеко раздвигает границы возможного. Это шанс присоединиться к
            путешествию в неведомое - вместе с Доктором Стрэнджем и его
            магическими союзниками, которым предстоит посетить невероятные и
            опасные измерения для того, чтобы сразиться с новым загадочным
            противником.
          </Typography>
        </CardContent>
      </Container>
    </Card>
  );
}
