import React, { Fragment, useState, useEffect } from 'react';
import { NextPage, GetServerSideProps } from 'next';
import getConfig from 'next/config';

import type { PlaylistPageProps, PlaylistTrackMetaData, ActiveTrack } from '../..';

import ContentHeader from '../../components/Content/Header';
import ContentFooter from '../../components/Content/Footer';
import Spacer from '../../components/Spacer';
import InfoCard from '../../components/Playlist/InfoCard';
import Page404 from '../404';
import TrackDisplay from '../../components/Playlist/TrackDisplay';
import LoadMoreButton from '../../components/Playlist/LoadMoreButton';
import SEO from '../../components/SEO';


const { publicRuntimeConfig } = getConfig();

const PlaylistPage: NextPage<PlaylistPageProps> = (props: PlaylistPageProps) => {
  const { error, playlistDetails, playlistId } = props;

  const [playlistTracks, setPlaylistTracks] = useState<PlaylistTrackMetaData[]>([]);
  const [nextUrl, setNextUrl] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const { tracks = [], ...playlistInfo } = playlistDetails;

  useEffect(() => {
    if (tracks.length > 0 && playlistInfo) {
      setPlaylistTracks(tracks);
      setNextUrl(playlistInfo?.next);
    }
  }, [playlistInfo, tracks]);

  if (error || !playlistDetails) return <Page404 />;

  const pageTitle: string = `Listen to Playlist: ${playlistInfo.title} by ${playlistInfo.owner}`;
  const description: string = `Listen to the Playlist "${playlistInfo.title}" by ${playlistInfo.owner}`;
  const keywords: string = `${playlistInfo.title} ${playlistInfo.owner} music song annie share spotify deezer apple music`;
  const trackUrl: string = `https://anniemusic.app/p/${playlistId}`;

  const fetchMoreTracks = async () => {
    try {
      setIsLoading(true);
      const response = await fetch(nextUrl);

      if (response.ok) {
        const { data } = await response.json();
        const { next, tracks } = data.details;
        setNextUrl(next);
        setPlaylistTracks((currentPlaylistTracks) => ([...currentPlaylistTracks, ...tracks]))
        return;
      }
      console.error('There was an error fetching the tracks from the API. Please try again.');
    } catch (error) {
      // show some form of notification <Toast>
      console.error(error);
    } finally {
      setIsLoading(false);
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
      <ContentHeader />
      <Spacer h="40px" mh="50px" />
      <InfoCard info={playlistInfo} />
      <Spacer h="20px" mh="20px" />

      {playlistTracks.map((track) => (
        <TrackDisplay
          key={track.id}
          track={track}
        />
      ))}

      {nextUrl ? (<LoadMoreButton
        fetchMore={fetchMoreTracks}
        isLoading={isLoading}
      />) : null}
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
    return {
      props: {
        error: errorMessage,
        playlistDetails: {},
        playlistId
      }
    }
  }

  return {
    props: {
      error: 'Track ID isn\'t included in URL params',
      playlistDetails: {},
      playlistId
    }
  }
};

export default PlaylistPage;
