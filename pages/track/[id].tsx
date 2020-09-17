import React, { Fragment } from 'react';
import Head from 'next/head';
import { NextPage, GetServerSideProps } from 'next';

import type { TrackPageProps } from '../..';


const TrackDetail: NextPage<TrackPageProps> = (props: TrackPageProps) => {
  const { trackDetails } = props;
  const { title, artiste } = trackDetails.data;
  const pageTitile: string = `${title} - ${artiste}`;

  return (
    <Fragment>
      <Head>
        <title>{pageTitile} | Annie</title>
      </Head>
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
  const { id: trackId } = context.params;
  const trackApiEndpoint: string = `${process.env.ANNIE_API_BASE_URL}/track/${trackId}`;
  console.log({ trackApiEndpoint })

  const res = await fetch(trackApiEndpoint)
  const trackDetails = await res.json();

  return { props: { trackDetails } }
}

export default TrackDetail;
