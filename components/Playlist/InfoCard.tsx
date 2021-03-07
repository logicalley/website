import React, { Fragment } from 'react';

import type { PlaylistInfoCard } from '../..';

import styles from './styles.module.css';


const InfoCard: React.FC<PlaylistInfoCard> = (props: PlaylistInfoCard) => {
  const { image_url, title, owner, origin, total } = props.info;
  const imageAlt: string = `Cover picture for playlist: ${title}`;

  return (
    <section className={styles.infoCardContainer}>
      <section className={styles.playlistDetailsContainer}>
        <img src={image_url} alt={imageAlt} className={styles.playlistImage} />

        <section className={styles.playlistDetails}>
          <h1 className={styles.playlistTitle}>{title}</h1>
          <p className={styles.playlistMetadatum}>Made by: {owner}</p>
          <p className={styles.playlistMetadatum}>{total} songs.</p>
          <p className={styles.playlistMetadatum}>Source: {origin}</p>
        </section>
      </section>

      <section className={styles.playlistCtas}>
        <button className={styles.playlistAction} onClick={() => console.log('cloning playlist')}>View Original</button>
        <button className={styles.playlistAction} onClick={() => console.log('cloning playlist')}>Clone Playlist</button>
      </section>
    </section>
  );
};

export default InfoCard;
