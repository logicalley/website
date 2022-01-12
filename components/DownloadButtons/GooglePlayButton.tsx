import React, { Fragment, useState, useEffect } from 'react';

import styles from './styles.module.css';
import Modal from '../Modal';
import { ANALYTICS_EVENTS, MOBILE_STORE_SOURCE } from '../../utils/constants';
import Analytics from '../../utils/analytics';


const GooglePlayButton: React.FC = () => {
  const [modalIsOpen, setIsOpen] = useState(false);

  // const sendAnalytics = () => Analytics.getInstance().trackLink('#googlePlayStoreLink', ANALYTICS_EVENTS.MOBILE_STORE_ACCESS, {
  //   source: MOBILE_STORE_SOURCE.ANDROID
  // });

  const popUpModal = () => {
    // sendAnalytics();
    setIsOpen(true);
  };

  const closeModal = () => setIsOpen(false);

  const baseLinkProps = {
    target: '_blank',
    rel: 'noopener noreferrer',
    className: styles.socialMediaLink
  };

  const twitterLinkProps = {
    ...baseLinkProps,
    href: 'https://twitter.com/anniemusicapp',
  };

  const instagramLinkProps = {
    ...baseLinkProps,
    href: 'https://instagram.com/anniemusicapp',
  };

  return (
    <Fragment>
      <button className={styles.buttonContainer} onClick={popUpModal}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="21"
          height="22"
          fill="none"
          viewBox="0 0 21 22"
          className={styles.storeLogo}
        >
          <path
            fill="#F6F4FB"
            d="M.418 2.174v18.523a.204.204 0 00.347.145l9.645-9.406L.765 2.029a.204.204 0 00-.347.145zM14.454 7.571L2.361.908 2.354.904c-.209-.113-.407.169-.236.333l9.48 9.065 2.856-2.73zM2.118 21.635c-.171.164.027.446.236.333l.008-.005 12.092-6.662-2.857-2.732-9.479 9.066zM19.335 10.258l-3.377-1.86-3.175 3.038 3.175 3.037 3.377-1.859c.919-.507.919-1.849 0-2.356z"
          ></path>
        </svg>

        <article className={styles.buttonLabel}>
          <span className={styles.downloadText}>GET IT ON</span>
          <span className={styles.storeName}>Google Play</span>
        </article>
      </button>

      <Modal
        isOpen={modalIsOpen}
        onClose={closeModal}
        title="Annie is currently in Beta for Android!"
      >
        <section className={styles.modalContainer}>
          <a href="https://airtable.com/shrKB0oRCBFFjQZA3?backgroundColor=purple" className={styles.betaLink}>
            Sign up for Beta access here.
          </a>
          <span className={styles.socialMedia}>
            Follow us on <a {...twitterLinkProps}>Twitter</a> and <a {...instagramLinkProps}>Instagram</a>: @anniemusicapp
          </span>
        </section>
      </Modal>
    </Fragment>
  );
}

export default GooglePlayButton;
