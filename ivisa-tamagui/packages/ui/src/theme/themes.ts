// @ts-nocheck
import { createThemes, defaultComponentThemes } from '@tamagui/theme-builder'
import * as Colors from '@tamagui/colors'

const darkPalette = [
  'hsla(208, 72%, 8%, 1)',
  'hsla(206, 74%, 16%, 1)',
  'hsla(205, 77%, 25%, 1)',
  'hsla(204, 79%, 33%, 1)',
  'hsla(203, 82%, 41%, 1)',
  'hsla(201, 85%, 50%, 1)',
  'hsla(200, 87%, 58%, 1)',
  'hsla(199, 90%, 67%, 1)',
  'hsla(198, 92%, 75%, 1)',
  'hsla(196, 95%, 83%, 1)',
  'hsla(195, 97%, 92%, 1)',
  'hsla(194, 100%, 100%, 1)',
]

const ivisaColors = {
  primary: {
    50: '#EEF8FF',
    100: '#DCF1FF',
    200: '#B2E5FF',
    300: '#6DD1FF',
    400: '#20BAFF',
    500: '#00A1FF',
    600: '#0080DF',
    700: '#0065B4',
    800: '#005694',
    900: '#004A80',
    950: '#002D51',
  },
  secondary: {
    50: '#F1F8FA',
    100: '#C5FFF9',
    200: '#8BFFF5',
    300: '#49FFEF',
    400: '#14EDE1',
    500: '#00D1C8',
    600: '#00A9A4',
    700: '#056A6A',
    800: '#0A5757',
    900: '#003436',
  },
  gray: {
    50: '#F6F6F6',
    100: '#E7E7E7',
    200: '#D1D1D1',
    300: '#B0B0B0',
    400: '#888888',
    500: '#6D6D6D',
    600: '#5D5D5D',
    700: '#4F4F4F',
    800: '#454545',
    900: '#3D3D3D',
    950: '#262626',
  },
  darkBlueGray: {
    100: '#DDEDF0',
    300: '#91C1CF',
    500: '#418199',
    700: '#314B59',
    900: '#263742',
    950: '#192833',
  }
}

const lightPalette = [
  'hsla(208, 72%, 100%, 1)',
  'hsla(208, 66%, 93%, 1)',
  'hsla(209, 60%, 85%, 1)',
  'hsla(209, 54%, 78%, 1)',
  'hsla(210, 47%, 71%, 1)',
  'hsla(210, 41%, 63%, 1)',
  'hsla(211, 35%, 56%, 1)',
  'hsla(211, 29%, 48%, 1)',
  'hsla(212, 23%, 41%, 1)',
  'hsla(212, 17%, 34%, 1)',
  'hsla(213, 11%, 26%, 1)',
  'hsla(213, 5%, 19%, 1)',
]

const lightShadows = {
  shadow1: 'rgba(0,0,0,0.04)',
  shadow2: 'rgba(0,0,0,0.08)',
  shadow3: 'rgba(0,0,0,0.16)',
  shadow4: 'rgba(0,0,0,0.24)',
  shadow5: 'rgba(0,0,0,0.32)',
  shadow6: 'rgba(0,0,0,0.4)',
}

const darkShadows = {
  shadow1: 'rgba(0,0,0,0.2)',
  shadow2: 'rgba(0,0,0,0.3)',
  shadow3: 'rgba(0,0,0,0.4)',
  shadow4: 'rgba(0,0,0,0.5)',
  shadow5: 'rgba(0,0,0,0.6)',
  shadow6: 'rgba(0,0,0,0.7)',
}

import { lightColors } from './tokens';
import { escuroColors } from './escuro';

