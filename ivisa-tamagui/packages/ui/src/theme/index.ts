
import { createTheme } from 'tamagui';
import { lightColors } from './tokens';
import { escuroColors } from './escuro';
import { prefRioColors } from './prefRio';

const claroTheme = createTheme({
  ...lightColors,
});

const escuroTheme = createTheme({
  ...escuroColors,
});

const prefRioTheme = createTheme({
  ...prefRioColors,
});

const escuroTheme = createTheme({
  ...escuroColors,
});

const prefRioTheme = createTheme({
  ...prefRioColors,
});

export const themes = {
  claro: claroTheme,
  escuro: escuroTheme,
  'pref.rio': prefRioTheme,
};
