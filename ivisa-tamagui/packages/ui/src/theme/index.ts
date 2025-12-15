
import { createTheme } from 'tamagui';
import { lightColors, darkColors } from './tokens';
import { escuroColors } from './escuro';
import { prefRioColors } from './prefRio';

const lightTheme = createTheme({
  ...lightColors,
});

const darkTheme = createTheme({
  ...darkColors,
});

const escuroTheme = createTheme({
  ...escuroColors,
});

const prefRioTheme = createTheme({
  ...prefRioColors,
});

export const themes = {
  light: lightTheme,
  dark: darkTheme,
  escuro: escuroTheme,
  'pref.rio': prefRioTheme,
};
