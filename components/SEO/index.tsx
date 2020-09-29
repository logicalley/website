import React, { memo } from 'react';
import Head from 'next/head';

import type { SEOProps } from '../..';


const SEO: React.FC<SEOProps> = (props: SEOProps) => {
  const {
    title,
    keywords,
    description,
    url,
    imageUrl
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
      <meta name="twitter:image" content="https://www.bolaji.de/assets/avatar-card.png" />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:label1" content={pageTitle} />
      <meta name="twitter:data1" content={description} />
    </Head>
  );
}

export default memo(SEO);
