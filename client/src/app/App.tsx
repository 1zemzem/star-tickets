import React from "react";
import AppRouter from "../components/AppRouter";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import "./App.css";
import Layout from "../components/Layout";
import { grey } from "@mui/material/colors";

export const darkTheme = createTheme({
  palette: {
    mode: "dark",

    background: {
      default: "#424242",
      
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
        <Layout>
          <AppRouter />
        </Layout>
      </ThemeProvider>
    </>
  );
}

export default App;
