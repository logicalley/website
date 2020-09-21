import React from 'react';

import styles from './styles.module.css';

// components
import Spacer from '../Spacer';
import AnnieLogo from '../AnnieLogo';
import { GooglePlayButton, AppleAppStoreButton } from '../DownloadButtons';
import Description from '../Description';
import HowToUse from '../HowToUse';
import AnnieLinkArt from '../AnnieLinkArt';
import GetGrooving from '../GetGrooving';
import Support from '../Support';


const HomePage: React.FC = () => {
  const songBoardImageFallback: string = 'https://res.cloudinary.com/anniemusic/image/upload/f_auto,q_auto/v1600213041/landing-page-assets/song-board_ihkqtb.jpg';

  return (
    <section className={styles.homeContainer}>
      <Spacer height="64px" />

      <AnnieLogo height="80px" width="80px" />
      <Spacer height="24px" />
      <h1 className={styles.homeHeader}>
        <span>The easiest way to share</span>
        {' '}
        <span>good music</span>
      </h1>

      <Spacer height="48px" />
      <section className={styles.downloadSection}>
        <AppleAppStoreButton />
        <GooglePlayButton />
      </section>

      <Spacer height="54px" />
      <picture className={styles.songLinkContainer}>
        <source srcSet="
          /images/song-board.webp 1x,
          /images/song-board.webp 2x" type="image/webp" />
        <img src={songBoardImageFallback} alt="Different Songs shared via Annie" className={styles.songLink} />
      </picture>

      <Spacer height="231px" />
      <Description />

      <Spacer height="231px" />
      <HowToUse />

      <Spacer height="231px" />
      <AnnieLinkArt />

      <Spacer height="231px" />
      <GetGrooving />

      <Spacer height="231px" />
      <Support />
    </section>
  );
};

export default HomePage;
