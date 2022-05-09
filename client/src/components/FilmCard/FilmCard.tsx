import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Container } from "@mui/material";
import img2 from "../../images/carouselImg2.jpg";
import { useAppDispatch } from "../../hooks/hooks";
import { FilmsReduserState, IFilm } from "../../types/typesFilm";
import { useNavigate } from "react-router-dom";
import { FILM_ROUTE } from "../../utils/const";



const FilmCard = () => {
  return (
    <Card sx={{ bgcolor: "#27272a" }}>
      
      <CardMedia

      // maxHeight="600"
      // image={img2}
      // alt="img"
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
            {/* {title} */}
            njnjkanfjka
          </Typography>
          <Typography variant="h6" sx={{ mb: 2 }}>
            Премьера: 6 мая 2022
          </Typography>
          <Typography paragraph sx={{ mb: 2 }}>
            {/* {description} */}
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis
            totam doloremque labore ratione ea suscipit iusto consequuntur autem
            eius delectus, vitae doloribus est obcaecati provident porro
            laborum, quod enim recusandae.
          </Typography>
        </CardContent>
      </Container>
    </Card>
  );
};

export default FilmCard;
