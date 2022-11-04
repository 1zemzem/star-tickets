import * as React from "react";
import { Routes, Route } from "react-router-dom";

import { authRoutes, publicRoutes } from "../routes";

const AppRouter = () => {
  const isAuth = true;
  // не забыть сменить, когда все будет готово на
  // const isAuth = false;

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
