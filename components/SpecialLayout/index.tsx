import React from 'react';

import styles from './styles.module.css';


const SpecialLayout: React.FC = ({ children }) => (
  <section className={styles.container}>
    {children}
  </section>
);

export default SpecialLayout;
