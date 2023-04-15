import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { GlobalStyle } from "../GlobalStyle";
import { ThemeProvider } from "styled-components";
import { theme } from "./components/Themes";
import { PersonalizedService } from "./components/PersonalizedService";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <App />
      <PersonalizedService />
    </ThemeProvider>
  </React.StrictMode>
);
