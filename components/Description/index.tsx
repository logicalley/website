import React from 'react';

import styles from './styles.module.css';


const Description: React.FC = () => (
  <article className={styles.descriptionContainer}>
    <section className={styles.description}>
      <h2>Share everything in just one link</h2>
      <span>
        Annie helps you share your favorite songs and playlists between music platforms.
        You don’t have to worry about anyone missing out.
        Think of it as the only link you will ever need.
      </span>
    </section>

    <picture className={styles.descriptionImageContainer}>
      <source srcSet="
          /images/share-illustration.webp 1x,
          /images/share-illustration.webp2x" type="image/webp" />
      <img
        src="https://res.cloudinary.com/anniemusic/image/upload/f_auto,q_auto/v1600212881/landing-page-assets/share-illustration_fdq5ys.jpg"
        alt="How to share songs on Annie"
        loading="lazy"
        className={styles.descriptionImage} />
    </picture>
  </article>
);

export default Description;
