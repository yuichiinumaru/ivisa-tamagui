import { describe, expect, it } from 'vitest'
import {
  shadcnColorTokens,
  shadcnDarkTheme,
  shadcnLightTheme,
  shadcnRadiusTokens,
} from '../../src/tamagui.config'

describe('shadcn Tamagui configuration constants', () => {
  it('defines shadcn color tokens matching root theme', () => {
    expect(shadcnColorTokens).toEqual({
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
    })
  })

  it('defines shadcn light theme values', () => {
    expect(shadcnLightTheme).toEqual({
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
    })
  })

  it('defines shadcn dark theme values', () => {
    expect(shadcnDarkTheme).toEqual({
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
    })
  })

  it('defines shadcn radius scale', () => {
    expect(shadcnRadiusTokens).toEqual({
      '$0': 0,
      '$1': 2,
      '$2': 4,
      '$3': 6,
      '$4': 8,
      '$5': 12,
      '$6': 16,
      '$7': 20,
      '$8': 999,
    })
  })
})
