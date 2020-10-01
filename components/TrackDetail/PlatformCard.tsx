import React from 'react';

import styles from './styles.module.css';

import type { PlatformCardProps } from '../..';
import {
  SPOTIFY_TYPE,
  DEEZER_TYPE,
  APPLE_MUSIC_TYPE
} from '../../utils/constants';

import CopyLinkButton from './CopyLinkButton';
import { platform } from 'os';


const getBackgroundColor = (platformName: string): string => {
  switch (platformName) {
    case SPOTIFY_TYPE:
      return '#E5F4EB';
    case DEEZER_TYPE:
      return '#F9F2DE';
    case APPLE_MUSIC_TYPE:
      return '#FFE9F4';
    default:
      return '#FFE9F4';
  }
}

const getPlatformClassName = (platformName: string): string => {
  switch (platformName) {
    case SPOTIFY_TYPE:
      return 'spotifyTrackImage';
    case DEEZER_TYPE:
      return 'deezerTrackImage';
    case APPLE_MUSIC_TYPE:
      return 'appleTrackImage';
    default:
      return 'platformTrackImage';
  }
}

const PlatformCard: React.FC<PlatformCardProps> = (props: PlatformCardProps) => {
  const background: string = getBackgroundColor(props.name);
  const iconAlt: string = `${props.name} icon`;
  const trackImageAlt: string = `Track cover for ${props.name}`;
  const platformClassName = getPlatformClassName(props.name);

  return (
    <section className={styles.platformCardContainerBase} style={{ background }}>
      <section className={styles.platformDetails}>
        <section className={styles.platformHeader}>
          {props.icon && <img src={props.icon} className={styles.platformIcon} alt={iconAlt} />}
          <h3>{props.name}</h3>
        </section>
        <section className={styles.platformTrackDetails}>
          <div className={styles[platformClassName]}>
            <img alt={trackImageAlt} className={styles.platformTrackImage} src={props.imageUrl} />
          </div>

          <section className={styles.platformTrackInfo}>
            <span className={styles.platformTrackTitle}>{props.title}</span>
            <span className={styles.platformTrackArtiste}>{props.artiste}</span>

            <div className={styles.platformGenreYear}>
              <span>{props.genre}</span>
              {" · "}
              <span>{props.year}</span>
            </div>
          </section>
        </section>
      </section>

      <CopyLinkButton link={props.url} />
    </section>
  );
};

export default PlatformCard;
