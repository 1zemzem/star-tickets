import React from "react";
import { Paper } from "@mui/material";
import FilmCardMini from "../../components/FilmCardMini";
import FilmRoomScheme from "../../components/FilmRoomScheme";

const TicketsPage = () => {
  return (
    <Paper sx={{px: 4}}>
      <FilmCardMini />
      <FilmRoomScheme/>
    </Paper>
  );
};

export default TicketsPage;
