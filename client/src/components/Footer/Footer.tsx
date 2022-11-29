import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Container, MenuItem, Paper, TextField } from "@mui/material";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";

function Copyright() {
  return (
    <React.Fragment>
      {"© "}
      <Link color="inherit" href="https://github.com/1zemzem">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
    </React.Fragment>
  );
}

const iconStyle = {
  width: 48,
  height: 48,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  mr: 1,
};

const LANGUAGES = [
  {
    id: "1",
    value: "ru-RUS",
    label: "Русский",
  },
  {
    id: "2",
    value: "en-US",
    label: "English",
  },
];

export default function AppFooter() {
  const [language, setLanguage] = React.useState(LANGUAGES[0].value);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLanguage(event.target.value);
  };
  return (
    <Paper
      sx={{ p: 2, bottom: 0, width: "100%" }}
      component="footer"
      elevation={1}
    >
      <Container sx={{ my: 2, display: "flex" }} maxWidth="xl">
        <Grid container spacing={5}>
          <Grid item xs={8} sm={6} md={4}>
            <Grid
              container
              direction="column"
              justifyContent="flex-end"
              spacing={2}
            >
              <Grid item sx={{ display: "flex" }}>
                <Box component="a" href="https://facebook.com/" sx={iconStyle}>
                  <FacebookIcon color="primary" />
                </Box>
                <Box component="a" href="https://twitter.com/" sx={iconStyle}>
                  <TwitterIcon color="primary" />
                </Box>
                <Box component="a" href="https://instagram.com/" sx={iconStyle}>
                  <InstagramIcon color="primary" />
                </Box>
              </Grid>
              <Grid item>
                <Copyright />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={8} sm={6} md={4}>
            <Typography variant="h6">Legal</Typography>
            <Box component="ul" sx={{ m: 0, listStyle: "none", p: 0 }}>
              <Box component="li" sx={{ py: 0.5 }}>
                <Link href="">Terms</Link>
              </Box>
              <Box component="li" sx={{ py: 0.5 }}>
                <Link href="">Privacy</Link>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={8} sm={6} md={4}>
            <Typography variant="h6">Language</Typography>
            <TextField
              id="filled-select-lang"
              select
              variant="standard"
              size="medium"
              value={language}
              onChange={handleChange}
              sx={{ mt: 1, width: 150 }}
            >
              {LANGUAGES.map((language) => (
                <MenuItem key={language.id} value={language.value}>
                  {language.label}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid item>
            <Typography variant="caption">
              {/* {'Icons made by '} */}
              <Link href="" title="оферта">
                Публичная оферта
              </Link>
              {" from "}
              <Link href="" title="Star tickets">
                www.star-tickets.com
              </Link>
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Paper>
  );
}
