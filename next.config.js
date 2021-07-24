// @ts-check
const isDev = process.env.NODE_ENV === 'development';
const COMMIT_REF = process.env.COMMIT_REF || 'r@nd0m';
console.log(process.env.ANNIE_API_BASE_URL);
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
    apiBaseUrl: 'http://localhost:5000/api/v1',
  },
  env: {
    COMMIT_REF,
    NONCE: COMMIT_REF,
    ENV: process.env.NODE_ENV || 'development',
  },
  poweredByHeader: false
};
