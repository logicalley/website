import React, { Fragment, useEffect } from 'react';
import { NextPage, GetServerSideProps, GetServerSidePropsContext } from 'next';
import getConfig from 'next/config';
import { useRouter } from 'next/router';
import { useTitle, useLocalStorage } from 'react-use';

import { isValidProvider } from '../../../utils/provider';
import type {
  AuthExampleProps,
  AuthExampleServerSideProps
} from '../../..';
import { AUTH_NEXT_URL_KEY } from '../../../utils/constants';
import styles from './styles.module.css';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import CircleSpinner from '../../../components/Spinner/CircleSpinner';


const { publicRuntimeConfig } = getConfig();

const AuthExampleWithProvider: NextPage<AuthExampleProps> = (props: AuthExampleProps) => {
  const { error, url, type, nextUrl: next } = props;

  const router = useRouter();
  useTitle('Authentication | Annie', {
    restoreOnUnmount: true
  });
  const [_, setNextUrl] = useLocalStorage<string>(AUTH_NEXT_URL_KEY, undefined, {
    raw: true
  });

  const { provider } = router.query;

  useEffect(() => {
    const shouldSetNextUrl = process.browser && (type === 'web') && Boolean(next) && url;

    if (shouldSetNextUrl) {
      setNextUrl(next);
    }

    window.location.href = url;
  }, [url, router, next, type, setNextUrl]);

  const renderContent = () => {
    if (error) {
      return (
        <Fragment>
          <p className={styles.skullIcon}>💀</p>
          <p className={styles.errorText}>
            Oops! Something went wrong.
            <br />
            {error}
          </p>
          <button className={styles.backBtn} onClick={router.back}>Go Back</button>
        </Fragment>
      )
    }

    return (
      <Fragment>
        <CircleSpinner />
        <p className={styles.redirectText}>Redirecting to {provider} authentication page.</p>
      </Fragment>
    )
  }

  return (
    <Fragment>
      <Header />
      <section className={styles.container}>
        {renderContent()}
      </section>
      <Footer />
    </Fragment>
  )
};

export const getServerSideProps: GetServerSideProps = async (
  context: GetServerSidePropsContext
): Promise<AuthExampleServerSideProps> => {
  let lowerCasedProvider = '';
  let lowerCasedType = '';
  let nextUrl = '';

  try {
    if (context.params && context.params.provider) {
      const { provider } = context.params;
      const { type = 'mobile', next } = context.query;

      lowerCasedProvider = (provider as string).toLowerCase();
      lowerCasedType = (type as string).toLowerCase();
      nextUrl = (next as string).toLowerCase();

      if (isValidProvider(lowerCasedProvider)) {
        const authExampleEndpoint = `${publicRuntimeConfig.apiBaseUrl}/auth/example?provider=${lowerCasedProvider}`;

        const response = await fetch(authExampleEndpoint);

        if (response.ok) {
          const { data } = await response.json();

          return {
            props: {
              url: data.url,
              type: lowerCasedType,
              provider: lowerCasedProvider,
              nextUrl
            }
          };
        }
      }
    }
  } catch (error) {
    // need to figure out something to do with the error
    // TODO: log this to sentry
    console.warn(error);
  }

  return {
    props: {
      url: '',
      type: lowerCasedType,
      provider: lowerCasedProvider,
      nextUrl,
      error: 'The provider is not valid. Please enter a provider supported by Annie.'
    }
  };
};

export default AuthExampleWithProvider;
