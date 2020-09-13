import React from 'react';
import { convertSliceToString } from '@bolajiolajide/utils';
import { NextPage, NextPageContext } from 'next'

import DeepLinkDisplay from '../components/DeepLinkDisplay';
import Page404 from '../components/404Page';

interface OauthProps extends NextPageContext {
  code: string,
  error: string
}

const Oauth: NextPage<OauthProps> = (props: OauthProps) => {
  console.log(props)
  const code = '2329203'

  const authCode: string = convertSliceToString(code || '');
  // const

  return authCode ? <DeepLinkDisplay code={authCode} /> : <Page404 />;
}

Oauth.getInitialProps = async (ctx: NextPageContext) => {
  const { code, error } = ctx.query;
  return { code, error };
}

export default Oauth;
