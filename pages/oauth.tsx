import React from 'react';
import { useRouter } from 'next/router';
import { convertSliceToString } from '@bolajiolajide/utils';

import DeepLinkDisplay from '../components/DeepLinkDisplay';
import Page404 from '../components/404Page';

const Oauth: React.FC = () => {
  const router = useRouter();
  const { code } = router.query;

  const authCode: string = convertSliceToString(code || '');

  return authCode ? <DeepLinkDisplay code={authCode} /> : <Page404 />;
}

export default Oauth;
