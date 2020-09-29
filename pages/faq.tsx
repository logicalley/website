import React, { Fragment } from 'react';

// components
import Header from '../components/Header';
import SEO from '../components/SEO';


const FAQ: React.FC = () => {
  const pageTitle: string = 'FAQs';
  const description: string = 'Annie helps you share your favorite songs and playlists between music platforms.';
  const url: string = 'https://anniemusic.app/faq';
  const keywords: string = 'music song annie share spotify deezer apple sharing faq question answers';
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
      <section>
        <p>FAQ</p>
      </section>
    </Fragment>
  );
}

export default FAQ;
