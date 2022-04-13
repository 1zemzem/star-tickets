import React from "react";
import { Card, CardMedia, Container } from "@mui/material";
import filmImg from "../../images/man-hiding-face-with-grey-textile 1.jpg";

const HCarousel = () => {
  return (
   
      <Card>
        <CardMedia component="img" height="600" image={filmImg} alt="film" />
      </Card>
   
  );
};

export default HCarousel;
