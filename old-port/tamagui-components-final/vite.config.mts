/// <reference types="vitest" />
import { defineConfig } from 'vite'
import { tamaguiPlugin } from '@tamagui/vite-plugin'
import react from '@vitejs/plugin-react-swc'
import path from 'path'

const TAMAGUI_PACKAGES = [
  'tamagui',
  '@tamagui/adapt',
  '@tamagui/animate-presence',
  '@tamagui/core',
  '@tamagui/helpers',
  '@tamagui/portal',
  '@tamagui/radio-group',
  '@tamagui/tooltip',
  '@tamagui/web',
  '@tamagui/lucide-icons',
]

export default defineConfig(async ({ mode }: { mode: string }) => {
  const isTest = mode === 'test' || !!process.env.VITEST

  return {
    plugins: [
      react(),
      tamaguiPlugin({
        components: ['tamagui'],
        config: 'src/tamagui.config.ts',
        disableExtraction: isTest,
      }),
    ],
    test: {
      globals: true,
      environment: 'jsdom',
      setupFiles: ['./tests/setup.ts', './vitest.setup.tsx'],
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
        'react-native': 'react-native-web',
      },
    },
    optimizeDeps: {
      include: [...TAMAGUI_PACKAGES, 'react-native-web'],
    },
    ssr: {
      noExternal: TAMAGUI_PACKAGES,
    },
  }
})
