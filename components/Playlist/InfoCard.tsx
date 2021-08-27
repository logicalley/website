import React, { useState, Fragment } from 'react';
import senticize from '@bolajiolajide/utils/dist/sentencize';
import { useRouter } from 'next/router';
import qs from 'qs';

import ClonePlaylist from './ClonePlaylist';
import Modal from '../Modal';
import type { PlaylistInfoCard } from '../..';
import styles from './styles.module.css';


const InfoCard: React.FC<PlaylistInfoCard> = (props: PlaylistInfoCard) => {
  const { query, pathname, replace: replaceUrl } = useRouter();
  const { modalState = 'close', id: playlistId } = query;
  const [modalIsOpen, setIsOpen] = useState<boolean>(modalState === 'open');

  const { image_url, title, owner, origin, total, originalUrl, id } = props.info;
  const imageAlt: string = `Cover picture for playlist: ${title}`;
  const source = senticize(origin, '_');

  const closeModal = () => {
    setIsOpen(false);

    replaceUrl(updateUrlParam({ modalState: 'close' }));
  };

  const linkProps = {
    className: styles.playlistAction,
    target: '_blank',
    rel: 'noopener',
    href: originalUrl
  };

  const generateCurrentPathname = (): string => {
    return pathname.replace(/\[id\]/, props.info.id.toString());
  }

  const updateUrlParam = (updatedParam: Record<string, string>): string => {
    const { id, ...remainingQuery } = query;
    const basePath = generateCurrentPathname();
    const newQueryParams = qs.stringify({
      ...remainingQuery,
      ...updatedParam
    });

    return `${basePath}?${newQueryParams}`;
  }

  const openCardOptions = () => {
    setIsOpen(true);

    replaceUrl(updateUrlParam({ modalState: 'open' }));
  };

  const modalProps = {
    onClose: closeModal,
    isOpen: modalIsOpen,
    title: 'Clone Playlist',
  }

  return (
    <Fragment>
      <section className={styles.infoCardContainer}>
        <section className={styles.playlistDetailsContainer}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
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
        <ClonePlaylist playlistId={id} />
      </Modal>
    </Fragment>
  );
};

export default InfoCard;
