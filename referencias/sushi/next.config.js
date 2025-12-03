// /** @type {import('next').NextConfig} */

// const { withTamagui } = require('@tamagui/next-plugin')

// // module.exports = withNextra()

// module.exports = function (name, { defaultConfig }) {
//   let config = {
//     ...defaultConfig,
//     // ...your configuration
//   }
//   const tamaguiPlugin = withTamagui({
//     config: './tamagui.config.ts',
//     components: ['tamagui'],
//   })
//   return {
//     ...config,
//     ...tamaguiPlugin(config),
//     ...withNextra(),
//   }
// }

/** @type {import('next').NextConfig} */
const { withTamagui } = require('@tamagui/next-plugin')
const { join } = require('path')
const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.tsx',
})

const boolVals = {
  true: true,
  false: false,
}

const disableExtraction =
  boolVals[process.env.DISABLE_EXTRACTION] ?? process.env.NODE_ENV === 'development'

const plugins = [
  withTamagui({
    components: ['tamagui'],
    importsWhitelist: ['constants.js', 'colors.js'],
    logTimings: true,
    disableExtraction,
    shouldExtract: (path) => {
      if (path.includes(join('packages', 'app'))) {
        return true
      }
    },
    excludeReactNativeWebExports: ['Switch', 'ProgressBar', 'Picker', 'CheckBox', 'Touchable'],
  }),
  withNextra
]

module.exports = function () {
  /** @type {import('next').NextConfig} */
  let config = {
    typescript: {
      ignoreBuildErrors: true,
    },
    modularizeImports: {
      '@tamagui/lucide-icons': {
        transform: `@tamagui/lucide-icons/dist/esm/icons/{{kebabCase member}}`,
        skipDefaultConversion: true,
      },
    },
    transpilePackages: [
      'react-native-web',
    ],
    experimental: {
      scrollRestoration: true,
    },
    images: {
      unoptimized: true
    }
  }

  for (const plugin of plugins) {
    config = {
      ...config,
      ...plugin(config),
    }
  }

  return config
}