export const builtThemes = createThemes({
  componentThemes: defaultComponentThemes,
  base: {
    palette: {
      dark: darkPalette,
      light: lightPalette,
    },
    extra: {
      light: {
        ...Colors.green,
        ...Colors.red,
        ...Colors.yellow,
        ...lightShadows,
        shadowColor: lightShadows.shadow1,
        // Semantic Tokens Mapping (Light)
        primary: lightPalette[8], // Strong blue
        primaryHover: lightPalette[9],
        primaryPress: lightPalette[10],
        primaryForeground: lightPalette[0], // White-ish
        secondary: lightPalette[2], // Light gray/blue
        secondaryHover: lightPalette[3],
        secondaryPress: lightPalette[3],
        secondaryForeground: lightPalette[11], // Dark
        muted: lightPalette[1],
        mutedForeground: lightPalette[6],
        accent: lightPalette[2],
        accentForeground: lightPalette[11],
        destructive: Colors.red.red10,
        destructiveHover: Colors.red.red11,
        destructivePress: Colors.red.red12,
        destructiveForeground: '#FFFFFF',
        border: lightPalette[4],
        input: lightPalette[4],
        ring: lightPalette[8],
        background: lightPalette[0],
        foreground: lightPalette[11],
      },
      dark: {
        ...Colors.greenDark,
        ...Colors.redDark,
        ...Colors.yellowDark,
        ...darkShadows,
        ...escuroColors,
        shadowColor: darkShadows.shadow1,
        border: escuroColors.borderColor,
        input: escuroColors.borderColor,
        ring: escuroColors.primary,
        foreground: escuroColors.color,
      },
      claro: {
        ...Colors.green,
        ...Colors.red,
        ...Colors.yellow,
        ...lightShadows,
        ...lightColors,
        shadowColor: lightShadows.shadow1,
        border: lightColors.borderColor,
        input: lightColors.borderColor,
        ring: lightColors.primary,
        foreground: lightColors.color,
      },
      escuro: {
        ...Colors.greenDark,
        ...Colors.redDark,
        ...Colors.yellowDark,
        ...darkShadows,
        ...escuroColors,
        shadowColor: darkShadows.shadow1,
        border: escuroColors.borderColor,
        input: escuroColors.borderColor,
        ring: escuroColors.primary,
        foreground: escuroColors.color,
      },
    },
  },
  accent: {
    palette: {
      dark: [
        'hsla(220, 60%, 23%, 1)',
        'hsla(216, 60%, 30%, 1)',
        'hsla(213, 59%, 37%, 1)',
        'hsla(209, 59%, 44%, 1)',
        'hsla(205, 59%, 51%, 1)',
        'hsla(202, 58%, 58%, 1)',
        'hsla(198, 58%, 65%, 1)',
        'hsla(195, 57%, 72%, 1)',
        'hsla(191, 57%, 79%, 1)',
        'hsla(187, 57%, 86%, 1)',
        'hsla(184, 56%, 93%, 1)',
        'hsla(180, 56%, 100%, 1)',
        'hsla(180, 56%, 74%, 1)',
      ],
      light: [
        'hsla(220, 60%, 23%, 1)',
        'hsla(218, 60%, 30%, 1)',
        'hsla(215, 59%, 37%, 1)',
        'hsla(213, 59%, 44%, 1)',
        'hsla(210, 59%, 51%, 1)',
        'hsla(208, 58%, 58%, 1)',
        'hsla(205, 58%, 65%, 1)',
        'hsla(203, 57%, 72%, 1)',
        'hsla(200, 57%, 79%, 1)',
        'hsla(198, 57%, 86%, 1)',
        'hsla(195, 56%, 93%, 1)',
        'hsla(193, 56%, 100%, 1)',
        'hsla(193, 56%, 74%, 1)',
      ],
    },
  },
  childrenThemes: {
    warning: {
      palette: {
        dark: Object.values(Colors.yellowDark),
        light: Object.values(Colors.yellow),
      },
    },
    error: {
      palette: {
        dark: Object.values(Colors.redDark),
        light: Object.values(Colors.red),
      },
    },
    success: {
      palette: {
        dark: Object.values(Colors.greenDark),
        light: Object.values(Colors.green),
      },
    },
  },
})

export type Themes = typeof builtThemes
export const themes = builtThemes
