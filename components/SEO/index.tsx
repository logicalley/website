import React, { memo, Fragment } from 'react';
import Head from 'next/head';
import getConfig from 'next/config';

import type { SEOProps } from '../..';

import { ANNIE_APPLE_STORE_ID, ANNIE_APPLE_STORE_URL } from '../../utils/constants';


const { publicRuntimeConfig } = getConfig();

const SEO: React.FC<SEOProps> = (props: SEOProps) => {
  const {
    title,
    keywords,
    description = 'Annie helps you share your favorite songs and playlists between music platforms.',
    url,
    imageUrl = 'https://res.cloudinary.com/anniemusic/image/upload/f_auto,q_auto/v1603713396/icons/annie-logo-white_g6obnp.png',
    previewUrl,
    resourceId
  } = props;
  const pageTitle = title || 'Annie';

  const activateAudioSEO = previewUrl && resourceId;
  //const twitterCardContent = activateAudioSEO ? 'player' : 'summary';
  const twitterCardContent = 'summary';

  return (
    <Head>
      <title>{pageTitle}</title>
      <meta name="keywords" content={keywords} />
      <meta name="description" content={description} />

      <meta property="google" content="notranslate" />

      <meta property="og:type" content="website.music.song" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:site_name" content="Annie Music" />

      <meta name="twitter:card" content={twitterCardContent} />
      <meta name="twitter:domain" content={url} />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:site" content="@anniemusicapp" />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:label1" content={pageTitle} />
      <meta name="twitter:data1" content={description} />

      <meta property="al:ios:app_name" content="Annie Music" />
      <meta property="al:ios:app_store_id" content={ANNIE_APPLE_STORE_ID} />

      <meta property="twitter:app:name:iphone" content="Annie Music" />
      <meta property="twitter:app:id:iphone" content={ANNIE_APPLE_STORE_ID} />
      <meta property="twitter:app:url:iphone" content={ANNIE_APPLE_STORE_URL} />

      <meta property="twitter:app:name:ipad" content="Annie Music" />
      <meta property="twitter:app:id:ipad" content={ANNIE_APPLE_STORE_ID} />
      <meta property="twitter:app:url:ipad" content={ANNIE_APPLE_STORE_URL} />

      {/* <meta property="twitter:app:name:googleplay" content="Annie Music" /> */}
      {/* <meta property="twitter:app:id:googleplay" content={ANNIE_APPLE_STORE_ID} /> */}
      {/* <meta property="twitter:app:url:googleplay" content={ANNIE_APPLE_STORE_URL} /> */}

      {(activateAudioSEO) ? (
        <Fragment>
          <meta property="og:audio" content={previewUrl} />
          <meta property="music:preview_url:type" content="audio/mpeg" />
          <meta property="og:audio:type" content="audio/mp3" />
          <meta property="music:preview_url:url" content={previewUrl} />
          <meta property="music:preview_url:secure_url" content={previewUrl} />
          <meta property="music:song:preview_url:secure_url" content={previewUrl} />
          {/* <meta property="twitter:player" content={`${publicRuntimeConfig.baseUrl}/t/${resourceId}/embed`} /> */}
          {/* <meta property="twitter:player:stream" content={previewUrl} /> */}
          <meta property="twitter:player:width" content="600" />
          <meta property="twitter:player:height" content="600" />
        </Fragment>
      ) : null}
    </Head>
  );
};

export default memo(SEO);
