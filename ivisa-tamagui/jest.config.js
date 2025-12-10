/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jest-environment-jsdom',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  transform: {
    '^.+\\.tsx?$': ['ts-jest', {
      diagnostics: {
        ignoreCodes: [151001],
      },
      tsconfig: './packages/ui/tsconfig.json' // Ensure ts-jest uses the correct tsconfig
    }],
  },
  transformIgnorePatterns: [
    'node_modules/(?!(tamagui|@tamagui|react-native|react-native-web)/)',
  ],
  moduleNameMapper: {
    '\\.(css|less|sass|scss)$': 'identity-obj-proxy',
    '^react-native$': '<rootDir>/packages/ui/react-native-mock.js',
  },
  // Point to the setup file in the ui package
  setupFilesAfterEnv: ['<rootDir>/packages/ui/jest-setup.ts'],
  // Only run tests in the ui package
  testMatch: [
    '<rootDir>/packages/ui/src/**/*.test.tsx',
  ],
};
