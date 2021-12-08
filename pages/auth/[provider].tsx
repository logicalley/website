import React, { Fragment, useState } from 'react';
import { NextPage, GetServerSideProps, GetServerSidePropsContext } from 'next';
import { useRouter } from 'next/router';
import getConfig from 'next/config';
import { useLocalStorage, useMount } from 'react-use';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import CircleSpinner from '../../components/Spinner/CircleSpinner';
import styles from './styles.module.css';
import type {
  AuthRedirectProps,
  AuthRedirectServerSideProps
} from '../..';
import { isValidProvider } from '../../utils/provider';
import { AUTH_NEXT_URL_KEY, FetchStatus } from '../../utils/constants';


const { publicRuntimeConfig } = getConfig();

const AuthRedirectPage: NextPage<AuthRedirectProps> = (props: AuthRedirectProps) => {
  const { url, error } = props;

  const [status, setStatus] = useState<FetchStatus>(FetchStatus.IDLE);
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const router = useRouter();
  const [nextUrl] = useLocalStorage(AUTH_NEXT_URL_KEY, undefined, { raw: true });

  const handleAuthVerification = () => {
    setIsMobile(!nextUrl);
    setStatus(FetchStatus.SUCCESS);
    console.log('mounted', nextUrl);
  };

  useMount(handleAuthVerification);

  const renderContent = (): JSX.Element => {
    if (error || status === FetchStatus.ERROR) {
      const message = error || 'An error occurred while verifying your authentication credentials. Please try again.';

      return (
        <Fragment>
            <p>{message}</p>
        </Fragment>
      );
    }

    if (url && status === FetchStatus.SUCCESS) {
      switch (isMobile) {
        case true:
          window.location.href = `annie://login${url}`;
          break;
        case false:
          router.replace(`/auth/verify${url}`);
          break;
        default:
          break;
      }

      return <div />;
    }

    return <CircleSpinner />;
  }


  return (
    <Fragment>
      <Header />
      <section className={styles.authContainer}>
        {renderContent()}
      </section>
      <Footer />
    </Fragment>
  );
};

export const getServerSideProps: GetServerSideProps = async (
  context: GetServerSidePropsContext
): Promise<AuthRedirectServerSideProps> => {
  const { provider, code = '', error: _error = '', user } = context.query;

  const transformedProvider = (provider as string).toLowerCase();
  const authError = (_error as string).toLowerCase();
  const transformedCode = code as string;

  try {
    if (isValidProvider(transformedProvider) && !authError) {
      let authRedirectEndpoint = `${publicRuntimeConfig.apiBaseUrl}/auth/${transformedProvider}?code=${transformedCode}`;

      if (user) {
        authRedirectEndpoint += `&user=${user}`;
      }

      const response = await fetch(authRedirectEndpoint);

      if (response.ok) {
        const { data } = await response.json();

        console.log(JSON.stringify(data, null, 2), '<====');

        return {
          props: {
            error: null,
            url: data,
          }
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
      error: 'An error occurred while verifying your authentication credentials. Please try again.',
      url: null
    }
  };
}

export default AuthRedirectPage;
