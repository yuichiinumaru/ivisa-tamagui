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

    const createMemoryStorage = (source) => {
      const map = new Map()
      if (source && typeof source.length === 'number') {
        try {
          for (let i = 0; i < source.length; i++) {
            const key = source.key(i)
            if (key != null) {
              map.set(key, source.getItem(key))
            }
          }
        } catch (error) {}
      }
      return {
        get length() {
          return map.size
        },
        key(index) {
          return Array.from(map.keys())[index] ?? null
        },
        getItem(key) {
          return map.has(key) ? map.get(key) : null
        },
        setItem(key, value) {
          map.set(String(key), String(value))
        },
        removeItem(key) {
          map.delete(key)
        },
        clear() {
          map.clear()
        },
      }
    }

    const replaceStorage = (name) => {
      try {
        const fallback = createMemoryStorage(window[name])
        Object.defineProperty(window, name, {
          value: fallback,
          configurable: true,
        })
        if (typeof console !== 'undefined' && console.warn) {
          console.warn('[storybook] replaced ' + name + ' with in-memory storage to avoid quota errors')
        }
      } catch (error) {
        try {
          window[name] = createMemoryStorage()
        } catch (_) {}
      }
    }

    replaceStorage('localStorage')
    replaceStorage('sessionStorage')
  })()
</script>
`

const config: StorybookConfig = {
  stories: [
    '../packages/ui/src/**/*.mdx',
    '../packages/ui/src/**/*.stories.@(ts|tsx)'
  ],
  addons: [
    '@storybook/addon-docs',
    '@storybook/addon-a11y',
    // '@storybook/addon-vitest'
  ],
  framework: {
    name: '@storybook/react-vite',
    options: {}
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