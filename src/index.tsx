import React from "react";
import ReactDOM from "react-dom";
import { configure } from "mobx";

import { StoreProvider } from "./stores/context";
import App from "./App";

import "./css/common.css";

configure({ enforceActions: "observed" });

ReactDOM.render(
  <StoreProvider>
    <App />
  </StoreProvider>,
  document.getElementById("root")
);
