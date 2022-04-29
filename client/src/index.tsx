import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./app";
import ErrorBoundry from "./components/ErrorBoundry";
import { store } from "./store/store";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./index.css";
import { Provider } from "react-redux";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ErrorBoundry>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ErrorBoundry> 
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
