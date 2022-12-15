import React from "react";
import ReactDOM from "react-dom/client";
import { GamesApp } from "./GamesApp";
import "./styles/main.scss";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <GamesApp />
    </BrowserRouter>
  </React.StrictMode>
);
