import React from "react";
import ReactDOM from "react-dom/client";

import { CssBaseline, ThemeProvider } from "@mui/material";
import { BrowserRouter } from "react-router-dom";

import GlobalTheme from "./styles/global";

import AppRoute from "./router/index";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <ThemeProvider theme={GlobalTheme}>
      <BrowserRouter>
        <CssBaseline />
        <AppRoute />
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
);
