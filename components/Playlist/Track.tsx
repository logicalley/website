import React, { memo } from 'react';

import type { PlaylistTrack } from '../..';

import styles from './styles.module.css';

import PlaylistAudioPlayer from './PlaylistAudioPlayer';


const TrackDisplay: React.FC<PlaylistTrack> = (props: PlaylistTrack) => {
  const { preview_url, title, artiste, image_url } = props.track;
  const imageAlt = `Artwork for ${title}`;

  return (
    <section className={styles.playlistTrackContainer}>
      <PlaylistAudioPlayer
        previewUrl={preview_url}
        analyticsLabel={`${title} - ${artiste}`}
      />
      <img src={image_url} alt={imageAlt} className={styles.playlistTrackArt} />

      <section className={styles.playlistTrackInfoContainer}>
        <span className={styles.trackTitle}>{title}</span>
        <span className={styles.trackArtiste}>by: {artiste}</span>
      </section>
    </section>
  );
};

export default memo(TrackDisplay);
