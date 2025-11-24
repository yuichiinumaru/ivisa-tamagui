import { createTamagui } from '@tamagui/core'
import { createFont } from '@tamagui/font'

const headingFont = createFont({
  family: 'Inter, system-ui, sans-serif',
  size: {
    '$1': 11,
    '$2': 12,
    '$3': 14,
    '$4': 16,
    '$5': 20,
    '$6': 24,
    '$7': 30,
    '$8': 36,
  },
  lineHeight: {
    '$1': 13,
    '$2': 15,
    '$3': 17,
    '$4': 19,
    '$5': 23,
    '$6': 28,
  },
  weight: {
    '$1': '400',
    '$2': '500',
    '$3': '600',
  },
})

const bodyFont = createFont({
  family: 'Inter, system-ui, sans-serif',
  size: {
    '$1': 11,
    '$2': 12,
    '$3': 13,
    '$4': 14,
    '$5': 15,
    '$6': 16,
    '$7': 18,
    '$8': 20,
  },
  lineHeight: {
    '$1': 13,
    '$2': 15,
    '$3': 18,
    '$4': 20,
    '$5': 23,
    '$6': 25,
  },
  weight: {
    '$1': '400',
    '$2': '500',
  },
})

export const tamaguiConfig = createTamagui({
  fonts: {
    heading: headingFont,
    body: bodyFont,
  },
  tokens: {
    color: {
      background: '#0a0a0a',
      foreground: '#fafafa',
      primary: '#3b82f6',
      primaryHover: '#2563eb',
      secondary: '#64748b',
      secondaryHover: '#475569',
      muted: '#18181b',
      accent: '#22d3ee',
      destructive: '#ef4444',
      borderColor: '#27272a',
      input: '#27272a',
      ring: '#3b82f6',
    },
    radius: {
      '$0': 0,
      '$1': 2,
      '$2': 4,
      '$3': 6,
      '$4': 8,
      '$5': 12,
      '$6': 16,
      '$7': 20,
      '$8': 24,
    },
    size: {
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
    },
    space: {
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
      '$12': 72,
    },
  },
  media: {
    sm: { maxWidth: 640 },
    md: { maxWidth: 768 },
    lg: { maxWidth: 1024 },
    xl: { maxWidth: 1280 },
  },
  themes: {
    light: {
      background: '#ffffff',
      foreground: '#0a0a0a',
      primary: '#3b82f6',
      primaryHover: '#2563eb',
      secondary: '#64748b',
      secondaryHover: '#475569',
      muted: '#f4f4f5',
      accent: '#22d3ee',
      destructive: '#ef4444',
      borderColor: '#e4e4e7',
      input: '#e4e4e7',
      ring: '#3b82f6',
    },
  },
})

export type TamaguiConfig = typeof tamaguiConfig
