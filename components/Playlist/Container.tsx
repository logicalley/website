import React from 'react';

import styles from './styles.module.css';


const PlaylistContainer: React.FC = ({ children }) => (
  <section className={styles.mainPlaylistContainer}>
    {children}
  </section>
);

export default PlaylistContainer;
