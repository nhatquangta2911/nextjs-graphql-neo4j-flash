import React from "react";
import { Provider } from "react-redux";
import { AppProps } from "next/app";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { ThemeProvider } from "styled-components";
import { theme } from "theme";
import { GlobalStyle } from "styled/global.style";

import "@progress/kendo-theme-default/dist/all.css";
import "primereact/resources/themes/nova-light/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import { RootReducer } from "reducers/rootReducer";
import { businessComponentReducer } from "reducers/businessComponentReducer";

export default function ExtendedApp({ Component, pageProps }: AppProps) {
  const AppReduxStore = createStore(
    businessComponentReducer,
    applyMiddleware(thunk)
  );
  return (
    <Provider store={AppReduxStore}>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
        <GlobalStyle />
      </ThemeProvider>
    </Provider>
  );
}
