import React, { memo } from 'react';
import Head from 'next/head';

import type { SEOProps } from '../..';


const SEO: React.FC<SEOProps> = (props: SEOProps) => {
  const {
    title,
    keywords,
    description = 'Annie helps you share your favorite songs and playlists between music platforms.',
    url,
    imageUrl = 'https://res.cloudinary.com/anniemusic/image/upload/f_auto,q_auto/v1603713396/icons/annie-logo-white_g6obnp.png'
  } = props;
  const pageTitle = title || 'Annie';

  return (
    <Head>
      <title>{pageTitle}</title>
      <meta name="keywordes" content={keywords} />
      <meta name="description" content={description} />

      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:site_name" content="https://anniemusic.app" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:domain" content={url} />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:label1" content={pageTitle} />
      <meta name="twitter:data1" content={description} />
    </Head>
  );
}

export default memo(SEO);
