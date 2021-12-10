// @ts-check
const isDev = process.env.NODE_ENV === 'development';
const COMMIT_REF = process.env.COMMIT_REF || 'r@nd0m';

module.exports = {
  webpack5: true,
  reactStrictMode: true,
  pageExtensions: ['tsx', 'ts'],
  devIndicators: {
    autoPrerender: isDev,
    buildActivity: isDev,
  },
  target: 'serverless',
  publicRuntimeConfig: {
    isDev,
    apiBaseUrl: process.env.ANNIE_API_BASE_URL,
    baseUrl: process.env.ANNIE_CLIENT_BASE_URL,
    sentryDsn: process.env.SENTRY_DSN,
    nonce: COMMIT_REF
  },
  poweredByHeader: false,
  eslint: {
    ignoreDuringBuilds: true
  },
  images: {
    domains: ['i.scdn.co']
  }
};
