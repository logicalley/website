import React, { Fragment } from 'react';
import { NextPage } from 'next';

// components
import Header from '../components/Header';
import SEO from '../components/SEO';
import Footer from '../components/Footer';
import Contact from '../components/Contact';


const ContactPage: NextPage = () => {
  const pageTitle: string = 'Contact';
  const description: string = 'Annie helps you share your favorite songs and playlists between music platforms.';
  const url: string = 'https://anniemusic.app/help';
  const keywords: string = 'music song annie share spotify deezer apple sharing faq question answers help contact';
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
      <Contact />
      <Footer />
    </Fragment>
  );
}

export default ContactPage;
