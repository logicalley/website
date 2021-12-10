import React, { Fragment } from 'react';
import { NextPage, GetServerSideProps } from 'next';
import Head from 'next/head';
import getConfig from 'next/config';

import AudioPlayerPreview from '../../../components/AudioPlayer/Preview';
import Page404 from '../../404';

import type { TrackPageProps } from '../../..';


const { publicRuntimeConfig } = getConfig();

const TrackEmbedPage: NextPage<TrackPageProps> = (props: TrackPageProps) => {
  const { trackDetails, error } = props;

  if (error || !trackDetails) return <Page404 />;

  return (
    <Fragment>
      <Head>
        <title>{trackDetails.title} | Annie</title>
      </Head>

      <AudioPlayerPreview track={trackDetails} />
    </Fragment>
  )
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  let trackId;

  try {
    if (context.params && context.params.id) {
      const { id: trackId } = context.params;
      let trackDetails = null;
      const trackApiEndpoint: string = `${publicRuntimeConfig.apiBaseUrl}/track/${trackId}`;
      const res = await fetch(trackApiEndpoint);
      const { data } = await res.json();

      if (data && data.track_details) {
        trackDetails = data.track_details;
      }

      return { props: { trackDetails, trackId } };
    }
  } catch (error) {
    const errorMessage = `There was an error fetching track with ID: ${trackId}`;
    return { props: { error: errorMessage } };
  }

  return { props: { error: "Track ID isn't included in URL params" } };
};

export default TrackEmbedPage;
