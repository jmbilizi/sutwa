import * as React from "react";
import PropTypes from "prop-types";
import { Provider as ReduxStoreProvider } from "react-redux";
import Head from "next/head";
import Router, { useRouter } from "next/router";
import nProgress from "nprogress";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { CacheProvider } from "@emotion/react";
import theme from "./../styles/MaterialUIFiles/theme";
import createEmotionCache from "./../styles/MaterialUIFiles/createEmotionCache";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers";
import "bootstrap/dist/css/bootstrap.css";
import "./../styles/globals.css";
import "./../styles/nprogress.css";
import { Store } from "./../_Store/index";
import * as Layouts from "../Components/Layouts";

// import buildClient from "../../api/build-client";

// Set nProgross for route change progress bar
Router.events.on("routeChangeStart", nProgress.start);
Router.events.on("routeChangeError", nProgress.done);
Router.events.on("routeChangeComplete", nProgress.done);

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

function App(props) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  const router = useRouter();
  const { pathname, query } = router; // pick the one that you need
  return (
    <CacheProvider value={emotionCache}>
      <ReduxStoreProvider store={Store}>
        <ThemeProvider theme={theme}>
          {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
          <CssBaseline />
          <Head>
            <title>Sutwa</title>
          </Head>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            {pathname === "/account" ||
            query.accountAction === "login" ||
            query.accountAction === "signup" ? (
              <Component {...pageProps} />
            ) : (
              <Layouts.MainLayout>
                <Component {...pageProps} />
              </Layouts.MainLayout>
            )}
          </LocalizationProvider>
        </ThemeProvider>
      </ReduxStoreProvider>
    </CacheProvider>
  );
}

App.propTypes = {
  Component: PropTypes.elementType.isRequired,
  emotionCache: PropTypes.object,
  pageProps: PropTypes.object.isRequired,
};

// App.getInitialProps = async (appContext) => {
//   const client = buildClient(appContext.ctx);
//   const { data } = await client.get("/api/users/currentuser");

//   let pageProps = {};
//   if (appContext.Component.getInitialProps) {
//     pageProps = await appContext.Component.getInitialProps(appContext.ctx);
//   }

//   return {
//     pageProps,
//     ...data,
//   };
// };

export default App;
