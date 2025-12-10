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
        }],
    },
    transformIgnorePatterns: [
        'node_modules/(?!(tamagui|@tamagui|react-native|react-native-web)/)',
    ],
    moduleNameMapper: {
        '\\.(css|less|sass|scss)$': 'identity-obj-proxy',
        // Adjust paths to be relative to the new rootDir
        '^react-native$': '<rootDir>/packages/ui/react-native-mock.js',
    },
    setupFilesAfterEnv: ['<rootDir>/packages/ui/jest-setup.ts'],
    // Add testMatch to find tests in the ui package, relative to the new rootDir
    testMatch: [
        '<rootDir>/packages/ui/src/**/*.test.tsx'
    ]
};
