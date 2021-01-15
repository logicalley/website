import React, { Fragment } from 'react';

import type { PlaylistInfoCard } from '../..';

import styles from './styles.module.css';


const InfoCard: React.FC<PlaylistInfoCard> = (props: PlaylistInfoCard) => {
  const { image_url, title, owner } = props.info;
  const imageAlt: string = `Cover picture for playlist: ${title}`;

  return (
    <section className={styles.infoCardContainer}>
      <img src={image_url} alt={imageAlt} className={styles.playlistImage} />

      <section className={styles.playlistDetails}>
        <h1 className={styles.playlistTitle}>{title}</h1>
        <span className={styles.playlistOwner}>by {owner}</span>

        <button className={styles.cloneBtn}>Clone Playlist</button>
      </section>
    </section>
  );
};

export default InfoCard;
