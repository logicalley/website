import { Fragment } from 'react';
import { NextPage } from 'next';

import Header from '../../components/Header';
import SEO from '../../components/SEO';
import Footer from '../../components/Footer';
import IFrameLoader from '../../components/IFrameLoader';

const BetaVolunteerPage: NextPage = () => {
  const pageTitle: string = 'Beta Volunteer Form';
  const url: string = 'https://anniemusic.app/beta/volunteer';
  const keywords: string = 'music song annie share spotify deezer apple sharing faq question answers';
  const volunteerUrl: string = 'https://airtable.com/embed/shreOBdjoNCqglpKe?backgroundColor=orange';

  return (
    <Fragment>
      <SEO
        title={pageTitle}
        url={url}
        keywords={keywords}
      />
      <Header />
      <IFrameLoader url={volunteerUrl} />
      <Footer />
    </Fragment>
  )
};

export default BetaVolunteerPage;
