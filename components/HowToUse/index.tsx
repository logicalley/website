import React from 'react';

import styles from './styles.module.css';


const HowToUse: React.FC = () => {
  const phoneMockup: string = 'https://res.cloudinary.com/anniemusic/image/upload/f_auto,q_auto/v1600219980/landing-page-assets/Phone-mockup_dnilkk.png';

  return (
    <section className={styles.howToUseContainer}>
      <h2>Start a music network from your device</h2>

      <div className={styles.howToUseContent}>
        <picture className={styles.phoneMockupContainer}>
          <source srcSet="
            /images/phone-mockup.webp 1x,
            /images/phone-mockup.webp 2x" type="image/webp" />
          <img
            src={phoneMockup}
            alt="Annie mockup on iPhone"
            className={styles.phoneMockup}
            loading="lazy"
          />
        </picture>

        <dl className={styles.howToUseDescription}>
          <div className={styles.stepOne}>
            <dt>Spot that great tune</dt>
            <dd>Easily share great music you discover while listening</dd>
          </div>

          <div className={styles.stepTwo}>
            <dt>Copy song link</dt>
            <dd>You only need a single link to rule them all</dd>
          </div>

          <div className={styles.stepThree}>
            <dt>Put everyone else on</dt>
            <dd>Make your songs & playlists available to everyone on all music platforms</dd>
          </div>
        </dl>
      </div>
    </section>
  );
}

export default HowToUse;
