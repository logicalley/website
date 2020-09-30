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
      <link rel="canonical" href="https://anniemusic.app" />
      <meta name="twitter:site" content="@anniemusicapp" />
      <meta name="twitter:creator" content="@anniemusicapp" />
      <meta property="og:locale" content="en_US" />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Annie Music" />
      <meta name="viewport" content="width=device-width,initial-scale=1" />
      <meta name="google-site-verification" content="" />
      <title>Annie</title>
    </Head>
    <Component {...pageProps} />
  </Fragment>
);

export default App;
