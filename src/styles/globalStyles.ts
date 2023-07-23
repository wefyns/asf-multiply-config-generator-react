import { normalize } from 'styled-normalize';
import { createGlobalStyle, css } from 'styled-components';

import {
  heading1,
  heading2,
  heading3,
  bodyRegular,
  bodySemibold,
} from './mixins/fonts';

const GlobalStyles = createGlobalStyle`
  ${normalize}

  ${({ theme }) => css`
    ::-webkit-scrollbar {
      background-color: transparent;
      border-radius: 0;
      height: 8px;
      width: 8px;
    }

    ::-webkit-scrollbar-thumb {
      background-color: transparent;
    }

    ::-webkit-scrollbar-corner {
      background: transparent;
    }

    ::-webkit-scrollbar:hover {
      background-color: transparent;
    }

    ::-webkit-scrollbar:active {
      background-color: transparent;
    }

    html {
      *:hover::-webkit-scrollbar {
        background-color: transparent;
      }

      *:hover::-webkit-scrollbar-thumb {
        background-color: ${theme.scrollBar};
        background-clip: padding-box;
        border-radius: 4px;
        padding: 100px 0 0;
      }

      *::-webkit-scrollbar-thumb:hover {
        background-color: ${theme.scrollBar};
      }

      *::-webkit-scrollbar-thumb:active {
        background-color: ${theme.scrollBar};
      }

      * {
        // ff scrollbar
        scrollbar-width: thin;
        scrollbar-color: ${theme.scrollBar} transparent;
      }
    }
  `};

  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    font-family: Mukta, sans-serif;
  }

  body {
    ${bodyRegular};
    overflow-x: hidden;
    overflow-y: hidden;
    color: ${({ theme }) => theme.config.text.primary};
    background-color: ${({ theme }) => theme.config.background};
  }

  a {
    ${bodyRegular};
    cursor: pointer;
    text-decoration: none;
    ${({ theme }) => css`
      color: ${theme.colors.blueLight.primary};

      &:hover {
        color: ${theme.colors.blueLight.primary};
        text-decoration: underline;
      }

      &:active {
        color: ${theme.colors.blueLight.primary};
        text-decoration: underline;
      }
    `};
    outline: none;
  }

  ul {
    list-style-type: none;
  }

  button {
    border: none;
    color: inherit;
    cursor: pointer;
    ${bodySemibold};
    line-height: inherit;
    background-color: inherit;
  }

  input {
    ${bodyRegular};
    color: inherit;
  }
  
  textarea {
    color: inherit;
    background-color: inherit;
    border: none;
  }

  h1 {
    margin: 0;
    ${heading1};
  }

  h2 {
    ${heading2};
  }

  h3 {
    ${heading3};
  }
`;

export { GlobalStyles };
