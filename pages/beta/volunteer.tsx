import { Fragment } from 'react';
import { NextPage } from 'next';

import Header from '../../components/Header';
import SEO from '../../components/SEO';
import Footer from '../../components/Footer';
import IFrameLoader from '../../components/IFrameLoader';

const BetaVolunteerPage: NextPage = () => {
  const pageTitle: string = 'Beta Volunteer Form';
  const url: string = 'https://anniemusic.app/beta/volunteer';
  const keywords: string = 'music song annie share spotify deezer apple sharing faq question answers beta';
  const volunteerUrl: string = 'https://airtable.com/shrKB0oRCBFFjQZA3?backgroundColor=purple';
  const description: string = 'Volunteer to partake in testing Annie Beta.'

  return (
    <Fragment>
      <SEO
        title={pageTitle}
        url={url}
        keywords={keywords}
        description={description}
      />
      <Header />
      <IFrameLoader url={volunteerUrl} />
      <Footer />
    </Fragment>
  )
};

export default BetaVolunteerPage;
