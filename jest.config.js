/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */

module.exports = {
  preset: 'ts-jest/presets/js-with-babel',
  testEnvironment: 'jsdom',
  testRegex: "spec\\.tsx?$",
  setupFilesAfterEnv: [
    "@testing-library/jest-dom/extend-expect",
    "<rootDir>/jest.setup.js"
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
