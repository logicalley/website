import React from 'react';

import styles from './styles.module.css';

import type { PlatformGroup } from '../..';
import { ANNIE_TYPE } from '../../utils/constants';

import PlatformCard from './PlatformCard';


const TrackPlatformGroup: React.FC<PlatformGroup> = (props: PlatformGroup) => {
  const { platforms, title, year, genre, artiste, imageUrl } = props;

  return (
    <section className={styles.platformGroupContainer}>
      <span className={styles.platformGroupHeader}>Share everything with Annie</span>

      <section className={styles.platformGroup}>
        {platforms.map((platform) => {
          const cardProps = {
            ...platform,
            title,
            imageUrl,
            artiste,
            genre,
            year
          };

          return <PlatformCard {...cardProps} key={platform.name} />
        })}
      </section>
    </section>
  );
};

export default TrackPlatformGroup;
