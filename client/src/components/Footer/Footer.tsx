import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Container, Paper, TextField } from "@mui/material";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import  iconFacebook  from "../../images/iconFacebook.png"
import iconTwitter from "../../images/iconTwitter.png"
import iconInstagram from "../../images/iconInstagram.png"


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
  width: 40,
  height: 40,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  mr: 2,
  // backgroundColor: "warning.main",
  // "&:hover": {
  //   bgcolor: "warning.dark",
  // },
};

const LANGUAGES = [
  {
    code: "ru-RUS",
    name: "Русский",
  },
  {
    code: "en-US",
    name: "English",
  },
];

export default function AppFooter() {
  return (
    <Paper sx={{ p: 2 }} component="footer">
      <Container sx={{ my: 6, display: "flex" }}>
        <Grid container spacing={5}>
          <Grid item xs={6} sm={4} md={3}>
            <Grid
              container
              direction="column"
              justifyContent="flex-end"
              spacing={2}
            >
              <Grid item sx={{ display: "flex" }}>
                <Box component="a" href="https://facebook.com/" sx={iconStyle}>
                  <img
                    src={ iconFacebook } 
                    alt="Facebook"
                  />
                </Box>
                <Box component="a" href="https://twitter.com/" sx={iconStyle}>
                  <img
                    src={ iconTwitter }
                    alt="Twitter"
                  />
                </Box>
                <Box component="a" href="https://instagram.com/" sx={iconStyle}>
                  <img
                    src= { iconInstagram }
                    alt="Instagram"
                  />
                </Box>
              </Grid>
              <Grid item>
                <Copyright />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={6} sm={4} md={2}>
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
          <Grid item xs={6} sm={8} md={4}>
            <Typography variant="h6">Language</Typography>
            <TextField
              select
              size="medium"
              variant="standard"
              SelectProps={{
                native: true,
              }}
              sx={{ mt: 1, width: 150 }}
            >
              {LANGUAGES.map((language) => (
                <option value={language.code} key={language.code}>
                  {language.name}
                </option>
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

// const Footer = () => {
//   return (
//     <Paper sx={{ p: 2 }} component="footer" >
//       <Container maxWidth="lg">
//       <Typography variant="h6" align="center" gutterBottom>
//         Footer
//       </Typography>
//       <Typography
//         variant="subtitle1"
//         align="center"
//         color="text.secondary"
//         component="p"
//       >
//         Something here to give the footer a purpose!
//       </Typography>
//       </Container>
//     </Paper>
//   );
// };

// export default Footer;
