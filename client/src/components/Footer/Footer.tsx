import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Container, Paper } from "@mui/material";

const Footer = () => {
  return (
    <Paper sx={{ p: 2 }} component="footer" >
      <Container maxWidth="lg">
      <Typography variant="h6" align="center" gutterBottom>
        Footer
      </Typography>
      <Typography
        variant="subtitle1"
        align="center"
        color="text.secondary"
        component="p"
      >
        Something here to give the footer a purpose!
      </Typography>
      </Container>
    </Paper>
  );
};

export default Footer;
