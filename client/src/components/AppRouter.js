import * as React from "react";
import { Routes, Route } from "react-router-dom";
import FilmPage from "../pages/FilmPage";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import SeatsPage from "../pages/SeatsPage";
import { authRoutes, publicRoutes } from "../routes";
import Footer from "./Footer";

const AppRouter = () => {
  const isAuth = true;
  return (
    // <Routes>
    //   <Route path="/" element={<HomePage />} />
    //   <Route path="login" element={<LoginPage />} />
    //   <Route path="/film" element={<FilmPage />} />
    //   <Route path="/seat" element={<SeatsPage />} />
    // </Routes>

    <Routes>
      {isAuth &&
        authRoutes.map(({ path, Component }) => (
          <Route key={path} path={path} element={Component} exact />
        ))}
      {publicRoutes.map(({ path, Component }) => (
        <Route key={path} path={path} element={Component} exact />
      ))}
    </Routes>
  );
};

export default AppRouter;
