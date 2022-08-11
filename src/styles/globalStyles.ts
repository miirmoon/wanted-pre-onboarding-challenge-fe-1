import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

import NanumSquareR from "styles/fonts/NanumSquareR.woff";

const GlobalStyle = createGlobalStyle`
  ${reset}

  @font-face {
    font-family: 'NanumSquareR';
    src: local("NanumSquareR"), url(${NanumSquareR}) format('woff');
  }

  * {
    box-sizing: border-box;
  }

  body {
    font-family: "NanumSquareR";
    font-size: ${(props) => props.theme.fontSize.normal};
  }

  button {
    border: none;
    background-color: ${(props) => props.theme.colors.white};
    font-family: inherit;
    font-size: inherit;
    cursor: pointer;
  }

  input, textarea {
    font-family: inherit;
    font-size: inherit;
  }

  input[type=password] {
    font-family: none;
  }

  h1 {
    font-size: ${(props) => props.theme.fontSize.big};
    font-weight: ${(props) => props.theme.fontWeight.bold};
  }

  h2 {
    font-size: ${(props) => props.theme.fontSize.large};
    font-weight: ${(props) => props.theme.fontWeight.bold};
  }

  h3 {
    font-size: ${(props) => props.theme.fontSize.medium};
    font-weight: ${(props) => props.theme.fontWeight.bold};
  }

  ::-webkit-scrollbar {
    z-index: 1000;
    width: 0.6rem;
    height: 0.6rem;
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 4px;
    background-color: ${(props) => props.theme.colors["light-blue"]};
  }

  ::-webkit-scrollbar-track {
    margin: $size-regular;
    border-radius: 4px;
    background-color: ${(props) => props.theme.colors.grey01};
  }
`;

export default GlobalStyle;
