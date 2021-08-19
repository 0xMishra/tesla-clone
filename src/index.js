import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { AppProvider } from "./Context";

ReactDOM.render(
  <AppProvider>
    <App></App>
  </AppProvider>,
  document.getElementById("root")
);
