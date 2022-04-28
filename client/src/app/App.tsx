import React from "react";
import AppRouter from "../components/AppRouter";
import Footer from "../components/Footer";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import "./App.css";
import Navibar from "../components/Navibar";
import ErrorBoundry from "../components/ErrorBoundry";

const darkTheme = createTheme({
  palette: {
    mode: "dark",

    background: {
      paper: "#181819",
    },

    primary: {
      main: "#3f51b5",
      dark: "#121212",
    },

    secondary: {
      main: "#F00F60",
    },
  },
});

function App() {
  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <ErrorBoundry>
          <Navibar />
          <AppRouter />
          <Footer />
        </ErrorBoundry>
      </ThemeProvider>
    </>
  );
}

export default App;
