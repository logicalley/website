/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */

const config = {
  preset: 'ts-jest/presets/js-with-babel',
  testEnvironment: 'jsdom',
  testRegex: "spec\\.tsx?$",
  setupFilesAfterEnv: [
    "<rootDir>/jest.setup.ts"
  ],
  testPathIgnorePatterns: [
    "<rootDir>/.next/",
    "<rootDir>/node_modules/",
    "<rootDir>/public/"
  ],
  clearMocks: true,
  globals: {
    "ts-jest": {
      tsconfig: "tsconfig.jest.json"
    }
  },
  moduleNameMapper: {
    "^.+\\.(css|less|scss|svg)$": "babel-jest"
  }
};

export default config;
