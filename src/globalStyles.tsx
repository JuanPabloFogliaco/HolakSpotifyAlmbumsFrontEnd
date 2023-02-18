import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body, html {
    margin: 0px;
    padding: 0px;
    font-family: Open-Sans, Helvetica, Sans-Serif;
    box-sizing: border-box;
    background-color: #dd4242; 
    scroll-behavior: smooth;
  }
`;

export default GlobalStyle;
