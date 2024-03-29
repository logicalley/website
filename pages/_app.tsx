import React, { Fragment, useEffect } from 'react';
import Head from 'next/head';
import { prepareClientPortals } from '@jesstelford/react-portal-universal';
import { useRouter } from 'next/router';
import { Toaster } from 'react-hot-toast';
import getConfig from 'next/config';

import type { AppProps } from 'next/app';

import '../assets/css/global.css';
import CookieForm from '../components/CookieForm';
import Analytics from '../utils/analytics';


if (typeof window !== 'undefined') {
  // On the client, we have to run this once before React attempts a render.
  // Here in _app is a great place to do it as this file is only required once,
  // and right now (outside the constructor) is before React is invoked.
  prepareClientPortals();
}

const { publicRuntimeConfig } = getConfig();

const App: React.FC<AppProps> = ({ Component, pageProps }: AppProps) => {
  const router = useRouter();

  const toastPosition = 'top-center';

  useEffect(() => {
    Analytics.getInstance().trackPage();
  }, []);

  useEffect(() => {
      const handleRouteChange = (url: URL): void => {
        return Analytics.getInstance().trackPage({
          routerUrl: url.toString()
        });
      }

      router.events.on('routeChangeComplete', handleRouteChange);

      return () => {
        router.events.off('routeChangeComplete', handleRouteChange);
      };
  }, [router.events]);

  return (
    <Fragment>
      <Head>
        <link rel="icon" type="image/x-icon" href="/static/favicon.ico" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="theme-color" content="#ffffff" />
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
      <CookieForm />
      <Toaster position={toastPosition} reverseOrder={false} />
    </Fragment>
  );
};

export default App;
