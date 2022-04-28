import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Paper } from "@mui/material";

const Footer = () => {
  return (
    <Paper sx={{  p: 6, position: "fixed", bottom: 0, width: "100%" }} component="footer" >
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
    </Paper>
  );
};

export default Footer;
