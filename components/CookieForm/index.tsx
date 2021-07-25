import React from 'react';
import Image from 'next/image';
import styles from './styles.module.css';
import Link from 'next/link';
const CookieForm: React.FC = ({ children }) => {
  return (
    <>
      <div className={styles.cookieContainer}>
        <div className={styles.cookieImage}>
          <Image src="/images/cookie.jpg" alt="cookie" width="36" height="36" />
        </div>
        <div className={styles.privacyText}>
          By using Annie, you agree to our
          <Link href="/privacy-policy">
            <a>Privacy Policy</a>
          </Link>
        </div>
        <button className={styles.acceptBtn}>ACCEPT</button>
      </div>
      {children}
    </>
  );
};

export default CookieForm;
