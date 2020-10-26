import { Fragment } from 'react';
import { NextPage } from 'next';

import Header from '../components/Header';
import SEO from '../components/SEO';
import Footer from '../components/Footer';
import Beta from '../components/Beta';

const BetaPage: NextPage = () => {
  const pageTitle: string = 'Beta Volunteer Form';
  const url: string = 'https://anniemusic.app/beta';
  const keywords: string = 'music song annie share spotify deezer apple sharing faq question answers';

  return (
    <Fragment>
      <SEO
        title={pageTitle}
        url={url}
        keywords={keywords}
      />
      <Header />
      <Beta />
      <Footer />
    </Fragment>
  )
};

export default BetaPage;
