import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { createRequire } from 'node:module';
import type { StorybookConfig } from '@storybook/react-vite';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const require = createRequire(import.meta.url);

const quotaGuardScript = `
<script>
  ;(function () {
    if (typeof window === 'undefined') return

    const clearAll = async () => {
      try {
        localStorage.clear()
        sessionStorage.clear()
        
        // Clear Cookies
        document.cookie.split(";").forEach(function(c) { 
          document.cookie = c.replace(/^ +/, "").replace(/=.*/, "=;expires=" + new Date().toUTCString() + ";path=/"); 
        });

        // Clear IndexedDB
        if (window.indexedDB && window.indexedDB.databases) {
          const dbs = await window.indexedDB.databases()
          dbs.forEach(db => {
            if (db.name) window.indexedDB.deleteDatabase(db.name)
          })
        }

        // Clear Cache API
        if (window.caches) {
          const keys = await caches.keys()
          await Promise.all(keys.map(key => caches.delete(key)))
        }

        if (window.serviceWorker) {
          const registrations = await window.navigator.serviceWorker.getRegistrations()
          for (let registration of registrations) {
            await registration.unregister()
          }
        }

        console.warn('[storybook] cleared all storage to avoid quota errors')
      } catch (error) {
        console.error('[storybook] failed to clear storage', error)
      }
    }

    clearAll()
  })()
</script>
`

const config: StorybookConfig = {
  stories: [
    '../packages/ui/src/**/*.mdx',
    '../packages/ui/src/**/*.stories.@(ts|tsx)'
  ],
  addons: [
    {
      name: "@storybook/addon-essentials",
      options: {
        actions: false,
        docs: false,
      },
    },
    "@storybook/addon-a11y",
    "@chromatic-com/storybook",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  webpackFinal: async (config) => {
    if (config.output) {
      config.output.publicPath = "/";
    }
    return config;
  },
  managerHead: (head: string = '') => `${head}\n${quotaGuardScript}`,
  previewHead: (head: string = '') => `${head}\n${quotaGuardScript}`,
  viteFinal: async (config) => {
    const { tamaguiPlugin } = await import('@tamagui/vite-plugin')

    config.plugins ??= []
    config.plugins.push(
      tamaguiPlugin({
        config: './packages/ui/src/tamagui.config.ts',
        components: ['tamagui'],
        // themeBuilder: {
        //   input: './packages/ui/src/theme/themes.ts',
        //   output: './packages/ui/src/theme/themes-out.ts',
        // },
      })
    )

    config.resolve ??= {};
    config.resolve.alias = {
      ...config.resolve.alias,
      '@ivisa/ui': path.resolve(__dirname, '../packages/ui/src'),
      'react-native': 'react-native-web/dist/index',
      '@maplibre/maplibre-react-native': path.resolve(__dirname, '../packages/ui/src/mocks/maplibre-react-native.js'),
      'fs': path.resolve(__dirname, '../packages/ui/src/mocks/empty.js'),
      'stream': path.resolve(__dirname, '../packages/ui/src/mocks/empty.js'),
      'path': path.resolve(__dirname, '../packages/ui/src/mocks/empty.js'),
      'constants': path.resolve(__dirname, '../packages/ui/src/mocks/empty.js'),
      '@react-native/assets-registry/registry': path.resolve(__dirname, '../packages/ui/src/mocks/assets-registry.js'),
      'react-remove-scroll': require.resolve('react-remove-scroll'),
      '@react-native/normalize-colors': path.resolve(__dirname, '../packages/ui/src/mocks/normalize-colors.js'),
      'inline-style-prefixer/lib/plugins/crossFade.js': path.resolve(
        __dirname,
        '../packages/ui/src/mocks/inline-style-prefixer-crossFade.js',
      ),
      'inline-style-prefixer/lib/plugins/crossFade': path.resolve(
        __dirname,
        '../packages/ui/src/mocks/inline-style-prefixer-crossFade.js',
      ),
      'inline-style-prefixer/lib/createPrefixer.js': path.resolve(
        __dirname,
        '../packages/ui/src/mocks/inline-style-prefixer-createPrefixer.js',
      ),
      'inline-style-prefixer/lib/createPrefixer': path.resolve(
        __dirname,
        '../packages/ui/src/mocks/inline-style-prefixer-createPrefixer.js',
      ),
      'inline-style-prefixer': path.resolve(
        __dirname,
        '../packages/ui/src/mocks/inline-style-prefixer-index.js',
      ),
      'inline-style-prefixer/lib/plugins/imageSet.js': path.resolve(
        __dirname,
        '../packages/ui/src/mocks/inline-style-prefixer-imageSet.js',
      ),
      'inline-style-prefixer/lib/plugins/imageSet': path.resolve(
        __dirname,
        '../packages/ui/src/mocks/inline-style-prefixer-imageSet.js',
      ),
      'inline-style-prefixer/lib/plugins/logical': path.resolve(
        __dirname,
        '../packages/ui/src/mocks/inline-style-prefixer-logical.js',
      ),
      // Comprehensive mock for all plugins
      ...['calc', 'cursor', 'flex', 'flexboxIE', 'flexboxOld', 'gradient', 'grid', 'position', 'sizing', 'transition'].reduce((acc, plugin) => ({
        ...acc,
        [`inline-style-prefixer/lib/plugins/${plugin}.js`]: path.resolve(__dirname, '../packages/ui/src/mocks/inline-style-prefixer-mock.js'),
        [`inline-style-prefixer/lib/plugins/${plugin}`]: path.resolve(__dirname, '../packages/ui/src/mocks/inline-style-prefixer-mock.js'),
      }), {}),
    };

    config.define = {
      'process.env.TAMAGUI_TARGET': '"web"',
      global: 'window',
      setImmediate: 'setTimeout',
    };

    config.optimizeDeps ??= {};
    config.optimizeDeps.include = [
      ...(config.optimizeDeps.include || []),
      'tamagui',
      '@tamagui/core',
      'expo-av',
    ]
    config.optimizeDeps.exclude = [
      ...(config.optimizeDeps.exclude || []),
      'react-native-web',
      'victory-bar',
      'victory-box-plot',
      'victory-brush-container',
      'victory-brush-line',
      'victory-candlestick',
      'victory-canvas',
      'victory-chart',
      'victory-core',
      'victory-create-container',
      'victory-cursor-container',
      'victory-errorbar',
      'victory-group',
      'victory-histogram',
      'victory-legend',
      'victory-line',
      'victory-pie',
      'victory-polar-axis',
      'victory-scatter',
      'victory-selection-container',
      'victory-shared-events',
      'victory-stack',
      'victory-tooltip',
      'victory-voronoi-container',
      'victory-voronoi',
      'victory-zoom-container',
      'victory-area',
      'victory-axis',
      'react-native-web',
      'react-remove-scroll',
    ]

    config.optimizeDeps.esbuildOptions = {
      ...config.optimizeDeps.esbuildOptions,
      loader: {
        '.js': 'jsx',
      },
      // Tamagui recommends this
      resolveExtensions: ['.web.js', '.js', '.ts', '.tsx'],
    };

    return config;
  }
};

export default config;