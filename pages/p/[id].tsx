import React, { Fragment, useState, useEffect, useRef, forwardRef } from 'react';
import { NextPage, GetServerSideProps } from 'next';
import getConfig from 'next/config';

import type { PlaylistPageProps, Track, ActiveTrack } from '../..';

import ContentHeader from '../../components/Content/Header';
import ContentFooter from '../../components/Content/Footer';
import Spacer from '../../components/Spacer';
import InfoCard from '../../components/Playlist/InfoCard';
import Page404 from '../404';
import TrackDisplay from '../../components/Playlist/TrackDisplay';
import LoadMoreButton from '../../components/Playlist/LoadMoreButton';
import SEO from '../../components/SEO';
import Oembed from '../../components/Oembed';

import {
  GA_ACTION_MUSIC_PLAYER,
  GA_CATEGORY_TRACK_ACTIONS,
} from '../../utils/constants';
import { registerEvent } from '../../utils/googleAnalytics';


const { publicRuntimeConfig } = getConfig();

const PlaylistPage: NextPage<PlaylistPageProps> = (props: PlaylistPageProps) => {
  const { error, playlistDetails, playlistId } = props;

  if (error || !playlistDetails) return <Page404 />;

  const [playlistTracks, setPlaylistTracks] = useState<Track[]>([]);
  const [nextUrl, setNextUrl] = useState<string>('');

  const { tracks, ...playlistInfo } = playlistDetails;

  useEffect(() => {
    setPlaylistTracks(tracks);
    setNextUrl(playlistInfo.next);
  }, []);

  const pageTitle: string = `Listen to Playlist: ${playlistInfo.title} by ${playlistInfo.owner}`;
  const description: string = `Listen to the Playlist "${playlistInfo.title}" by ${playlistInfo.owner}`;
  const keywords: string = `${playlistInfo.title} ${playlistInfo.owner} music song annie share spotify deezer apple music`;
  const trackUrl: string = `https://anniemusic.app/p/${playlistId}`;

  const fetchMoreTracks = async () => {
    try {
      const response = await fetch(nextUrl);

      if (response.ok) {
        const { data } = await response.json();
        const { next, tracks } = data.details;
        setNextUrl(next);
        setPlaylistTracks((currentPlaylistTracks) => ([ ...currentPlaylistTracks, ...tracks ]))
        return;
      }
      console.error('There was an error fetching the tracks from the API. Please try again.');
    } catch (error) {
      // show some form of notification <Toast>
      console.error(error);
    }
  }

  return (
    <Fragment>
      {/* <Oembed
        trackId={trackId}
        title={pageTitle}
        type="playlist"
      /> */}
      <SEO
        title={pageTitle}
        description={description}
        url={trackUrl}
        imageUrl={playlistInfo.image_url}
        keywords={keywords}
      />
      <div style={{ flex: 1 }}>
        <ContentHeader />
        <Spacer h="40px" mh="50px" />
        <InfoCard info={playlistInfo} />
        <Spacer h="20px" mh="20px" />

        {playlistTracks.map((track) => {
          const trackDisplayProps = {
            key: track.id,
            track,
          }

          return <TrackDisplay {...trackDisplayProps} />;
        })}

        {nextUrl ? (<LoadMoreButton
          fetchMore={fetchMoreTracks}
          isLoading={false}
        />) : null}
      </div>
      <ContentFooter />
    </Fragment>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  let playlistId;

  try {
    if (context.params && context.params.id) {
      const { id: playlistId } = context.params;
      const trackApiEndpoint: string = `${publicRuntimeConfig.apiBaseUrl}/playlist/${playlistId}`;
      const res = await fetch(trackApiEndpoint);
      const { data } = await res.json();
      return { props: { playlistDetails: data.details, playlistId } }
    }
  } catch (error) {
    const errorMessage = error.message || `There was an error fetching track with ID: ${playlistId}`
    return { props: { error: errorMessage } }
  }

  return { props: { error: 'Track ID isn\'t included in URL params' } }
};

export default PlaylistPage;
