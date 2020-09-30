import React, { Fragment } from 'react';
import { NextPage } from 'next';

import SEO from '../components/SEO';
import Header from '../components/Header';
import PrivacyPolicy from '../components/PrivacyPolicy';
import Footer from '../components/Footer';


const PrivacyPolicyPage: NextPage = () => {
  const pageTitle: string = 'Privacy Policy';
  const description: string = 'Annie helps you share your favorite songs and playlists between music platforms.';
  const url: string = 'https://anniemusic.app/privacy-policy';
  const keywords: string = 'music song annie share spotify deezer apple sharing faq question answers privacy policy';
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
      <PrivacyPolicy />
      <Footer />
    </Fragment>
  );
};

export default PrivacyPolicyPage;
