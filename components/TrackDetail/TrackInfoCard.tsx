import React from 'react';

import styles from './styles.module.css';

import type { TrackInfoCardProps } from '../..';

const TrackInfoCard: React.FC<TrackInfoCardProps> = (props: TrackInfoCardProps) => {
  const { title, artiste, genre, year, imageUrl } = props;
  const imageAlt = `Track artwork for "${title}" by "${artiste}"`;

  return (
    <section>
      <h2>Top Results</h2>

      <section className={styles.trackInfo}>
        <img src={imageUrl} className={styles.trackImage} alt={imageAlt} />

        <section className={styles.trackDetails}>
          <span className={styles.trackTitle}>{title}</span>
          <span className={styles.trackArtiste}>{artiste}</span>

          <div className={styles.genreYear}>
            <span>{genre}</span>
            {" · "}
            <span>{year}</span>
          </div>
        </section>
      </section>
    </section>
  );
}

export default TrackInfoCard;
