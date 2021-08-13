import "./index.css";
import "react-toastify/dist/ReactToastify.css";

import {
  MuiThemeProvider,
  StylesProvider,
  createTheme,
  jssPreset,
} from "@material-ui/core/styles";
import { ToastContainer, toast } from "react-toastify";

import App from "./App";
import { BrowserRouter } from "react-router-dom";
import React from "react";
import ReactDOM from "react-dom";
import { create } from "jss";
import rtl from "jss-rtl";

// Configure JSS
const jss = create({ plugins: [...jssPreset().plugins, rtl()] });

const theme = createTheme({
  direction: "rtl",
});

ReactDOM.render(
  <React.StrictMode>
    <StylesProvider jss={jss}>
      <MuiThemeProvider theme={theme} r>
        <BrowserRouter>
          <ToastContainer />
          <App />
        </BrowserRouter>
      </MuiThemeProvider>
    </StylesProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
