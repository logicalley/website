import React from 'react';

import styles from './styles.module.css';

import type { PlatformGroup } from '../..';
import {
  ANNIE_TYPE,
  SPOTIFY_TYPE,
  APPLE_MUSIC_TYPE,
  DEEZER_TYPE,
} from '../../utils/constants';

import PlatformCard from './PlatformCard';

const validTypes = [ANNIE_TYPE, SPOTIFY_TYPE, APPLE_MUSIC_TYPE, DEEZER_TYPE];

const TrackPlatformGroup: React.FC<PlatformGroup> = (props: PlatformGroup) => {
  const { platforms, title, year, artiste, imageUrl } = props;

  return (
    <section className={styles.platformGroupContainer}>
      <span className={styles.platformGroupHeader}>
        Share everything with Annie
      </span>

      <section className={styles.platformGroup}>
        {platforms
          .filter((platform) => validTypes.includes(platform.name))
          .map((platform) => {
            const cardProps = {
              ...platform,
              title,
              imageUrl,
              artiste,
              year,
            };

            return <PlatformCard {...cardProps} key={platform.name} />;
          })}
      </section>
    </section>
  );
};

export default TrackPlatformGroup;
