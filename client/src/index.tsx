import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./app";
import ErrorBoundry from "./components/ErrorBoundry";
import { store } from "./store/store";
import "./index.css";

ReactDOM.render(
  <Provider store={store}>
    <ErrorBoundry>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ErrorBoundry>
  </Provider>,

  document.getElementById("root")
);
