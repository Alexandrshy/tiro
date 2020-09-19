import "./css/common.css";

import { configure } from "mobx";
import React from "react";
import ReactDOM from "react-dom";

import { StoreProvider } from "@stores/context";

import App from "./App";

configure({ enforceActions: "observed" });

ReactDOM.render(
  <StoreProvider>
    <App />
  </StoreProvider>,
  document.getElementById("root")
);
