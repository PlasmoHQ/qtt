/**
 * @type {import('@jest/types').Config.InitialOptions}
 */
const config = {
  clearMocks: true,
  moduleFileExtensions: ["js", "ts"],
  testMatch: ["**/*.test.ts"],
  verbose: true,
  transform: {
    "^.+.ts?$": ["ts-jest", { isolatedModules: true, useESM: true }]
  },
  moduleNameMapper: {
    "^~(.*)$": "<rootDir>/src/$1",
    "^(\\.{1,2}/.*)\\.js$": "$1"
  }
}
export default config
