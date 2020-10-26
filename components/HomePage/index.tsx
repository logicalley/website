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
import Parallax from '../Parallax';

const HomePage: React.FC = () => {
  const songBoardImageFallback: string = 'https://res.cloudinary.com/anniemusic/image/upload/f_auto,q_auto/v1600213041/landing-page-assets/song-board_ihkqtb.jpg';

  return (
    <section className={styles.homeContainer}>
      <Spacer h="64px" mh="56px" />

      <AnnieLogo height="80px" width="80px" />
      <Spacer h="24px" mh="16px" />
      <h1 className={styles.homeHeader}>
        <span>The easiest way to share</span>
        {' '}
        <span>good music</span>
      </h1>

      <Spacer h="48px" mh="32px" />
      <section className={styles.downloadSection}>
        <AppleAppStoreButton />
        <GooglePlayButton />
      </section>

      <Spacer h="54px" mh="64px" />
      {/* <Parallax /> */}
      <picture className={styles.songLinkContainer}>
        <source srcSet="
          /images/song-board.webp 1x,
          /images/song-board.webp 2x" type="image/webp" />
        <img src={songBoardImageFallback} alt="Different Songs shared via Annie" className={styles.songLink} />
      </picture>

      <Spacer h="231px" mh="94px" />
      <Description />

      <Spacer h="231px" mh="94px" />
      <HowToUse />

      <Spacer h="231px" mh="94px" />
      <AnnieLinkArt />

      <Spacer h="231px" mh="94px" />
      <GetGrooving />

      <Spacer h="231px" mh="94px" />
    </section>
  );
};

export default HomePage;
