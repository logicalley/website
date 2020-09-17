import React from 'react';

import styles from './styles.module.css';


const Support: React.FC = () => {
  const patreonUrl: string = 'https://www.patreon.com/anniemusic';


  return (
    <section className={styles.supportContainer}>
      <h3>Since you're here</h3>

      <span>
        ...We have a small favour to ask. Annie could use your support on Patreon.
        It takes a lot of time and revenue to run this.
        If everyone who likes and uses our platform helps to pay for it, we can
        keep things up and running around here.
      </span>

      <a href={patreonUrl}>
        Support Annie
      </a>
    </section>
  );
};

export default Support;
