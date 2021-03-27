const { createSecureHeaders } = require('next-secure-headers');
const SriPlugin = require('webpack-subresource-integrity');

// @ts-check
const isDev = process.env.NODE_ENV === 'development';

module.exports = {
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
            'localhost:5000/api/v1',
            'data:'
          ],
          styleSrc: ["'self'", "'unsafe-inline'", "'unsafe-eval'"],
          scriptSrc: ["'self'", "'unsafe-inline'", "'unsafe-eval'"],
          fontSrc: ["'self'"],
          imgSrc: [
            "'self'",
            'res.cloudinary.com',
            '*.scdn.co',
            '*.dzcdn.net',
            'data:image/png;base64',
            'data:'
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

    console.log(headers);
    return [{ source: '/(.*)', headers }];
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
