import React, { useState, Fragment, useEffect } from 'react';

import styles from './styles.module.css';

import type { ClonePlaylistModalProps } from '../..';

import { FetchStatus } from '../../utils/constants';

import Spinner from '../Spinner';
import SelectPlatform from './SelectPlatform';


const ClonePlaylistModal: React.FC<ClonePlaylistModalProps> = (props: ClonePlaylistModalProps) => {
  // set isLoading
  const [fetchState, setFetchState] = useState<FetchStatus>(FetchStatus.IDLE);

  useEffect(() => {
    console.log('======');
  }, []); // do some funny meandering here to check token and see if valid
  // TODO: check for token stuff on first load.

  const { playlistId } = props;

  const renderModalContent = () => {
    if (fetchState === FetchStatus.LOADING) {
      return <Spinner />
    }

    return <SelectPlatform />;
  };

  return (
    <section className={styles.modalContainer}>
      {renderModalContent()}
    </section>
  );
};

export default ClonePlaylistModal;
