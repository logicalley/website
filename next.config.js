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
  },
  env: {
    COMMIT_REF,
    NONCE: COMMIT_REF,
    ENV: process.env.NODE_ENV || 'development',
    BASE_URL: process.env.ANNIE_CLIENT_BASE_URL,
    API_BASE_URL: process.env.ANNIE_API_BASE_URL
  },
  poweredByHeader: false
};
