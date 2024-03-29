// @ts-check
// This file sets a custom webpack configuration to use your Next.js app
// with Sentry.
// https://nextjs.org/docs/api-reference/next.config.js/introduction
// https://docs.sentry.io/platforms/javascript/guides/nextjs/
const { withSentryConfig } = require('@sentry/nextjs');


const isDev = process.env.NODE_ENV === 'development';
const COMMIT_REF = process.env.COMMIT_REF || 'r@nd0m';

const moduleExports = {
  reactStrictMode: true,
  pageExtensions: ['tsx', 'ts'],
  devIndicators: {
    buildActivity: isDev,
  },
  publicRuntimeConfig: {
    isDev,
    apiBaseUrl: process.env.ANNIE_API_BASE_URL,
    baseUrl: process.env.ANNIE_CLIENT_BASE_URL,
    nonce: COMMIT_REF,
    mixpanelProjectToken: process.env.MIXPANEL_PROJECT_TOKEN || ''
  },
  poweredByHeader: false,
  eslint: {
    ignoreDuringBuilds: true
  }
};

const sentryWebpackPluginOptions = {
  // Additional config options for the Sentry Webpack plugin. Keep in mind that
  // the following options are set automatically, and overriding them is not
  // recommended:
  //   release, url, org, project, authToken, configFile, stripPrefix,
  //   urlPrefix, include, ignore

  silent: true, // Suppresses all logs
  // For all available options, see:
  // https://github.com/getsentry/sentry-webpack-plugin#options.
};

// Make sure adding Sentry options is the last code to run before exporting, to
// ensure that your source maps include changes from all other Webpack plugins
module.exports = withSentryConfig(moduleExports, sentryWebpackPluginOptions, {
  hideSourceMaps: true,
});
