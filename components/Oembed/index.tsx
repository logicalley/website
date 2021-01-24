import React from 'react';
import Head from 'next/head';

import type { OembedProps } from '../..';
import { OEMBED_BASE_URL } from '../../utils/constants';


const Oembed: React.FC<OembedProps> = ({ trackId, title, type }: OembedProps) => {
  let embedUrl: string = '';

  if (type === 'track') {
    const encodedTrackUrl: string = encodeURI(`https://anniemusic.app/t/${trackId}`);
    embedUrl = `${OEMBED_BASE_URL}?url=${encodedTrackUrl}`;
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
