import React, { Fragment } from 'react';
import { NextPage, GetServerSideProps } from 'next';
import getConfig from 'next/config';

import type { TrackPageProps } from '../../..';

import SEO from '../../../components/SEO';
import Page404 from '../../404';
import Spacer from '../../../components/Spacer';
import Oembed from '../../../components/Oembed';
// track components
import {
  TrackHeader,
  TrackInfoCard,
  TrackDetailFooter,
  TrackPlatformGroup,
} from '../../../components/TrackDetail';
import SpecialLayout from '../../../components/SpecialLayout';

const { publicRuntimeConfig } = getConfig();

const TrackDetail: NextPage<TrackPageProps> = (props: TrackPageProps) => {
  const { trackDetails, trackId, error } = props;

  if (error || !trackDetails) return <Page404 />;

  const { title, artiste, image_url, genre, year, preview_url, platforms } =
    trackDetails;
  const pageTitle: string = `${title} - ${artiste}`;
  const description: string = `Listen to "${title}" by ${artiste}`;
  const keywords: string = `${title} ${artiste} music song annie share spotify deezer apple music`;
  const trackUrl: string = `https://anniemusic.app/t/${trackId}`;

  return (
    <Fragment>
      <Oembed trackId={trackId} title={pageTitle} type="track" />
      <SEO
        title={pageTitle}
        description={description}
        url={trackUrl}
        imageUrl={image_url}
        keywords={keywords}
      />
      <SpecialLayout>
        <TrackHeader title={title} />
        <Spacer h="40px" mh="50px" />
        <TrackInfoCard
          title={title}
          imageUrl={image_url}
          artiste={artiste}
          genre={genre}
          year={year}
          previewUrl={preview_url}
        />
        <TrackPlatformGroup
          title={title}
          imageUrl={image_url}
          artiste={artiste}
          genre={genre}
          year={year}
          platforms={platforms}
        />
      </SpecialLayout>
      <TrackDetailFooter />
    </Fragment>
  );
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
    const errorMessage =
      error.message || `There was an error fetching track with ID: ${trackId}`;
    return { props: { error: errorMessage } };
  }

  return { props: { error: "Track ID isn't included in URL params" } };
};

export default TrackDetail;
