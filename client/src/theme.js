import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    font-family: Roboto;
    background-color: #003366;
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  p, li {
    font-size: 14px;
    line-height: 24px;
  }
`;

export default GlobalStyle;
