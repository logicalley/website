import React, { memo, useRef, useEffect } from 'react';
import type { TrackDisplayProps } from '../..';

import styles from './styles.module.css';
import PlaylistContextMenu from './PlaylistContextMenu';

const TrackDisplay: React.FC<TrackDisplayProps> = (
  props: TrackDisplayProps
) => {
  const sectionRef = useRef<HTMLTableSectionElement>(null);

  const { title, artiste, image_url, annieUrl } = props.track;
  const imageAlt = `Artwork for ${title}`;

  const getClientRect = (): DOMRect | undefined => {
    return sectionRef.current?.getBoundingClientRect();
  };

  const linkProps = {
    className: styles.moreOptionsBtn,
    target: '_blank',
    rel: 'noopener',
  };

  return (
    <section className={styles.playlistTrackContainer} ref={sectionRef}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
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

      <PlaylistContextMenu
        url={annieUrl}
        artiste={artiste}
        title={title}
        linkProps={linkProps}
        getClientRect={getClientRect}
      />
    </section>
  );
};

export default memo(TrackDisplay);
