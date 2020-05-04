import React from 'react';
import App from 'next/app';
import { ThemeProvider } from 'styled-components';
import { theme } from 'theme';

import '@progress/kendo-theme-default/dist/all.css';

import { GlobalStyle } from 'styled/global.style';

export default function ExtendedApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
      <GlobalStyle />
    </ThemeProvider>
  );
}
