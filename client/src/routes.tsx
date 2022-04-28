import AdminPage from "./pages/AdminPage";
import FilmPage from "./pages/FilmPage";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import SeatsPage from "./pages/SeatsPage";
import UserProfilePage from "./pages/UserProfilePage";
import {
  ADMIN_ROUTE,
  FILM_ROUTE,
  LOGIN_ROUTE,
  HOME_ROUTE,
  PROFILE_ROUTE,
  REGISTR_ROUTE,
  SEATS_ROUTE,
} from "./utils/const";

export const authRoutes = [
  {
    path: ADMIN_ROUTE,
    Component: <AdminPage />,
  },
  {
    path: PROFILE_ROUTE,
    Component: <UserProfilePage />,
  },
];

export const publicRoutes = [
  {
    path: HOME_ROUTE,
    Component: <HomePage />,
  },
  {
    // path: FILM_ROUTE + '/:id', не забыть!!!
    path: FILM_ROUTE,
    Component: <FilmPage />,
  },
  {
    path: SEATS_ROUTE,
    Component: <SeatsPage />,
  },
  {
    path: LOGIN_ROUTE,
    Component: <LoginPage />,
  },
  {
    path: REGISTR_ROUTE,
    Component: <LoginPage />,
  },
];
