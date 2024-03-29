import AdminPage from "./pages/AdminPage";
import FilmPage from "./pages/FilmPage";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import PaymentPage from "./pages/PaymentPage";
import RegistrationPage from "./pages/RegistrationPage";
import TicketsPage from "./pages/TicketsPage";
import UserPage from "./pages/UserPage";

import {
  HOME_ROUTE,
  ADMIN_AUTH,
  USER_AUTH,
  LOGIN_ROUTE,
  REGISTR_ROUTE,
  FILM_ROUTE,
  TICKETS,
  PAYMENT_AUTH,
  // STATIC,
} from "./utils/const";

export const authRoutes = [
  {
    path: ADMIN_AUTH,
    Component: <AdminPage />,
  },
  {
    path: USER_AUTH,
    Component: <UserPage />,
  },

  {
    path: PAYMENT_AUTH,
    Component: <PaymentPage />,
  },
];

export const publicRoutes = [
  {
    path: HOME_ROUTE,
    Component: <HomePage />,
  },
  {
    path: FILM_ROUTE + "/:id",
    Component: <FilmPage />,
  },
  {
    path: TICKETS,
    Component: <TicketsPage />,
  },
  {
    path: REGISTR_ROUTE,
    Component: <LoginPage />,
  },
  {
    path: LOGIN_ROUTE,
    Component: <LoginPage />,
  },
];
