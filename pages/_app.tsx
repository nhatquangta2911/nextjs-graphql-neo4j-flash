import React from "react";
import { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import { theme } from "theme";

import "@progress/kendo-theme-default/dist/all.css";

import { GlobalStyle } from "styled/global.style";

export default function ExtendedApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
      <GlobalStyle />
    </ThemeProvider>
  );
}
