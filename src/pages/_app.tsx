import React, { useEffect } from 'react';
import Head from 'next/head';

import { ThemeProvider } from '@material-ui/core/styles';
import theme from '../theme';

import { useDispatch } from 'react-redux';
import { wrapper } from '../store';
import { loadUserStart } from '@store/auth/auth.actions';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const App = (props) => {
  const dispatch = useDispatch();

  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement!.removeChild(jssStyles);
    }

    dispatch(loadUserStart());
  }, []);

  const { Component, pageProps } = props;

  return (
    <React.Fragment>
      <Head>
        <title>Exclusive Gulets</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
        <meta
          name="description"
          content="Exclusive Gulets is an experienced UK-based gulet and yacht charter company, specialists in offering exclusive gulet and yacht charters in Turkey, Croatia, Greece, and the Mediterranean."
        />

        <meta property="og:title" content="Exclusive Gulets" key="title" />
        <meta
          property="og:description"
          content="Exclusive Gulets is an experienced UK-based gulet and yacht charter company, specialists in offering exclusive gulet and yacht charters in Turkey, Croatia, Greece, and the Mediterranean."
          key="description"
        />
      </Head>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </React.Fragment>
  );
};

export default wrapper.withRedux(App);
