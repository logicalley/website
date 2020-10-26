import { Fragment } from 'react';
import { NextPage } from 'next';

import Header from '../../components/Header';
import SEO from '../../components/SEO';
import Footer from '../../components/Footer';
import IFrameLoader from '../../components/IFrameLoader';

const BetaFeedbackPage: NextPage = () => {
  const pageTitle: string = 'Beta Feedback Form';
  const url: string = 'https://anniemusic.app/beta/volunteer';
  const keywords: string = 'music song annie share spotify deezer apple sharing faq question answers beta';
  const volunteerUrl: string = 'https://airtable.com/embed/shrY7dnnae4yINho3?backgroundColor=purple';
  const description: string = 'Share your feedback about the Annie Beta test.'

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

export default BetaFeedbackPage;
