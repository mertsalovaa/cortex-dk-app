export { };
module.exports = {
    collectCoverage: true,
    collectCoverageFrom: ['src/**/*.{ts,tsx}', '!src/**/*.d.ts',
      '!**/vendor/**'],
    coverageDirectory: 'coverage',
    testEnvironment: 'jsdom',
    transform: {
      ".(ts|tsx)": "ts-jest"
    },
    
    coveragePathIgnorePatterns: [
      "/node_modules/",      
      "/coverage",
      "package.json",
      "yarn.lock",
      "reportWebVitals.ts",
      "setupTests.ts",
      "index.tsx"
    ],

    setupFilesAfterEnv: ['<rootDir>/setupTests.ts'],
    moduleDirectories: ["node_modules", "<rootDir>/src"],
  }