import React, { Fragment } from 'react';
import Head from 'next/head';

import type { AppProps } from 'next/app';

import '../assets/css/global.css';


const App: React.FC<AppProps> = ({ Component, pageProps }: AppProps) => (
  <Fragment>
    <Head>
      <link rel="icon" type="image/x-icon" href="/static/favicon.ico" />
      <meta name="msapplication-TileColor" content="#ffffff" />
      <meta name="theme-color" content="#ffffff"></meta>
      <title>Annie</title>
    </Head>
    <Component {...pageProps} />
  </Fragment>
);

export default App;
