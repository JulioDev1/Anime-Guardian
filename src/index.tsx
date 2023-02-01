import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./pages/App";
import { GlobalStyle } from "./global/styles";
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>
);
