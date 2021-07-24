import React, { Fragment } from 'react';
import { NextPage } from 'next';

// components
import Header from '../components/Header';
import HomePage from '../components/HomePage';
import SEO from '../components/SEO';
import Footer from '../components/Footer';

const Home: NextPage = () => {
  const pageTitle: string = 'Home';
  const url: string = 'https://anniemusic.app';
  const keywords: string =
    'music song annie share spotify deezer apple sharing';

  return (
    <Fragment>
      <SEO title={pageTitle} url={url} keywords={keywords} />
      <Header />
      <HomePage />
      <Footer />
    </Fragment>
  );
};

export default Home;
