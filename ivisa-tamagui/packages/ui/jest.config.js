
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
            tsconfig: 'tsconfig.json'
        }],
    },
    transformIgnorePatterns: [
        'node_modules/(?!(tamagui|@tamagui|react-native|react-native-web|@react-native|react-native-reanimated|victory-native|victory-.*)/)',
    ],
    moduleNameMapper: {
        '\\.(css|less|sass|scss)$': 'identity-obj-proxy',
        '^react-native$': 'react-native-web',
    },
    setupFilesAfterEnv: ['<rootDir>/jest-setup.ts'],
    testMatch: [
        '<rootDir>/src/**/*.test.tsx'
    ],
};
