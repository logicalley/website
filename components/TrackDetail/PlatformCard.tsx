import React, { useState, Fragment, useEffect } from 'react';

import styles from './styles.module.css';
import type { PlatformCardProps } from '../..';
import {
  ANNIE_TYPE,
  ANALYTICS_EVENTS
} from '../../utils/constants';
import PlatformModal from './PlatformModal';
import Modal from '../Modal';
import Analytics from '../../utils/analytics';


const PlatformCard: React.FC<PlatformCardProps> = (props: PlatformCardProps) => {
  const [modalIsOpen, setIsOpen] = useState(false);

  const iconAlt: string = `${props.name} icon`;
  const iconToUse = props.name === 'Apple Music' ? props.darkIcon : props.icon;
  const closeModal = () => setIsOpen(false);

  const sendTrackAnalytics = (): void => {
    const { name: platform, title, artiste } = props;

    Analytics.getInstance().trackEvent(ANALYTICS_EVENTS.SHARE_MODAL_OPEN, {
      title,
      artiste,
      platform: platform.toUpperCase()
    })
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
