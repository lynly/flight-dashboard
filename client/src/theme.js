import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  html {
    font-family: Roboto;
    font-size: 1rem;
    font-weight: 300;
    line-height: 1.5rem;
    color: #242934;
    background-color: #002664;
  }
  a {
    overflow-wrap: break-word;
    word-wrap: break-word;
  }
`;

export default GlobalStyle;
