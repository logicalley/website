import React, { useState } from 'react';

import styles from './styles.module.css';

import Spinner from '../Spinner';

import type { IFrameLoaderProps } from '../..';

const IFrameLoader: React.FC<IFrameLoaderProps> = ({ url }: IFrameLoaderProps) => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <section className={styles.betaContainer}>
      {isLoading ? <Spinner /> : null}
      <iframe
        className={styles.airtableEmbed}
        src={url}
        frameBorder="0"
        onLoad={() => setIsLoading(false)}
      />
    </section>
  );
}

export default IFrameLoader;
