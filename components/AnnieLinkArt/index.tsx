import React from 'react';

import styles from './styles.module.css';


const AnnieLinkArt: React.FC = () => {
  const imageFallback: string = 'https://res.cloudinary.com/anniemusic/image/upload/f_auto,q_auto/v1600291722/landing-page-assets/annie-link_yqfbf6.png';

  return (
    <section className={styles.linkArtContainer}>
      <article className={styles.linkArtTextContainer}>
        <h3>Get everyone vibing to your favorite jams</h3>
        <span>
          Spread love and good vibes to all your friends with great playlists
        </span>
      </article>

      <picture className={styles.annieLinkImageContainer}>
        <source srcSet="
            /images/annie-link.webp 1x,
            /images/annie-link.webp 2x" type="image/webp" />
        <img
          src={imageFallback}
          alt="image showing links between platforms"
          className={styles.annieLinkImage}
          loading="lazy"
        />
      </picture>
    </section>
  );
};

export default AnnieLinkArt;
