import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'
import { tamaguiPlugin } from '@tamagui/vite-plugin'
import path from 'path'

export default defineConfig({
  plugins: [
    react(),
    tamaguiPlugin({
      config: './packages/ui/src/tamagui.config.ts',
      components: ['tamagui'],
    }),
  ],
  test: {
    environment: 'happy-dom',
    include: ['**/*.test.{ts,tsx}'],
    exclude: ['**/node_modules/**', '**/dist/**'],
    globals: true,
  },
  resolve: {
    alias: {
      '@ivisa/ui': path.resolve(__dirname, './packages/ui/src'),
      'react-native': 'react-native-web',
    },
  },
})
