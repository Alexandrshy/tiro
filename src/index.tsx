import "./css/common.css";

import { configure } from "mobx";
import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import { StoreProvider } from "./stores/context";

configure({ enforceActions: "observed" });

ReactDOM.render(
  <StoreProvider>
    <App />
  </StoreProvider>,
  document.getElementById("root")
);
