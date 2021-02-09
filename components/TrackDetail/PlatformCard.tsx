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


const PlatformCard: React.FC<PlatformCardProps> = (props: PlatformCardProps) => {
  const iconAlt: string = `${props.name} icon`;
  const iconToUse = props.name === 'Apple Music' ? props.darkIcon : props.icon;

  // const sendTrackAnalytics = (): void => {
  //   const platform = props.name;
  //   let action;

  //   if (platform === SPOTIFY_TYPE) {
  //     action = GA_ACTION_SPOTIFY_CARD_CLICK;
  //   } else if (platform === DEEZER_TYPE) {
  //     action = GA_ACTION_DEEZER_CARD_CLICK;
  //   } else if (platform === APPLE_MUSIC_TYPE) {
  //     action = GA_ACTION_APPLE_MUSIC_CARD_CLICK;
  //   } else {
  //     action = 'UNDEFINED_CARD_CLICK';
  //   }

  //   registerEvent({
  //     action,
  //     category: GA_CATEGORY_TRACK_ACTIONS,
  //     label: `${action}: ${props.title} - ${props.artiste}`,
  //     value: 1
  //   });
  // }

  // const sendOpenLinkAnalytics = (): void => {
  //   const action = GA_ACTION_OPEN_LINK_BUTTON_CLICK;
  //   registerEvent({
  //     action,
  //     category: GA_CATEGORY_TRACK_ACTIONS,
  //     label: `${action}: ${props.title} - ${props.artiste}`,
  //     value: 1
  //   });
  // }

  return (
    <button className={styles.platformCardContainerBase} style={{ borderColor: props.color }}>
      <h4 className={styles.platformName}>{props.name}</h4>
      {props.icon ? (
        <img src={iconToUse} alt={iconAlt} className={styles.platformIcon} loading="lazy" />
      ) : <div />}
    </button>
  );
};

export default PlatformCard;
