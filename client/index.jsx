import React from "react";
import reactDOM from "react-dom";
import { Provider } from "react-redux";

import store from "./store";
import App from "./App.jsx";

reactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("app")
);
