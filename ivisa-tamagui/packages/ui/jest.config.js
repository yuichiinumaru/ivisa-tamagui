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
        }],
    },
    transformIgnorePatterns: [
        'node_modules/(?!(tamagui|@tamagui|react-native|react-native-web)/)',
    ],
    moduleNameMapper: {
        '\\.(css|less|sass|scss)$': 'identity-obj-proxy',
        '^react-native$': '<rootDir>/react-native-mock.js',
    },
    setupFilesAfterEnv: ['<rootDir>/jest-setup.ts'],
};
