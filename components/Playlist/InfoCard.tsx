import React, { Fragment } from 'react';

import type { PlaylistInfoCard } from '../..';

import styles from './styles.module.css';


const InfoCard: React.FC<PlaylistInfoCard> = (props: PlaylistInfoCard) => {
  const { info } = props;
  const imageAlt: string = `Cover picture for playlist: ${info.title}`;

  return (
    <section className={styles.infoCardContainer}>
      <img src={info.image_url} alt={imageAlt} className={styles.playlistImage} />
    </section>
  );
};

export default InfoCard;
