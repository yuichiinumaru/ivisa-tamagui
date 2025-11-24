import { createTamagui } from 'tamagui'

const headingFont = {
  family: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
  size: {
    '$1': 12,
    '$2': 14,
    '$3': 16,
    '$4': 18,
    '$5': 20,
    '$6': 24,
    '$7': 28,
    '$8': 32,
  },
  lineHeight: {
    '$1': 16,
    '$2': 18,
    '$3': 20,
    '$4': 22,
    '$5': 24,
    '$6': 28,
    '$7': 32,
    '$8': 36,
  },
  weight: {
    '$1': '400',
    '$2': '500',
    '$3': '600',
    '$4': '700',
  },
} as const

const bodyFont = {
  family: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
  size: {
    '$1': 12,
    '$2': 13,
    '$3': 14,
    '$4': 16,
    '$5': 18,
    '$6': 20,
  },
  lineHeight: {
    '$1': 16,
    '$2': 18,
    '$3': 20,
    '$4': 24,
    '$5': 26,
    '$6': 28,
  },
  weight: {
    '$1': '400',
    '$2': '500',
    '$3': '600',
  },
} as const

export const shadcnColorTokens = {
  background: '0 0% 100%',
  foreground: '222.2 47.4% 11.2%',
  muted: '210 40% 96.1%',
  mutedForeground: '215.4 16.3% 46.9%',
  borderColor: '214.3 31.8% 91.4%',
  input: '214.3 31.8% 91.4%',
  ring: '215 20.2% 65.1%',
  primary: '222.2 47.4% 11.2%',
  primaryHover: '222.2 47.4% 20%',
  primaryForeground: '210 40% 98%',
  secondary: '210 40% 96.1%',
  secondaryHover: '210 40% 92%',
  secondaryForeground: '222.2 47.4% 11.2%',
  destructive: '0 100% 50%',
  destructiveForeground: '210 40% 98%',
  accent: '210 40% 96.1%',
  success: '#16a34a',
  warning: '#d97706',
  info: '#0284c7',
  popover: '0 0% 100%',
  popoverForeground: '222.2 47.4% 11.2%',
  card: '0 0% 100%',
  cardForeground: '222.2 47.4% 11.2%',
} as const

export const shadcnRadiusTokens = {
  '$0': 0,
  '$1': 2,
  '$2': 4,
  '$3': 6,
  '$4': 8,
  '$5': 12,
  '$6': 16,
  '$7': 20,
  '$8': 999,
} as const

const sizeTokens = {
  '$1': 4,
  '$2': 8,
  '$3': 12,
  '$4': 16,
  '$5': 20,
  '$6': 24,
  '$7': 32,
  '$8': 40,
  '$9': 48,
  '$10': 56,
}

const spaceTokens = {
  '$0': 0,
  '$1': 4,
  '$2': 8,
  '$3': 12,
  '$4': 16,
  '$5': 20,
  '$6': 24,
  '$7': 32,
  '$8': 40,
  '$9': 48,
  '$10': 56,
  '$11': 64,
}

const media = {
  xs: { maxWidth: 480 },
  sm: { maxWidth: 640 },
  md: { maxWidth: 768 },
  lg: { maxWidth: 1024 },
  xl: { maxWidth: 1280 },
}

export const shadcnLightTheme = {
  background: '0 0% 100%',
  foreground: '222.2 47.4% 11.2%',
  muted: '210 40% 96.1%',
  mutedForeground: '215.4 16.3% 46.9%',
  borderColor: '214.3 31.8% 91.4%',
  input: '214.3 31.8% 91.4%',
  ring: '215 20.2% 65.1%',
  primary: '222.2 47.4% 11.2%',
  primaryHover: '222.2 47.4% 20%',
  primaryForeground: '210 40% 98%',
  secondary: '210 40% 96.1%',
  secondaryHover: '210 40% 92%',
  secondaryForeground: '222.2 47.4% 11.2%',
  destructive: '0 100% 50%',
  destructiveForeground: '210 40% 98%',
  accent: '210 40% 96.1%',
  success: '#16a34a',
  warning: '#d97706',
  info: '#0284c7',
  popover: '0 0% 100%',
  popoverForeground: '222.2 47.4% 11.2%',
  card: '0 0% 100%',
  cardForeground: '222.2 47.4% 11.2%',
} as const

export const shadcnDarkTheme = {
  background: '224 71% 4%',
  foreground: '213 31% 91%',
  muted: '223 47% 11%',
  mutedForeground: '215.4 16.3% 56.9%',
  borderColor: '216 34% 17%',
  input: '216 34% 17%',
  ring: '216 34% 17%',
  primary: '210 40% 98%',
  primaryHover: '210 40% 90%',
  primaryForeground: '222.2 47.4% 1.2%',
  secondary: '222.2 47.4% 11.2%',
  secondaryHover: '222.2 47.4% 15%',
  secondaryForeground: '210 40% 98%',
  destructive: '0 63% 31%',
  destructiveForeground: '210 40% 98%',
  accent: '216 34% 17%',
  success: '#22c55e',
  warning: '#d97706',
  info: '#0284c7',
  popover: '224 71% 4%',
  popoverForeground: '215 20.2% 65.1%',
  card: '224 71% 4%',
  cardForeground: '213 31% 91%',
} as const

export const tamaguiConfig = createTamagui({
  fonts: {
    heading: headingFont,
    body: bodyFont,
  },
  tokens: {
    color: shadcnColorTokens,
    radius: shadcnRadiusTokens,
    size: sizeTokens,
    space: spaceTokens,
  },
  themes: {
    light: shadcnLightTheme,
    dark: shadcnDarkTheme,
  },
  media,
})

export type TamaguiConfig = typeof tamaguiConfig
export type ThemeName = keyof typeof tamaguiConfig.themes
