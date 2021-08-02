import React, { memo } from 'react';
import Link from 'next/link';
import type { TrackDisplayProps } from '../..';

import styles from './styles.module.css';
import PlaylistContextMenu from './PlaylistContextMenu';

const TrackDisplay: React.FC<TrackDisplayProps> = (
  props: TrackDisplayProps
) => {
  const { title, artiste, image_url, annieUrl } = props.track;
  const analyticsLabel = `${title} - ${artiste}`;
  const imageAlt = `Artwork for ${title}`;

  const linkProps = {
    className: styles.moreOptionsBtn,
    target: '_blank',
    rel: 'noopener',
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
        <h2 className={styles.trackTitle}>{title}</h2>
        <span className={styles.trackArtiste}>{artiste}</span>
      </section>

      <PlaylistContextMenu url={annieUrl} linkProps={linkProps} />
    </section>
  );
};

export default memo(TrackDisplay);
