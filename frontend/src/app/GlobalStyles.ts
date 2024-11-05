// app/GlobalStyles.ts
"use client";
import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    padding: 0;
    font-family: Arial, sans-serif;
  }

  .layout {
    display: grid;
    grid-template-rows: 70px 1fr;
    min-height: 100vh;
  }

  .layout__header {
    height: 50px;
  }

  .layout__content {
    display: grid;
    grid-template-columns: 170px 1fr;
  }

  .layout__sidebar {
    background-color: #fbfbfb;
  }

  .layout__main {
    background-color: white;
    padding: 20px;
  }

  @media (max-width: 768px) {
    .layout__content {
      grid-template-columns: 1fr;
    }
  }
`;

export default GlobalStyles;
