import React, { memo } from 'react';
import Link from 'next/link';

import type { TrackDisplayProps } from '../..';

import styles from './styles.module.css';


const TrackDisplay: React.FC<TrackDisplayProps> = (props: TrackDisplayProps) => {
  const {
    title,
    artiste,
    image_url,
    annieUrl
  } = props.track;
  const analyticsLabel = `${title} - ${artiste}`;
  const imageAlt = `Artwork for ${title}`;

  const linkProps = {
    className: styles.moreOptionsBtn,
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
        <h2 className={styles.trackTitle}>{title}</h2>
        <span className={styles.trackArtiste}>{artiste}</span>
      </section>

      <Link href={annieUrl}>
        <a {...linkProps}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none">
            <path
              fill="#1D1D1D"
              fillRule="evenodd"
              d="M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"
              clipRule="evenodd"
            ></path>
          </svg>
        </a>
      </Link>
    </section>
  );
};

export default memo(TrackDisplay);
