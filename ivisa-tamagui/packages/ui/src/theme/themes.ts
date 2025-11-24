import { createTheme } from 'tamagui';
import { tokens } from './tokens';

// --- Light Theme ---
// This is the base theme. It's a good practice to have a fully defined light theme.
// Dark themes can then be created by overriding only the necessary values.

const light = createTheme({
  background: tokens.color.background,
  backgroundHover: tokens.color.muted,
  backgroundPress: tokens.color.muted,
  backgroundFocus: tokens.color.muted,
  borderColor: tokens.color.border,
  borderColorHover: tokens.color.border,
  borderColorPress: tokens.color.border,
  borderColorFocus: tokens.color.ring,
  color: tokens.color.foreground,
  colorHover: tokens.color.foreground,
  colorPress: tokens.color.foreground,
  colorFocus: tokens.color.foreground,
  shadowColor: tokens.color.foreground,
  shadowColorHover: tokens.color.foreground,
  
  // Specific component overrides can be added here
  // For example, for a primary button:
  primary_background: tokens.color.primary,
  primary_color: tokens.color.primaryForeground,
});

// --- Dark Theme ---
// We can create a dark theme by inheriting from the light theme
// and overriding the colors. For now, we'll just define it as a copy
// of the light theme. We will implement the actual dark theme colors later.
const dark = createTheme({
  ...light,
  background: tokens.color.foreground,
  backgroundHover: tokens.color.secondary,
  borderColor: tokens.color.input,
  color: tokens.color.background,
  
  // Specific component overrides for dark theme
  primary_background: tokens.color.primary,
  primary_color: tokens.color.primaryForeground,
});

export const themes = {
  light,
  dark,
};
