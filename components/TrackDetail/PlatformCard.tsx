import React from 'react';

import styles from './styles.module.css';

import type { PlatformCardProps } from '../..';
import {
  SPOTIFY_TYPE,
  DEEZER_TYPE,
  APPLE_MUSIC_TYPE,
  GA_ACTION_SPOTIFY_CARD_CLICK,
  GA_ACTION_APPLE_MUSIC_CARD_CLICK,
  GA_ACTION_DEEZER_CARD_CLICK,
  GA_CATEGORY_TRACK_ACTIONS,
  GA_ACTION_OPEN_LINK_BUTTON_CLICK
} from '../../utils/constants';
import { registerEvent } from '../../utils/googleAnalytics';

import CopyLinkButton from './CopyLinkButton';


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

const PlatformCard: React.FC<PlatformCardProps> = (props: PlatformCardProps) => {
  const background: string = getBackgroundColor(props.name);
  const iconAlt: string = `${props.name} icon`;
  const trackImageAlt: string = `Track cover for ${props.name}`;
  const linkProps = {
    target: '_blank',
    rel: 'noopener noreferrer',
    href: props.url
  };

  const sendTrackAnalytics = () => {
    const platform = props.name;
    let action;

    if (platform === SPOTIFY_TYPE) {
      action = GA_ACTION_SPOTIFY_CARD_CLICK;
    } else if (platform === DEEZER_TYPE) {
      action = GA_ACTION_DEEZER_CARD_CLICK;
    } else if (platform === APPLE_MUSIC_TYPE) {
      action = GA_ACTION_APPLE_MUSIC_CARD_CLICK;
    } else {
      action = 'UNDEFINED_CARD_CLICK';
    }

    registerEvent({
      action,
      category: GA_CATEGORY_TRACK_ACTIONS,
      label: `${action}: ${props.title} - ${props.artiste}`,
      value: 1
    });
  }

  const sendOpenLinkAnalytics = () => {
    const action = GA_ACTION_OPEN_LINK_BUTTON_CLICK;
    registerEvent({
      action,
      category: GA_CATEGORY_TRACK_ACTIONS,
      label: `${action}: ${props.title} - ${props.artiste}`,
      value: 1
    });
  }

  return (
    <section className={styles.platformCardContainerBase} style={{ background }} onClick={sendTrackAnalytics}>
      <a className={styles.platformDetails} {...linkProps}>
        <section className={styles.platformHeader}>
          {props.icon && <img src={props.icon} className={styles.platformIcon} alt={iconAlt} />}
          <h3>{props.name}</h3>
        </section>
        <section className={styles.platformTrackDetails}>
          <img alt={trackImageAlt} className={styles.platformTrackImage} src={props.imageUrl} />

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
      </a>

      <section className={styles.platformCardBtnGroup}>
        <CopyLinkButton
          link={props.url}
          platform={props.name}
          label={`${props.title} - ${props.artiste}`}
        />
        <a {...linkProps} onClick={sendOpenLinkAnalytics} className={styles.openLinkBtn}>
          Open Link
        </a>
      </section>
    </section>
  );
};

export default PlatformCard;
