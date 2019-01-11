import "babel-polyfill";

import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./store";
import App from "./containers/App";

const root = document.querySelector("#root");
const Application = (
  <Provider store={store}>
    <App />
  </Provider>
);

ReactDOM.render(Application, root);
