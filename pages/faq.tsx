import React, { Fragment } from 'react';
import { NextPage } from 'next';

// components
import Header from '../components/Header';
import SEO from '../components/SEO';
import Footer from '../components/Footer';
import FAQs from '../components/FAQs';


const FAQPage: NextPage = () => {
  const pageTitle: string = 'FAQs';
  const url: string = 'https://anniemusic.app/faq';
  const keywords: string = 'music song annie share spotify deezer apple sharing faq question answers';

  return (
    <Fragment>
      <SEO
        title={pageTitle}
        url={url}
        keywords={keywords}
      />
      <Header />
      <FAQs />
      <Footer />
    </Fragment>
  );
}

export default FAQPage;
