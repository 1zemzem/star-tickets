import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import { makeStyles } from "@mui/styles";
import logo from "../../images/logo.svg";
import { NavLink } from "react-router-dom";
import { HOME_ROUTE, LOGIN_ROUTE } from "../../utils/const";


const pages = ["Афиша", "Инфо", "Мой профиль"];

export default function Navibar() {
  
  const useStyles = makeStyles({
    MuiAppBar: {
      backgroundColor: 'transparent !important',
    },
    MuiAppBarScrolled: {
      backgroundColor: "#181819", opacity: 0.95,
    },
  });

  const styles = useStyles(); 

  const [navbar, setNavbar] = React.useState(false);

  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const changeNavbarBackground = () => {
    if (window.scrollY >= 60) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };
  window.addEventListener('scroll', changeNavbarBackground)

  return (
    <AppBar
      position="fixed"
      // color="transparent"
      // className={styles.MuiAppBar}
      className={navbar ? styles.MuiAppBarScrolled : styles.MuiAppBar}
      elevation={0}
    >
      <Container maxWidth="lg">
        <Toolbar disableGutters>
          <NavLink to={HOME_ROUTE}>
            <Box
              component="div"
              sx={{ mr: 4, display: { xs: "none", md: "flex" } }}
            >
              <img src={logo} alt="StarTickets" style={{ maxWidth: 160 }} />
            </Box>
          </NavLink>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <Box
            component="div"
            sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
          >
            <NavLink to={HOME_ROUTE}>
              <img src={logo} alt="StarTickets" style={{ maxWidth: 140 }} />
            </NavLink>
          </Box>

          <Box
            sx={{
              flexGrow: 1,
              display: {
                xs: "none",
                md: "flex",
                justifyContent: "space-around",
              },
            }}
          >
            {pages.map((page) => (
              <Button
                size="large"
                style={{ fontSize: "20px" }}
                variant="text"
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                {page}
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <NavLink to={LOGIN_ROUTE}>
              <Button
                color="secondary"
                variant="contained"
                sx={{ borderRadius: 20 }}
              >
                войти
              </Button>
            </NavLink>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
