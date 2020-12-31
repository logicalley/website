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
};
