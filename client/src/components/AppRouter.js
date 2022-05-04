import * as React from "react";
import { Routes, Route, Switch } from "react-router-dom";
import HomePage from "../pages/HomePage";
import { authRoutes, publicRoutes } from "../routes";

const AppRouter = () => {
  const isAuth = true;
  return (
    
      <Routes>
        {isAuth &&
          authRoutes.map(({ path, Component }) => (
            <Route key={path} path={path} element={Component} exact />
          ))}
        {publicRoutes.map(({ path, Component }) => (
          <Route key={path} path={path} element={Component} exact />
        ))}
        {/* <Route path="*">
          <HomePage />
        </Route> */}
      </Routes>
    
  );
};

export default AppRouter;
