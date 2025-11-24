import { createTamagui } from 'tamagui';
import { colorTokens } from './theme/tokens';
import { themes } from './theme';

// Import the Tamagui fonts and create a font configuration
// We can use the default fonts for now
import { createInterFont } from '@tamagui/font-inter';

const headingFont = createInterFont();
const bodyFont = createInterFont();

// This is the main configuration object for Tamagui
const config = createTamagui({
  // Fonts
  fonts: {
    heading: headingFont,
    body: bodyFont,
  },

  // Tokens
  tokens: colorTokens,

  // Themes
  themes,

  // Media queries
  // These are the default media queries, useful for responsive design
  media: {
    xs: { maxWidth: 660 },
    sm: { maxWidth: 800 },
    md: { maxWidth: 1020 },
    lg: { maxWidth: 1280 },
    xl: { maxWidth: 1420 },
    xxl: { maxWidth: 1600 },
    gtXs: { minWidth: 661 },
    gtSm: { minWidth: 801 },
    gtMd: { minWidth: 1021 },
    gtLg: { minWidth: 1281 },
    short: { maxHeight: 820 },
    tall: { minHeight: 820 },
    hoverNone: { hover: 'none' },
    pointerCoarse: { pointer: 'coarse' },
  },

  // Shorthands
  // These are CSS-like shorthands for common style properties
  shorthands: {
    ac: 'alignContent',
    ai: 'alignItems',
    als: 'alignSelf',
    f: 'flex',
    fb: 'flexBasis',
    fd: 'flexDirection',
    fg: 'flexGrow',
    fs: 'flexShrink',
    fw: 'flexWrap',
    jc: 'justifyContent',
    h: 'height',
    m: 'margin',
    mb: 'marginBottom',
    ml: 'marginLeft',
    mr: 'marginRight',
    mt: 'marginTop',
    mx: 'marginHorizontal',
    my: 'marginVertical',
    p: 'padding',
    pb: 'paddingBottom',
    pl: 'paddingLeft',
    pr: 'paddingRight',
    pt: 'paddingTop',
    px: 'paddingHorizontal',
    py: 'paddingVertical',
    w: 'width',
  } as const,
});

// This is necessary for TypeScript to understand the Tamagui configuration
type Conf = typeof config;
declare module 'tamagui' {
  interface TamaguiCustomConfig extends Conf {}
}

export default config;
