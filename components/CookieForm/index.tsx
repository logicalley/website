import React from 'react';
import Image from 'next/image';
import styles from './styles.module.css';
import Link from 'next/link';
import { useCookie } from 'next-cookie';
import { useState, useEffect } from 'react';

const CookieForm: React.FC = ({ children }) => {
  const [showCookieForm, setShowCookieForm] = useState<boolean>(false);
  const cookie = useCookie();

  const handleSubmit = (): void => {
    cookie.set('ANNIE_USER_COOKIE_ACCEPT', 1);
    setShowCookieForm(false);
  };

  useEffect(() => {
    const cookieValue = cookie.get('ANNIE_USER_COOKIE_ACCEPT');
    if (cookieValue == 1) {
      setShowCookieForm(false);
    } else {
      setShowCookieForm(true);
    }
  }, []);

  return (
    <>
      {showCookieForm && (
        <div className={styles.cookieContainer}>
          <div className={styles.cookieImage}>
            <Image
              src="/images/cookie.jpg"
              alt="cookie"
              width="36"
              height="36"
            />
          </div>
          <div className={styles.privacyText}>
            By using Annie, you agree to our
            <Link href="/privacy-policy">
              <a>Privacy Policy</a>
            </Link>
          </div>
          <button className={styles.acceptBtn} onClick={handleSubmit}>
            ACCEPT
          </button>
        </div>
      )}
      {children}
    </>
  );
};

export default CookieForm;
