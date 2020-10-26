import React, { memo } from 'react';
import Head from 'next/head';

import type { SEOProps } from '../..';


const SEO: React.FC<SEOProps> = (props: SEOProps) => {
  const {
    title,
    keywords,
    description = 'Annie helps you share your favorite songs and playlists between music platforms.',
    url,
    imageUrl = 'https://res.cloudinary.com/anniemusic/image/upload/f_auto,q_auto/v1601396354/landing-page-assets/annie-logo_ruc0bw.png'
  } = props;
  const pageTitle = title ? `${title} | Annie` : 'Annie';

  return (
    <Head>
      <title>{pageTitle}</title>
      <meta name="keywords" content={keywords} />
      <meta name="description" content={description} />

      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={imageUrl} />

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
