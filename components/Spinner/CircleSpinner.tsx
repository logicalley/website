import React from 'react';

import styles from './styles.module.css';


const CircleSpinner: React.FC = () => (
  <section className={styles.circleRing}>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
  </section>
);

export default CircleSpinner;
