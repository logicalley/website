import React, { Fragment } from 'react';
import { NextPage } from 'next';

// components
import Header from '../components/Header';
import HomePage from '../components/HomePage';
import SEO from '../components/SEO';


const Home: NextPage = () => {
  const pageTitle: string = 'Annie | Home';
  const description: string = 'Annie helps you share your favorite songs and playlists between music platforms.';
  const url: string = 'https://anniemusic.app';
  const keywords: string = 'music song annie share spotify deezer apple sharing';
  const imageUrl: string = 'https://res.cloudinary.com/anniemusic/image/upload/f_auto,q_auto/v1601396354/landing-page-assets/annie-logo_ruc0bw.png';

  return (
    <Fragment>
      <SEO
        title={pageTitle}
        description={description}
        url={url}
        imageUrl={imageUrl}
        keywords={keywords}
      />
      <Header />
      <HomePage />
    </Fragment>
  );
}

export default Home;
