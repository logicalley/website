/** @jest-environment node */

// DO NOT MOCK FETCH
// https://kentcdodds.com/blog/stop-mocking-fetch
jest.mock('next/config', () => () => ({
  publicRuntimeConfig: {
    isDev: false
  }
}));

export {};
