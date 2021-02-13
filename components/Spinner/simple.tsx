import React from 'react';

import styles from './styles.module.css';


const SimpleSpinner: React.FC = () => (
  <div className={styles.simpleSpinner_container}>
    <div className={styles.simpleSpinner_bounce1} />
    <div className={styles.simpleSpinner_bounce2} />
  </div>
);

export default SimpleSpinner;
