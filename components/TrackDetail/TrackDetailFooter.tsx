import React from 'react';
import Link from 'next/link';

import styles from './styles.module.css';

const TrackDetailFooter: React.FC = () => {
  const currentYear: number = new Date().getFullYear();
  const termsOfUseLink: string = '/terms-conditions';
  const privacyPolicyLink: string = '/privacy-policy';

  return (
    <section className={styles.trackFooter}>
      <span>Copyright © {currentYear} Annie. All Rights Reserved </span>

      <div>
        <Link href={termsOfUseLink}>
          <a>Terms and Conditions</a>
        </Link>

        <Link href={privacyPolicyLink}>
          <a>Privacy Policy</a>
        </Link>
      </div>
    </section>
  );
}

export default TrackDetailFooter;
