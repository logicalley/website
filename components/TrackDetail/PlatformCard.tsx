import React, { useState, Fragment, useEffect } from 'react';

import styles from './styles.module.css';
import type { PlatformCardProps } from '../..';
import {
  ANNIE_TYPE,
  SPOTIFY_TYPE,
  DEEZER_TYPE,
  APPLE_MUSIC_TYPE,
  GA_ACTION_SPOTIFY_CARD_CLICK,
  GA_ACTION_APPLE_MUSIC_CARD_CLICK,
  GA_ACTION_DEEZER_CARD_CLICK,
  GA_CATEGORY_TRACK_ACTIONS
} from '../../utils/constants';
import { registerEvent } from '../../utils/googleAnalytics';
import PlatformModal from './PlatformModal';
import Modal from '../Modal';


const PlatformCard: React.FC<PlatformCardProps> = (props: PlatformCardProps) => {
  const [modalIsOpen, setIsOpen] = useState(false);

  const iconAlt: string = `${props.name} icon`;
  const iconToUse = props.name === 'Apple Music' ? props.darkIcon : props.icon;
  const closeModal = () => setIsOpen(false);

  const sendTrackAnalytics = (): void => {
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
  };

  const openCardOptions = () => {
    sendTrackAnalytics();
    setIsOpen(true);
  };

  const isAnnieLink = props.name === ANNIE_TYPE;
  const classToUse = isAnnieLink ? 'annieCardContainer' : 'platformCardContainerBase';
  const platformBtnProps = {
    className: styles[classToUse],
    style: { borderColor: props.color },
    onClick: openCardOptions
  };

  return (
    <Fragment>
      <button {...platformBtnProps}>
        <section className={styles.platformCardTitleContainer}>
          <h4 className={styles.platformName}>{props.name}</h4>
          {isAnnieLink ? (
            <span className={styles.annieCardDescription}>Everything in one link.</span>
          ) : null}
        </section>

          {/* eslint-disable-next-line @next/next/no-img-element */}
        {iconToUse ? (<img src={iconToUse} alt={iconAlt} className={styles.platformIcon} />
        ) : <div />}
      </button>

      <Modal isOpen={modalIsOpen} onClose={closeModal} title="Share to ...">
        <PlatformModal
          closeFn={closeModal}
          title={props.title}
          url={props.url}
          artiste={props.artiste}
          platformName={props.name}
          shortUrl={props.shortUrl}
        />
      </Modal>
    </Fragment>
  );
};

export default PlatformCard;
