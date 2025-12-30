import { createTamagui, createFont } from 'tamagui';
import { createAnimations } from '@tamagui/animations-react-native';
import { tokens } from './theme/tokens';
import { themes as baseThemesRaw } from './theme/themes';

const baseThemes = baseThemesRaw as any;

// Map the generated themes to the names used in the application and Storybook
// baseThemes contains claro, escuro, prefrio plus all component/variant sub-themes
const themes = {
  ...baseThemes,
  claro: baseThemes.claro,
  escuro: baseThemes.escuro,
  'pref.rio': baseThemes.prefrio,
};


// Import the Tamagui fonts and create a font configuration
// We can use the default fonts for now
// Cera Pro Font Configuration (IVISA Brand)
const ceraProFont = createFont({
  family: 'Cera Pro',
  size: {
    1: 12,
    2: 14,
    3: 16,
    4: 18,
    5: 20,
    6: 24,
    7: 32,
    8: 48,
    9: 64,
    // Named tokens to match `size` prop usage
    xs: 12,
    sm: 14,
    md: 16,
    lg: 18,
    xl: 20,
    '2xl': 24,
    '3xl': 32,
    '4xl': 48,
    '5xl': 64,
    // Aliases for safety
    default: 16,
    true: 16,
    '$3': 16,
  },
  lineHeight: {
    1: 16,
    2: 20,
    3: 24,
    4: 28,
    5: 32,
    6: 40,
    7: 48,
    8: 64,
    9: 80,
  },
  weight: {
    4: '400', // Regular
    5: '500', // Medium
    9: '900', // Black
  },
  letterSpacing: {
    4: 0,
    7: -0.5, // Tighter for large titles
    9: -1,
  },
  face: {
    400: { normal: 'CeraPro-Regular' },
    500: { normal: 'CeraPro-Medium' },
    900: { normal: 'CeraPro-Black' },
  },
});

// Arial Font Configuration (Pref.Rio)
const arialFont = createFont({
  family: 'Arial, Helvetica, sans-serif',
  size: ceraProFont.size,
  lineHeight: ceraProFont.lineHeight,
  weight: {
    4: '400', // Regular
    7: '700', // Bold
  },
  letterSpacing: ceraProFont.letterSpacing,
  face: {
    400: { normal: 'Arial' },
    700: { normal: 'Arial-Bold' },
  },
});

const animations = createAnimations({
  bouncy: {
    type: 'spring',
    damping: 10,
    mass: 0.9,
    stiffness: 100,
  },
  lazy: {
    type: 'spring',
    damping: 20,
    stiffness: 60,
  },
  quick: {
    type: 'spring',
    damping: 20,
    mass: 1.2,
    stiffness: 250,
  },
});

// This is the main configuration object for Tamagui
const config = createTamagui({
  // Animations
  animations,

  // Fonts
  fonts: {
    heading: ceraProFont,
    body: ceraProFont,
    brandHeading: ceraProFont,
    brandBody: ceraProFont,
    rioHeading: arialFont,
    rioBody: arialFont,
  },

  // Tokens
  tokens,

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
  // eslint-disable-next-line @typescript-eslint/no-empty-object-type
  interface TamaguiCustomConfig extends Conf { }
}

export default config;
