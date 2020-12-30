import React from 'react';
import Head from 'next/head';
import getConfig from 'next/config';

import type { OembedProps } from '../..';


const { publicRuntimeConfig } = getConfig();

const Oembed: React.FC<OembedProps> = ({ trackId, title, type }: OembedProps) => {
  let embedUrl: string = '';

  if (type === 'track') {
    embedUrl = `${publicRuntimeConfig.apiBaseUrl}/track/${trackId}/oembed`;
  }

  return (
    <Head>
      <link
        rel="alternate"
        type="application/json+oembed"
        href={embedUrl}
        title={title}
      />
    </Head>
  );
}

export default Oembed;
