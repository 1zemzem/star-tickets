import * as React from "react";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { Box, Paper } from "@mui/material";
import { makeStyles } from "@mui/styles";


const useStyles = makeStyles({
  cover: {
    borderRadius: "2rem",
  },
});

const cards = [1, 2, 3, 4, 5, 6];

const FilmList = () => {
  const styles = useStyles();
  return (
    <Paper sx={{ py: 6 }}>
      <Container maxWidth="lg">
        <Grid
          container
          rowSpacing={8}
          columnSpacing={4}
          px={4}
          justifyContent="center"
        >
          {cards.map((card) => (
            <Grid item key={card} lg={3} md={4} sm={6} xs={12}>
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
                <CardMedia
                  sx={{ mb: 4 }}
                  className={styles.cover}
                  component="img"
                  image="https://source.unsplash.com/random"
                  alt="random"
                />
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography sx={{ mb: 4 }}>age limit</Typography>
                    <Typography
                      gutterBottom
                      variant="h5"
                      component="h2"
                      sx={{ mb: 4 }}
                    >
                      Title
                    </Typography>
                    <Typography>genre</Typography>
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
            </Grid>
          ))}
        </Grid>
      </Container>
    </Paper>
  );
};

export default FilmList;
