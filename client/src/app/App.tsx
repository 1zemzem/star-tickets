import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navibar from "../components/Navibar";
import AdminPage from "../pages/AdminPage";
import BasketPage from "../pages/BasketPage";
import FilmPage from "../pages/FilmPage";
import LoginPage from "../pages/LoginPage";
import MainPage from "../pages/MainPage";
import SeatsPage from "../pages/SeatsPage";
import UserProfilePage from "../pages/UserProfilePage";

import "./App.css";

function App() {
  return (
    <Router>
      <Navibar />
      <Routes>
        <Route path="/">
          <MainPage />
        </Route>
        <Route path="/admin">
          <AdminPage />
        </Route>
        <Route path="/basket">
          <BasketPage />
        </Route>
        <Route path="/film">
          <FilmPage />
        </Route>
        <Route path="/login">
          <LoginPage />
        </Route>
        <Route path="seats">
          <SeatsPage />
        </Route>
        <Route path="/profile">
          <UserProfilePage />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
