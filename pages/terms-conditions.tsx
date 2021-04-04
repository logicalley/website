import React, { Fragment } from 'react';
import { NextPage } from 'next';

import SEO from '../components/SEO';
import Header from '../components/Header';
import TermsOfUse from '../components/TermsOfUse';
import Footer from '../components/Footer';


const TermsAndConditionPage: NextPage = () => {
  const pageTitle: string = 'Terms of Use';
  const url: string = 'https://anniemusic.app/terms-conditions';
  const keywords: string = 'music song annie share spotify deezer apple sharing faq question answers terms of use';

  return (
    <Fragment>
      <SEO
        title={pageTitle}
        url={url}
        keywords={keywords}
      />
      <Header />
      <TermsOfUse />
      <Footer />
    </Fragment>
  );
};

export default TermsAndConditionPage;
