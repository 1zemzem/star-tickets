import AdminPage from "./pages/AdminPage";
import AuthFilmPage from "./pages/AuthFilmPage";
import AuthSeatsPage from "./pages/AuthSeatsPage";
import BasketPage from "./pages/BasketPage";
import FilmPage from "./pages/FilmPage";
import LoginPage from "./pages/LoginPage";
import MainPage from "./pages/MainPage";
import SeatsPage from "./pages/SeatsPage";
import UserProfilePage from "./pages/UserProfilePage";
import {
  ADMIN_ROUTE,
  BASKET_ROUTE,
  FILM_ROUTE,
  FILM_ROUTE_AUTH,
  LOGIN_ROUTE,
  MAIN_ROUTE,
  PROFILE_ROUTE,
  REGISTR_ROUTE,
  SEATS_ROUTE,
  SEATS_ROUTE_AUTH,
} from "./utils/const";

export const authRoutes = [
  {
    path: ADMIN_ROUTE,
    Component: AdminPage,
  },
  {
    path: BASKET_ROUTE,
    Component: BasketPage,
  },
  {
    path: FILM_ROUTE_AUTH + '/:id',
    Component: AuthFilmPage,
  },
  {
    path: SEATS_ROUTE_AUTH + '/:id',
    Component: AuthSeatsPage,
  },
  {
    path: PROFILE_ROUTE,
    Component: UserProfilePage,
  },
];

export const publicRoutes = [
   
      {
        path: MAIN_ROUTE,
        Component: MainPage,
      },
      {
        path: FILM_ROUTE + '/:id',
        Component: FilmPage,
      },
      {
        path: SEATS_ROUTE + '/:id',
        Component: SeatsPage,
      },
      {
        path: LOGIN_ROUTE,
        Component: LoginPage,
      },
      {
        path: REGISTR_ROUTE,
        Component: LoginPage,
      },
];
