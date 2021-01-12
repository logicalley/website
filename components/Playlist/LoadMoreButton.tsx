import React from 'react';

import type { LoadMoreProps } from '../..';

import styles from './styles.module.css';

import Spinner from '../Spinner';


const LoadMoreButton = (props: LoadMoreProps) => (
  <button className={styles.loadMoreBtn} onClick={props.fetchMore} disabled={props.isLoading}>
    Load More
    {/* <Spinner /> */}
  </button>
);

export default LoadMoreButton;
