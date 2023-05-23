import React from 'react';
import Link from 'next/link';

import styles from '../TrackDetail/styles.module.css';

const TrackDetailFooter: React.FC = () => {
  const currentYear: number = new Date().getFullYear();
  const termsOfUseLink: string = '/terms-conditions';
  const privacyPolicyLink: string = '/privacy-policy';

  return (
    <footer className={styles.trackFooter}>
      <span>Copyright © {currentYear} Annie. All Rights Reserved </span>
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
