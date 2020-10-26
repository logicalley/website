import React, { useState } from 'react';

import styles from './styles.module.css';

import Spinner from '../Spinner';

const Beta: React.FC = () => {
  const airtableUrl: string = 'https://airtable.com/embed/shreOBdjoNCqglpKe?backgroundColor=orange';
  const [isLoading, setIsLoading] = useState(true);

  return (
    <section className={styles.betaContainer}>
      {isLoading ? <Spinner /> : null}
      <iframe
        className={styles.airtableEmbed}
        src={airtableUrl}
        frameBorder="0"
        onLoad={() => setIsLoading(false)}
      />
    </section>
  );
}

export default Beta;
