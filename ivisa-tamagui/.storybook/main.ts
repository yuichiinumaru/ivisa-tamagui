import path from 'node:path';
import { fileURLToPath } from 'node:url';
import type { StorybookConfig } from '@storybook/react-vite';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

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
    '@storybook/addon-vitest'
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
      'react-native': 'react-native-web'
    };

    config.define = {
      'process.env': {},
      ...config.define,
    };

    config.optimizeDeps ??= {};
    config.optimizeDeps.include = [
      ...(config.optimizeDeps.include || []),
      'react-native-web',
      'tamagui',
      '@tamagui/core',
    ]
    config.optimizeDeps.esbuildOptions = {
      ...config.optimizeDeps.esbuildOptions,
      // Add this to support JSX in JS files for react-native-web
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