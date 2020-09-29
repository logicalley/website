import React, { Fragment } from 'react';
import Head from 'next/head';
import { NextPage, GetServerSideProps } from 'next';

import type { TrackPageProps } from '../..';

import SEO from '../../components/SEO';


const TrackDetail: NextPage<TrackPageProps> = (props: TrackPageProps) => {
  const { trackDetails, trackId } = props;

  const { title, artiste, image_url } = trackDetails.data;
  const pageTitle: string = `${title} - ${artiste}`;
  const description: string = `Listen to "${title}" by ${artiste}`;
  const keywords: string = `${title} ${artiste} music song annie share spotify deezer apple music`;
  const trackUrl: string = `https://anniemusic.app/t/${trackId}`;

  return (
    <Fragment>
      <SEO
        title={pageTitle}
        description={description}
        url={trackUrl}
        imageUrl={image_url}
        keywords={keywords}
      />
      <section>
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
