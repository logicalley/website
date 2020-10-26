import React, { Fragment } from 'react';
import { NextPage } from 'next';

// components
import Header from '../components/Header';
import SEO from '../components/SEO';
import Footer from '../components/Footer';
import Contact from '../components/Contact';


const ContactPage: NextPage = () => {
  const pageTitle: string = 'Contact';
  const url: string = 'https://anniemusic.app/contact';
  const keywords: string = 'music song annie share spotify deezer apple sharing faq question answers help contact';

  return (
    <Fragment>
      <SEO
        title={pageTitle}
        url={url}
        keywords={keywords}
      />
      <Header />
      <Contact />
      <Footer />
    </Fragment>
  );
}

export default ContactPage;
