import React, { useState, Fragment } from 'react';
import Modal from 'react-modal';

import styles from './styles.module.css';

import type { PlatformCardProps } from '../..';
import {
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


const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)'
  }
};

Modal.setAppElement('#modal');

const PlatformCard: React.FC<PlatformCardProps> = (props: PlatformCardProps) => {
  const [modalIsOpen, setIsOpen] = useState(false);

  const iconAlt: string = `${props.name} icon`;
  const iconToUse = props.name === 'Apple Music' ? props.darkIcon : props.icon;
  const closeModal = () => setIsOpen(false);
  const modalProps = {
    isOpen: modalIsOpen,
    onRequestClose: closeModal,
    style: customStyles,
    contentLabel: "Beta Modal!"
  };

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

  const platformBtnProps = {
    className: styles.platformCardContainerBase,
    style: { borderColor: props.color },
    onClick: openCardOptions
  };

  return (
    <Fragment>
      <button {...platformBtnProps}>
        <h4 className={styles.platformName}>{props.name}</h4>
        {iconToUse ? (
          <img src={iconToUse} alt={iconAlt} className={styles.platformIcon} />
        ) : <div />}
      </button>

      <Modal {...modalProps}>
        <PlatformModal
          closeFn={closeModal}
          title={props.title}
          url={props.url}
          artiste={props.artiste}
          platformName={props.name}
        />
      </Modal>
    </Fragment>
  );
};

export default PlatformCard;
