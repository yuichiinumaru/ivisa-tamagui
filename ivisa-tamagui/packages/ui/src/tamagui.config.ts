import { createTamagui, createFont } from 'tamagui';
import { createAnimations } from '@tamagui/animations-react-native';
import { tokens } from './theme/tokens';
import { themes as baseThemesRaw } from './theme/themes';

// 1. CORREÇÃO DOS THEMES: 
// Em vez de 'any', usamos o tipo do próprio objeto para manter a segurança.
// Criamos um novo objeto mapeando as chaves desejadas sem perder a tipagem.
const themes = {
  ...baseThemesRaw,
  claro: baseThemesRaw.light,
  escuro: baseThemesRaw.dark,
};

// 2. FONT CONFIGURATION
// Removidos aliases manuais como '$3' dentro do objeto, pois o Tamagui 
// resolve isso automaticamente através dos tokens.
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
    xs: 12,
    sm: 14,
    md: 16,
    lg: 18,
    xl: 20,
    '2xl': 24,
    '3xl': 32,
    '4xl': 48,
    '5xl': 64,
    default: 16,
    true: 16,
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
    4: '400',
    5: '500',
    9: '900',
  },
  letterSpacing: {
    4: 0,
    7: -0.5,
    9: -1,
  },
  face: {
    400: { normal: 'CeraPro-Regular' },
    500: { normal: 'CeraPro-Medium' },
    900: { normal: 'CeraPro-Black' },
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
  medium: {
    type: 'spring',
    damping: 10,
    mass: 0.9,
    stiffness: 100,
  },
});

// 3. CONFIGURAÇÃO PRINCIPAL
// Removido o 'as const' do shorthands pois o createTamagui já espera esse formato
const config = createTamagui({
  animations,
  fonts: {
    heading: ceraProFont,
    body: ceraProFont,
    brandHeading: ceraProFont,
    brandBody: ceraProFont,
  },
  tokens,
  themes,
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
  },
});

// 4. TIPAGEM GLOBAL (CRUCIAL)
// Aqui é onde o TypeScript "aprende" seu design system.
type Conf = typeof config;
declare module 'tamagui' {
  interface TamaguiCustomConfig extends Conf { }
}

export default config;