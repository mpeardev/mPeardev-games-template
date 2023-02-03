import React from "react";
import ReactDOM from "react-dom/client";
import { GamesApp } from "./GamesApp";
import "./styles/main.scss";
import { BrowserRouter } from "react-router-dom";
import { BreakpointProvider } from "./state/breakpoint/BreakpointProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <BreakpointProvider>
        <GamesApp />
      </BreakpointProvider>
    </BrowserRouter>
  </React.StrictMode>
);
