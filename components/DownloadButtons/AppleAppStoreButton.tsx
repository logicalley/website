import React, { Fragment, useState } from 'react';
import Modal from 'react-modal';

import styles from './styles.module.css';

import { registerEvent } from '../../utils/googleAnalytics';
import {
  GA_ACTION_APP_STORE_DOWNLOAD,
  GA_CATEGORY_DOWNLOAD_BUTTONS
} from '../../utils/constants';


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

const AppleAppStoreButton: React.FC = () => {
  const [modalIsOpen, setIsOpen] = useState(false);

  const popUpModal = () => {
    registerEvent({
      action: GA_ACTION_APP_STORE_DOWNLOAD,
      category: GA_CATEGORY_DOWNLOAD_BUTTONS,
      label: GA_ACTION_APP_STORE_DOWNLOAD,
      value: 1
    });
    setIsOpen(true);
  }
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
          width="17"
          height="20"
          fill="none"
          viewBox="0 0 17 20"
          className={styles.storeLogo}
        >
          <path
            fill="#F6F4FB"
            fillRule="evenodd"
            d="M12.064.087a4.445 4.445 0 01-1.02 3.187 3.75 3.75 0 01-2.96 1.398 4.23 4.23 0 011.046-3.07A4.536 4.536 0 0112.064.088zm3.633 6.783a4.517 4.517 0 00-2.154 3.79 4.366 4.366 0 002.669 4.018 10.001 10.001 0 01-1.389 2.823c-.817 1.222-1.675 2.415-3.036 2.438-.647.014-1.084-.172-1.54-.365-.474-.202-.97-.413-1.744-.413-.821 0-1.338.218-1.837.427-.43.181-.848.357-1.436.38-1.296.049-2.287-1.303-3.134-2.513C.4 14.984-.918 10.49.85 7.433a4.862 4.862 0 014.09-2.49c.735-.016 1.44.267 2.06.515.472.19.894.359 1.24.359.304 0 .714-.163 1.192-.352.754-.299 1.675-.664 2.615-.565a4.634 4.634 0 013.65 1.97z"
            clipRule="evenodd"
          ></path>
        </svg>

        <article className={styles.buttonLabel}>
          <span className={styles.downloadText}>Download on the </span>
          <span className={styles.storeName}>App Store</span>
        </article>
      </button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Beta Modal!"
      >
        <section className={styles.modalContainer}>
          <h3>Annie is currently in Beta!</h3>
          <a href="/beta/volunteer" className={styles.betaLink}>
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

export default AppleAppStoreButton;
