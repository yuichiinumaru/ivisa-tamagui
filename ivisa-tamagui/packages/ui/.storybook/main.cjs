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
  staticDirs: ['../public'],
  addons: [
    '@storybook/addon-links',
    {
      name: '@storybook/addon-essentials',
      options: {
        actions: false,
      },
    },
    '@storybook/addon-interactions',
    '@storybook/addon-webpack5-compiler-swc',
  ],
  framework: {
    name: '@storybook/react-webpack5',
    options: {},
  },
  managerHead: (head) => `
        ${head}
        <script>
          ;(function () {
            if (typeof window === 'undefined') return
            const clearAll = async () => {
              try {
                localStorage.clear()
                sessionStorage.clear()
                if (window.indexedDB && window.indexedDB.databases) {
                  const dbs = await window.indexedDB.databases()
                  dbs.forEach(db => { if (db.name) window.indexedDB.deleteDatabase(db.name) })
                }
                if (window.caches) {
                  const keys = await caches.keys()
                  await Promise.all(keys.map(key => caches.delete(key)))
                }
                console.warn('[storybook] cleared all storage')
              } catch (e) {}
            }
            clearAll()
          })()
        </script>
    `,
  previewHead: (head) => `
        ${head}
        <script>
          ;(function () {
            if (typeof window === 'undefined') return
            const clearAll = async () => {
              try {
                localStorage.clear()
                sessionStorage.clear()
                if (window.indexedDB && window.indexedDB.databases) {
                  const dbs = await window.indexedDB.databases()
                  dbs.forEach(db => { if (db.name) window.indexedDB.deleteDatabase(db.name) })
                }
                if (window.caches) {
                  const keys = await caches.keys()
                  await Promise.all(keys.map(key => caches.delete(key)))
                }
              } catch (e) {}
            }
            clearAll()
          })()
        </script>
    `,
  docs: {
    autodocs: false,
  },
  webpackFinal: async (config) => {
    if (!config.resolve) config.resolve = {};
    if (!config.module) config.module = { rules: [] };

    // Fix for module resolution in monorepo — prefer workspace node_modules first
    const workspaceNodeModules = path.resolve(__dirname, '../../node_modules');
    config.resolve.modules = [
      workspaceNodeModules,
      ...(config.resolve.modules || []),
      'node_modules',
    ];

    config.resolve.extensions = [
      '.web.js',
      '.web.jsx',
      '.web.ts',
      '.web.tsx',
      ...(config.resolve.extensions || []),
    ];

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
      'tamagui.config': tamaguiConfigPath,
      '@tamagui/config': tamaguiConfigPath,

        // Force all Tamagui packages to resolve to the workspace node_modules
        // This prevents duplicate Tamagui instances at runtime which break
        // theme/animations detection in Storybook.
        // We use the `workspaceNodeModules` computed above so aliases remain
        // correct regardless of where the workspace lives on disk.
        'tamagui': (function(){ try { return require.resolve('tamagui', { paths: [workspaceNodeModules] }) } catch(e){ return path.resolve(workspaceNodeModules, 'tamagui') } })(),
        '@tamagui/core': (function(){ try { return require.resolve('@tamagui/core', { paths: [workspaceNodeModules] }) } catch(e){ return path.resolve(workspaceNodeModules, '@tamagui', 'core') } })(),
        '@tamagui/web': (function(){ try { return require.resolve('@tamagui/web', { paths: [workspaceNodeModules] }) } catch(e){ return path.resolve(workspaceNodeModules, '@tamagui', 'web') } })(),
        '@tamagui/animations-react-native': (function(){ try { return require.resolve('@tamagui/animations-react-native', { paths: [workspaceNodeModules] }) } catch(e){ return path.resolve(workspaceNodeModules, '@tamagui', 'animations-react-native') } })(),
        '@tamagui/sheet': (function(){ try { return require.resolve('@tamagui/sheet', { paths: [workspaceNodeModules] }) } catch(e){ return path.resolve(workspaceNodeModules, '@tamagui', 'sheet') } })(),
        '@tamagui/portal': (function(){ try { return require.resolve('@tamagui/portal', { paths: [workspaceNodeModules] }) } catch(e){ return path.resolve(workspaceNodeModules, '@tamagui', 'portal') } })(),
        '@tamagui/lucide-icons': (function(){ try { return require.resolve('@tamagui/lucide-icons', { paths: [workspaceNodeModules] }) } catch(e){ return path.resolve(workspaceNodeModules, '@tamagui', 'lucide-icons') } })(),
        '@tamagui/theme-builder': (function(){ try { return require.resolve('@tamagui/theme-builder', { paths: [workspaceNodeModules] }) } catch(e){ return path.resolve(workspaceNodeModules, '@tamagui', 'theme-builder') } })(),
        '@tamagui/adapt': (function(){ try { return require.resolve('@tamagui/adapt', { paths: [workspaceNodeModules] }) } catch(e){ return path.resolve(workspaceNodeModules, '@tamagui', 'adapt') } })(),

      // Optimization: Alias @ivisa/ui to source
      '@ivisa/ui': path.resolve(__dirname, '../src'),

      // Map Mock
      '@maplibre/maplibre-react-native': path.resolve(__dirname, '../src/mocks/maplibre-react-native.js'),
      // React Native Helpers
      'react-native/Libraries/Utilities/codegenNativeComponent': path.resolve(__dirname, '../src/mocks/codegenNativeComponent.js'),
      'victory-native': path.resolve(__dirname, '../src/mocks/victory-native.js'),
    };

    // Fix for HMR 404 errors - removed manual '/' to avoid double-slashes
    // if (config.output) {
    //   config.output.publicPath = '/';
    // }

    // ANTIGRAVITY FIX: Inject React to solve "ReferenceError: React is not defined" in Storybook stories
    config.plugins = config.plugins || [];
    const webpack = require('webpack');
    config.plugins.push(
      new webpack.ProvidePlugin({
        React: 'react',
      }),
      new webpack.NormalModuleReplacementPlugin(
        /@maplibre\/maplibre-react-native/,
        path.resolve(__dirname, '../src/mocks/maplibre-react-native.js')
      )
    );

    config.output = {
      ...config.output,
    };

    return config;
  },
};

module.exports = config;
// Force rebuild: 2026-01-07T21:10:00Z
