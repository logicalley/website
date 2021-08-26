import React, { useState, Fragment } from 'react';
import senticize from '@bolajiolajide/utils/dist/sentencize';
import { Dialog, Transition } from '@headlessui/react';

import ClonePlaylistModal from './ClonePlaylistModal';
import Modal from '../Modal';
import type { PlaylistInfoCard } from '../..';
import styles from './styles.module.css';


const InfoCard: React.FC<PlaylistInfoCard> = (props: PlaylistInfoCard) => {
  const [modalIsOpen, setIsOpen] = useState(false);

  const { image_url, title, owner, origin, total, originalUrl, id } = props.info;
  const imageAlt: string = `Cover picture for playlist: ${title}`;
  const source = senticize(origin, '_');

  const closeModal = () => setIsOpen(false);

  const linkProps = {
    className: styles.playlistAction,
    target: '_blank',
    rel: 'noopener',
    href: originalUrl
  };

  const openCardOptions = () => {
    setIsOpen(true);
  };

  const modalProps = {
    onClose: closeModal,
    isOpen: modalIsOpen,
    title: 'Clone Playlist',
    description: 'Select a platform to clone the playlist.'
  }

  return (
    <Fragment>
      <section className={styles.infoCardContainer}>
        <section className={styles.playlistDetailsContainer}>
          <img src={image_url} alt={imageAlt} className={styles.playlistImage} />

          <section className={styles.playlistDetails}>
            <h1 className={styles.playlistTitle}>{title}</h1>
            <p className={styles.playlistMetadatum}>Made by: {owner}</p>
            <p className={styles.playlistMetadatum}>{total} songs.</p>
            <p className={styles.playlistMetadatum}>Source: {source}</p>
          </section>
        </section>

        <section className={styles.playlistCtas}>
          <a {...linkProps}>
            <span>View Original</span>
          </a>

          <button className={styles.playlistAction} onClick={openCardOptions}>
            Clone Playlist
          </button>
        </section>
      </section>

      <Modal {...modalProps}>
        <ClonePlaylistModal playlistId={id} />
      </Modal>
    </Fragment>
  );
};

export default InfoCard;
