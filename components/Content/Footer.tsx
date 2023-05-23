import React from 'react';
import Link from 'next/link';

import styles from '../TrackDetail/styles.module.css';

const TrackDetailFooter: React.FC = () => {
  const termsOfUseLink: string = '/terms-conditions';
  const privacyPolicyLink: string = '/privacy-policy';

  return (
    <footer className={styles.trackFooter}>
      <span>Copyright © 2021 - present, Annie. All Rights Reserved </span>
      <br />
      <div className={styles.footerLinks}>
        <Link href={termsOfUseLink} className={styles.platformLink}>
          Terms and Conditions
        </Link>

        <Link href={privacyPolicyLink} className={styles.platformLink}>
          Privacy Policy
        </Link>
      </div>
    </footer>
  );
}

export default TrackDetailFooter;
