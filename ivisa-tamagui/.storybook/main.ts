import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { createRequire } from 'node:module';
import type { StorybookConfig } from '@storybook/react-vite';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const require = createRequire(import.meta.url);

const config: StorybookConfig = {
  stories: [
    '../packages/ui/src/**/*.mdx',
    '../packages/ui/src/**/*.stories.@(ts|tsx)'
  ],
  addons: [
    '@chromatic-com/storybook',
    '@storybook/addon-docs',
    '@storybook/addon-onboarding',
    '@storybook/addon-a11y',
    // '@storybook/addon-vitest'
  ],
  framework: {
    name: '@storybook/react-vite',
    options: {}
  },
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
      '@react-native/assets-registry/registry': path.resolve(__dirname, '../packages/ui/src/mocks/assets-registry.js'),
      'react-remove-scroll': require.resolve('react-remove-scroll'),
      '@react-native/normalize-colors': path.resolve(__dirname, '../packages/ui/src/mocks/normalize-colors.js'),
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