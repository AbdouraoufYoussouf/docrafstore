import { createGlobalStyle } from 'styled-components';

export const shadow = "0px 0px 5px 1px rgb(69 67 96)";

export const GlobalStyle = createGlobalStyle`
 
  * {
    margin: 0px;
    padding: 0;
    box-sizing: border-box;
  }
  html {
    scroll-behavior: smooth;
    margin: 0;
  }
  body,
  button,
  input,
  textarea {
    font-family: 'Rubik', sans-serif;
  }
  body {
    line-height: 1.7;
    transition: .5s;
  }

  .image-card{
    cursor: pointer;
  }
  /* @media (prefers-color-scheme: dark) {
  .card,
  .footer {
    border-color: #222;
  }
  html {
    background: #111;
  }
  .logo img {
    filter: invert(1);
  }
} */
  `