import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background-color: #FAF3F2;
  }

  a, li {
    text-decoration: none;
    list-style: none;
  }
  h1, h2, h3, h4, h5 {
    margin: 0;
  }

`;
