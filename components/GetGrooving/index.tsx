import React from 'react';

import styles from './styles.module.css';

// components
import { GooglePlayButton, AppleAppStoreButton } from '../DownloadButtons';


const GetGrooving: React.FC = () => {
  const imageFallback: string = 'https://res.cloudinary.com/anniemusic/image/upload/f_auto,q_auto/v1600300194/landing-page-assets/annie-screenshot_esr1nz.png'

  return (
    <section className={styles.getGroovingContainer}>
      <picture className={styles.screenshotContainer}>
        <source srcSet="
            /images/annie-screenshot.webp 1x,
            /images/annie-screenshot.webp 2x" type="image/webp" />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={imageFallback}
          alt="login screen for annie"
          className={styles.screenshot}
          loading="lazy"
        />
      </picture>

      <div className={styles.getGroovingContent}>
        <h3 className={styles.getGroovingHeader}>Ready to get this party grooving?</h3>

        <span className={styles.getGroovingText}>
          It’s really just that easy.
          See for yourself!
        </span>

        <div className={styles.downloadSection}>
          <AppleAppStoreButton />
          <GooglePlayButton />
        </div>
      </div>
    </section>
  );
};

export default GetGrooving;
