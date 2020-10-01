// @ts-check
const isDev = process.env.NODE_ENV === 'development';

module.exports = {
  pageExtensions: ['tsx', 'ts'],
  devIndicators: {
    autoPrerender: isDev,
    buildActivity: isDev
  },
  target: 'serverless'
};
