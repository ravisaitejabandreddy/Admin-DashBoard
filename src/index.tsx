import ReactDOM from "react-dom";
import { App } from "./App";
import { ThemeProvider } from "@mui/material";
import { theme } from "./themes/theme";
import { BrowserRouter } from "react-router-dom";
ReactDOM.render(
  <ThemeProvider theme={theme}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ThemeProvider>,
  document.getElementById("root")
);
