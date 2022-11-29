import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { useParams, useNavigate } from "react-router-dom";
import { Box, Button, Container, Divider, Grid, Popper } from "@mui/material";
import { styled } from "@mui/material/styles";
import iconChair from "../../images/icons8-sleeper-chair-24.png";
import Spinner from "../Spinner";
import ErrorIndicator from "../ErrorIndicator/ErrorIndicator";
import {
  errorSeatselector,
  isLoadedSeatselector,
  seatsListSelector,
} from "../../store/selectors/seats";
import { FetchAllSeats } from "../../store/actionCreator/seats";

const Img = styled("img")({
  margin: "auto",
  display: "block",
  maxWidth: "100%",
  maxHeight: "100%",
});

const FilmRoomScheme = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const filmRoomId = Number(id);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const open = Boolean(anchorEl);
  const id_pop = open ? "simple-popper" : undefined;
  const dispatch = useAppDispatch();
  const seats = useAppSelector(seatsListSelector);
  const isLoaded = useAppSelector(isLoadedSeatselector);
  const error = useAppSelector(errorSeatselector);

  useEffect(() => {
    dispatch(FetchAllSeats(filmRoomId));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (isLoaded) {
    return <Spinner />;
  }

  if (error) {
    return <ErrorIndicator />;
  }

  return (
    <Container maxWidth="xl" sx={{ paddingTop: 2 }}>
      <Grid container>
        <Grid item xs={12}>
          <Divider sx={{ m: 2 }}>Экран</Divider>

          <Grid container spacing={2} justifyContent="center">
            {seats.map((seat) => (
              <Grid item key={seat.id}>
                <Button
                  aria-describedby={id_pop}
                  type="button"
                  onClick={handleClick}
                >
                  <Img src={iconChair} />
                </Button>
                <Popper id={id_pop} open={open} anchorEl={anchorEl} placement="top">
                  <Box
                    sx={{
                      border: 1,
                      p: 1,
                      bgcolor: "background.paper",
                      color: "white",
                    }}
                  >
                    ряд {seat.row_number} место {seat.seat_number}
                  </Box>
                </Popper>
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
