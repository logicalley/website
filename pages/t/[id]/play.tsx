import React from 'react';
import { NextPage, GetServerSideProps } from 'next';
import getConfig from 'next/config';

import TrackInfoCard from '../../../components/TrackDetail/TrackInfoCard';
import Page404 from '../../404';

import type { TrackPageProps } from '../../..';


const { publicRuntimeConfig } = getConfig();

const PlayTrack: NextPage<TrackPageProps> = (props: TrackPageProps) => {
  const { trackDetails, error } = props;

  if (error) return <Page404 />;

  const {
    title,
    image_url,
    artiste,
    genre,
    year,
    preview_url
  } = trackDetails;

  return (
    <TrackInfoCard
      title={title}
      imageUrl={image_url}
      artiste={artiste}
      genre={genre}
      year={year}
      previewUrl={preview_url}
    />
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  let trackId;

  try {
    if (context.params && context.params.id) {
      const { id: trackId } = context.params;
      let trackDetails;
      const trackApiEndpoint: string = `${publicRuntimeConfig.apiBaseUrl}/track/${trackId}`;
      const res = await fetch(trackApiEndpoint);
      const { data } = await res.json();

      if (data) {
        trackDetails = data.track_details;
      }

      return { props: { trackDetails, trackId } }
    }
  } catch (error) {
    const errorMessage = error.message || `There was an error fetching track with ID: ${trackId}`
    return { props: { error: errorMessage } }
  }

  return { props: { error: 'Track ID isn\'t included in URL params' } }
};

export default PlayTrack;
