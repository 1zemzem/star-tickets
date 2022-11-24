import * as React from "react";
import { styled } from "@mui/material/styles";
import { CardMedia, Container, Divider, Grid, Typography } from "@mui/material";
import imgSmall from "../../images/0a035c40-0875-4704-ae46-52d1f27d6dc3.jpg";

const Img = styled("img")({
  margin: "auto",
  display: "block",
  maxWidth: "100%",
  maxHeight: "100%",
  borderRadius: "0.5rem",
});

const FilmCardMini = () => {
  return (
    <Container maxWidth="xl" sx={{ paddingTop: 12 }}>
      <Divider />
      <Grid container spacing={4} sx={{ py: 4 }}>
        <Grid item>
          <CardMedia sx={{ height: 180 }} >
            <Img alt="img" src={imgSmall} />
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
