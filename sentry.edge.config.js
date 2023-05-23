import * as Sentry from '@sentry/nextjs';

const SENTRY_DSN = process.env.SENTRY_DSN || process.env.NEXT_PUBLIC_SENTRY_DSN;

Sentry.init({
  dsn: SENTRY_DSN || 'https://d590e3908b7145519a27de0d668b1f8f@o461629.ingest.sentry.io/6101260',
  // Adjust this value in production, or use tracesSampler for greater control
  tracesSampleRate: 0.3,
  enabled: process.env.NODE_ENV !== 'development',
  // ...
  // Note: if you want to override the automatic release value, do not set a
  // `release` value here - use the environment variable `SENTRY_RELEASE`, so
  // that it will also get attached to your source maps
});
