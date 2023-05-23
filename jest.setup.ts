/** @jest-environment node */
import '@testing-library/jest-dom/extend-expect';

// DO NOT MOCK FETCH
// https://kentcdodds.com/blog/stop-mocking-fetch
jest.mock('next/config', () => () => ({
  publicRuntimeConfig: {
    isDev: false
  }
}));

export {};
