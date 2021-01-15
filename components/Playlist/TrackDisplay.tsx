import React, { memo } from 'react';
import Link from 'next/link';

import type { TrackDisplayProps } from '../..';

import styles from './styles.module.css';

import PlaylistAudioPlayer from './PlaylistAudioPlayer';


const TrackDisplay: React.FC<TrackDisplayProps> = (props: TrackDisplayProps) => {
  const {
    id: trackId,
    preview_url,
    title,
    artiste,
    image_url,
    platforms,
  } = props.track;
  const analyticsLabel = `${title} - ${artiste}`;
  const imageAlt = `Artwork for ${title}`;

  const [anniePlatform] = platforms;
  const linkProps = {
    className: styles.trackTitle,
    target: '_blank',
    rel: 'noopener'
  };

  return (
    <section className={styles.playlistTrackContainer}>
      <img
        src={image_url}
        alt={imageAlt}
        className={styles.playlistTrackArt}
        loading="lazy"
      />

      <section className={styles.playlistTrackInfoContainer}>
        <Link href={anniePlatform.url}>
          <a {...linkProps}>{title}</a>
        </Link>
        <span className={styles.trackArtiste}>{artiste}</span>
      </section>

      <PlaylistAudioPlayer
        analyticsLabel={analyticsLabel}
        previewUrl={preview_url}
      />
    </section>
  );
};

export default memo(TrackDisplay);
