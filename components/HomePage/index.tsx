import React from 'react';

import styles from './styles.module.css';

// components
import Spacer from '../Spacer';
import AnnieLogo from '../AnnieLogo';
import { GooglePlayButton, AppleAppStoreButton } from '../DownloadButtons';
import Description from '../Description';
import HowToUse from '../HowToUse';
import AnnieLinkArt from '../AnnieLinkArt';


const HomePage: React.FC = () => {
  const songBoardImageFallback: string = 'https://res.cloudinary.com/anniemusic/image/upload/f_auto,q_auto/v1600213041/landing-page-assets/song-board_ihkqtb.jpg';

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

      <Spacer height="50px" />
      <picture className={styles.songLinkContainer}>
        <source srcSet="
          /images/song-board.webp 1x,
          /images/song-board.webp 2x" type="image/webp" />
        <img src={songBoardImageFallback} alt="Different Songs shared via Annie" className={styles.songLink} />
      </picture>

      <Spacer height="30px" />
      <Description />

      <Spacer height="50px" />
      <HowToUse />

      <Spacer height="30px" />
      <AnnieLinkArt />

      <Spacer height="50px" />
    </section>
  );
};

export default HomePage;
