import React, { Fragment } from 'react';
import { NextPage } from 'next';

import SEO from '../components/SEO';
import Header from '../components/Header';
import PrivacyPolicy from '../components/PrivacyPolicy';
import Footer from '../components/Footer';

const PrivacyPolicyPage: NextPage = () => {
  const pageTitle: string = 'Privacy Policy';
  const url: string = 'https://anniemusic.app/privacy-policy';
  const keywords: string =
    'music song annie share spotify deezer apple sharing faq question answers privacy policy';

  return (
    <Fragment>
      <SEO title={pageTitle} url={url} keywords={keywords} />
      <Header />
      <PrivacyPolicy />
      <Footer />
    </Fragment>
  );
};

export default PrivacyPolicyPage;
