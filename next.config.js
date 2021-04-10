const { createSecureHeaders } = require('next-secure-headers');
const SriPlugin = require('webpack-subresource-integrity');
const  { randomBytes } = require('crypto');

// @ts-check
const isDev = process.env.NODE_ENV === 'development';
const COMMIT_REF = process.env.COMMIT_REF || 'r@nd0m';

module.exports = {
  future: {
    webpack5: false,
  },
  // reactStrictMode: isDev,
  pageExtensions: ['tsx', 'ts'],
  devIndicators: {
    autoPrerender: isDev,
    buildActivity: isDev
  },
  target: 'serverless',
  publicRuntimeConfig: {
    isDev,
    apiBaseUrl: process.env.ANNIE_API_BASE_URL
  },
  async headers() {
    const headers = createSecureHeaders({
      contentSecurityPolicy: {
        reportOnly: true,
        directives: {
          defaultSrc: [
            "'self'",
            '*.dzcdn.net',
            'api.anniemusic.app',
            // 'googletagmanager.com',
            'https://www.google-analytics.com'
          ],
          styleSrc: ["'self'", `'nonce-${COMMIT_REF}'`],
          scriptSrc: ["'self'", `'nonce-${COMMIT_REF}'`],
          objectSrc: ["'none'"],
          fontSrc: ["'self'"],
          baseURI: ["'self'"],
          imgSrc: [
            "'self'",
            'res.cloudinary.com',
            '*.scdn.co',
            '*.dzcdn.net',
          ],
          frameSrc: ['airtable.com'],
          reportURI: `${process.env.ANNIE_API_BASE_URL}/complaint/csp`,
          frameAncestors: ['airtable.com']
        },
      },
      forceHTTPSRedirect: [
        true,
        {
          maxAge: 60 * 60 * 24 * 4,
          includeSubDomains: true
        }
      ],
      referrerPolicy: 'same-origin',
      frameGuard: false,
      xssProtection: 'block-rendering'
    });

    return [{ source: '/(.*)', headers }];
  },
  env: {
    COMMIT_REF,
    NONCE: COMMIT_REF,
    ENV: process.env.NODE_ENV || 'development'
  },
  poweredByHeader: false,
  webpack: (config) => {
    config.output.crossOriginLoading = 'anonymous';
    config.plugins.push(
      new SriPlugin({
        hashFuncNames: ['sha256', 'sha384'],
        enabled: false,
      })
    );

    return config;
  },
};
