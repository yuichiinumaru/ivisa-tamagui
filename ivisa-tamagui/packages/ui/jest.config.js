/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
    preset: 'ts-jest/presets/js-with-ts',
    testEnvironment: 'jest-environment-jsdom',
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
    transform: {
        '^.+\\.tsx?$': ['ts-jest', {
            diagnostics: {
                ignoreCodes: [151001],
            },
            tsconfig: 'packages/ui/tsconfig.json'
        }],
    },
    transformIgnorePatterns: [
        'node_modules/(?!(tamagui|@tamagui|react-native|react-native-web|@react-native|react-native-reanimated)/)',
    ],
    moduleNameMapper: {
        '\\.(css|less|sass|scss)$': 'identity-obj-proxy',
        '^react-native$': 'react-native-web',
        '^@tamagui/(.*)': '<rootDir>/node_modules/@tamagui/$1',
    },
    // Fix: point to the correct setup file which exists
    setupFilesAfterEnv: ['<rootDir>/packages/ui/jest-setup.ts'],
    testMatch: [
        '<rootDir>/packages/ui/src/**/*.test.tsx'
    ],
    // IMPORTANT: Set rootDir to repo root so <rootDir> refs work
    rootDir: '../../',
};
