import React from 'react';

import styles from './styles.module.css';


const SelectPlatform: React.FC = () => (
  <section className={styles.selectPlatformContainer}>
    <section className={styles.platformsSelectContainer}>
      <input type="radio" />
    </section>

    <button>Login</button>
  </section>
);

export default SelectPlatform;
