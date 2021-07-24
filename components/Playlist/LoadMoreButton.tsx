import React from 'react';

import type { LoadMoreProps } from '../..';

import styles from './styles.module.css';

import CircleSpinner from '../Spinner/CircleSpinner';


const LoadMoreButton = ({ fetchMore, isLoading }: LoadMoreProps) => (
  <button className={styles.loadMoreBtn} onClick={fetchMore} disabled={isLoading}>
    {isLoading ? <CircleSpinner /> : <span>Load More</span>}
  </button>
);

export default LoadMoreButton;
