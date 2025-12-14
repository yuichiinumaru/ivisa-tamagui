const path = require('path');
const Module = require('module');
const { fileURLToPath } = require('url');

// EVIL SHIM: Storybook 8.x + Yarn PnP/Workspaces sometimes passes file:// URLs to require()
// which fails in CJS. We intercept and convert them to paths.
const originalRequire = Module.prototype.require;
Module.prototype.require = function (id) {
    if (typeof id === 'string' && id.startsWith('file://')) {
        try {
            id = fileURLToPath(id);
        } catch (_e) {
            // ignore
        }
    }
    return originalRequire.call(this, id);
};

/** @type { import('@storybook/react-webpack5').StorybookConfig } */
const config = {
    stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
    addons: [
        '@storybook/addon-links',
        {
            name: '@storybook/addon-essentials',
            options: {},
        },
        '@storybook/addon-interactions',
        '@storybook/addon-webpack5-compiler-swc',
    ],
    framework: {
        name: '@storybook/react-webpack5',
        options: {},
    },
    docs: {
        autodocs: false,
    },
    staticDirs: ['../public', '../src/assets'],
    webpackFinal: async (config) => {
        if (!config.resolve) config.resolve = {};
        if (!config.module) config.module = { rules: [] };

        // Resolve Tamagui config
        const tamaguiConfigPath = path.resolve(__dirname, '../src/tamagui.config.ts');

        // Add tamagui-loader
        config.module.rules.push({
            test: /\.[jt]sx?$/,
            exclude: /node_modules/,
            use: [
                {
                    loader: 'tamagui-loader',
                    options: {
                        config: tamaguiConfigPath,
                        components: ['tamagui'],
                        importsWhitelist: ['constants.js', 'colors.js'],
                        logTimings: true,
                        disableExtraction: process.env.NODE_ENV === 'development',
                    },
                },
            ],
        });

        config.resolve.alias = {
            ...(config.resolve.alias || {}),
            'react-native$': 'react-native-web',
            // Fix for Tamagui config resolution
            '../../tamagui.config': tamaguiConfigPath,
            '../tamagui.config': tamaguiConfigPath,
            './tamagui.config': tamaguiConfigPath,
            // Optimization: Alias @ivisa/ui to source
            '@ivisa/ui': path.resolve(__dirname, '../src'),
            'tamagui.config': tamaguiConfigPath,
            'tamagui.config.cjs': tamaguiConfigPath,
            'tamagui.config.js': tamaguiConfigPath,
            'tamagui/config': tamaguiConfigPath,
            'tamagui/config.cjs': tamaguiConfigPath,
            'tamagui/config.js': tamaguiConfigPath,
            '@tamagui/config': tamaguiConfigPath,
            '@tamagui/config.cjs': tamaguiConfigPath,
            '@tamagui/config.js': tamaguiConfigPath,
            'tamagui': path.resolve(__dirname, '../../../node_modules/tamagui'),
        };

        config.resolve.fallback = {
            ...config.resolve.fallback,
            fs: false,
            stream: false,
            constants: false,
            path: false,
        };

        // Log extensions to debug
        console.log('ANTIGRAVITY: Existing extensions:', config.resolve.extensions);

        // Prepend extensions to ensure TS is picked up first
        config.resolve.extensions = [
            '.web.ts',
            '.web.tsx',
            '.web.js',
            '.web.jsx',
            '.ts',
            '.tsx',
            '.js',
            '.jsx',
            '.json',
            '.cjs',
            '.mjs',
            ...(config.resolve.extensions || []),
        ];
        console.log('ANTIGRAVITY: Final extensions:', config.resolve.extensions);

        // Ensure webpack looks in root node_modules
        config.resolve.modules = [
            path.resolve(__dirname, '../../node_modules'), // package node_modules
            path.resolve(__dirname, '../../../node_modules'), // root node_modules
            'node_modules'
        ];

        // Ensure webpack looks in root node_modules
        config.resolve.modules = [
            path.resolve(__dirname, '../../node_modules'), // package node_modules
            path.resolve(__dirname, '../../../node_modules'), // root node_modules
            'node_modules'
        ];

        // ANTIGRAVITY FIX: Aliases for React Native internals to Web equivalents
        config.resolve.alias = {
            ...config.resolve.alias,
            'react-native/Libraries/Utilities/codegenNativeComponent': path.resolve(__dirname, '../src/mocks/codegenNativeComponent.js'),
            '@react-native/assets-registry/registry': 'react-native-web/dist/modules/AssetRegistry',
            'react-native/assets-registry/registry': 'react-native-web/dist/modules/AssetRegistry',
            '@react-native/normalize-color': 'react-native-web/dist/modules/normalizeColor',
            'react-native/Libraries/Image/AssetRegistry': 'react-native-web/dist/modules/AssetRegistry', // Fallback
            'react-native/Libraries/Image/AssetRegistry': 'react-native-web/dist/modules/AssetRegistry', // Fallback
            'victory-native': path.resolve(__dirname, '../src/mocks/victory-native.js'),
        };

        // ANTIGRAVITY FIX: Inject React to solve "ReferenceError: React is not defined" in Storybook stories
        config.plugins = config.plugins || [];
        const webpack = require('webpack');
        config.plugins.push(
            new webpack.ProvidePlugin({
                React: 'react',
            })
        );

        return config;
    },
};

module.exports = config;
