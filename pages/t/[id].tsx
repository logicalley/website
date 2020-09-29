import React, { Fragment, useEffect, useState } from 'react';
import Head from 'next/head';
import { NextPage, GetServerSideProps } from 'next';

import type { TrackPageProps } from '../..';

import Spinner from '../../components/Spinner';


const TrackDetail: NextPage<TrackPageProps> = (props: TrackPageProps) => {
  const { trackDetails, trackId } = props;

  const { title, artiste, image_url } = trackDetails.data;
  const pageTitle: string = `${title} - ${artiste}`;
  const description: string = `Listen to "${title}" by ${artiste}`;
  const keywords: string = `${title} ${artiste}`;
  const trackUrl: string = `https://anniemusic.app/t/${trackId}`;

  return (
    <Fragment>
      <Head>
        <title>{pageTitle} | Annie</title>
        <meta name="keywords" content={keywords} />
        <meta name="description" content={description} />

        <meta property="og:type" content="website" />
        <meta property="og:url" content={trackUrl} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={image_url} />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:domain" content={trackUrl} />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content="https://www.bolaji.de/assets/avatar-card.png" />
        <meta name="twitter:url" content={trackUrl} />
        <meta name="twitter:label1" content={pageTitle} />
        <meta name="twitter:data1" content={description} />
      </Head>
      <section>
        <Spinner />
        <p>Track is working</p>
        <code>
          {JSON.stringify(trackDetails, null, 2)}
        </code>
      </section>
    </Fragment>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  let trackId;
  if (context.params && context.params.id) {
    const { id: trackId } = context.params;
    const trackApiEndpoint: string = `${process.env.ANNIE_API_BASE_URL}/track/${trackId}`;
    const res = await fetch(trackApiEndpoint);
    const trackDetails = await res.json();
    return { props: { trackDetails, trackId } }
  }

  return { props: { error: 'Track ID isn\'t included in params' } }
}

export default TrackDetail;
