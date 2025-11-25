
import { createTheme } from 'tamagui';
import { lightColors, darkColors } from './tokens';

const lightTheme = createTheme({
  ...lightColors,
});

const darkTheme = createTheme({
  ...darkColors,
});

export const themes = {
  light: lightTheme,
  dark: darkTheme,
};
