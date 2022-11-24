import React from "react";
import { Button, Container, Divider, Grid, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import iconChair from "../../images/icons8-rounded-square-32.png";

const seats = [
  { id: 1, row_number: 1, seat_number: 1 },
  { id: 2, row_number: 1, seat_number: 2 },
  { id: 3, row_number: 1, seat_number: 3 },
  { id: 4, row_number: 2, seat_number: 1 },
  { id: 5, row_number: 2, seat_number: 2 },
  { id: 6, row_number: 2, seat_number: 3 },
];

const Img = styled("img")({
  margin: "auto",
  display: "block",
  maxWidth: "100%",
  maxHeight: "100%",
});

const FilmRoomScheme = () => {
  return (
    <Container maxWidth="xl" sx={{ paddingTop: 2 }}>
      <Grid container>
        <Grid item xs={12} sm>
          <Divider sx={{ m: 2 }}>Экран</Divider>
          <Grid container spacing={2} justifyContent="center" xs={12} sm>
            {seats.map((seat) => (
              <Grid item key={seat.id} sm={3} md>
                <Button>
                  <Img src={iconChair} />
                </Button>
              </Grid>
            ))}
          </Grid>
          <Divider sx={{ m: 2 }}></Divider>
        </Grid>
        <Grid item xs={12} md={4}></Grid>
      </Grid>
    </Container>
  );
};

export default FilmRoomScheme;
