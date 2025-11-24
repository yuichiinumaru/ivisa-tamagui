
import { createTheme } from 'tamagui';
import { colorTokens } from './tokens';

const lightTheme = createTheme({
  ...colorTokens.light,
});

const darkTheme = createTheme({
  ...colorTokens.dark,
});

export const themes = {
  light: lightTheme,
  dark: darkTheme,
};
