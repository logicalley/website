import React from 'react';

import styles from './styles.module.css';

// components
import Spacer from '../Spacer';
import AnnieLogo from '../AnnieLogo';
import { GooglePlayButton, AppleAppStoreButton } from '../DownloadButtons';


const HomePage: React.FC = () => {
  return (
    <section className={styles.homeContainer}>
      <Spacer height="56px" />

      <AnnieLogo height="80px" width="80px" />
      <h1 className={styles.homeHeader}>
        <span>The easiest way to share</span>
        {' '}
        <span>good music</span>
      </h1>

      <Spacer height="30px" />
      <section className={styles.downloadSection}>
        <AppleAppStoreButton />
        <GooglePlayButton />
      </section>

      <Spacer height="30px" />
      <img src="/images/song-board.webp" className={styles.songLink} />
    </section>
  );
};

export default HomePage;
