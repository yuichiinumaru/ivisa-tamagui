import { lightColors } from './tokens';

const rioPalette = {
  primary: '#003399',
  primaryLight: '#0066CC',
  secondary: '#333333',
  tertiary: '#666666',
  white: '#FFFFFF',
  gray1: '#EEEEEE',
  gray2: '#F5F5F5',
  success: '#009900',
  error: '#CC0000',
  warning: '#FFA500',
  info: '#0066CC',
};

export const prefRioColors = {
  ...lightColors,

  // Backgrounds
  background: rioPalette.white,
  backgroundHover: rioPalette.gray1,
  backgroundPress: rioPalette.gray2,
  backgroundFocus: rioPalette.gray1,
  backgroundStrong: rioPalette.secondary, // Dark background for strong contrast areas

  // Borders
  borderColor: rioPalette.gray1,
  borderColorHover: rioPalette.tertiary,
  borderColorFocus: rioPalette.primary,
  borderColorPress: rioPalette.primary,

  // Text
  color: rioPalette.secondary, // Main text #333333
  colorHover: rioPalette.tertiary,
  colorPress: rioPalette.primary,
  colorFocus: rioPalette.primary,

  // Primary Actions
  primary: rioPalette.primary,
  primaryHover: rioPalette.primaryLight,
  primaryPress: '#002266',
  primaryFocus: rioPalette.primary,
  primaryForeground: rioPalette.white,

  // Secondary Actions
  secondary: rioPalette.gray1,
  secondaryHover: '#DDD',
  secondaryPress: '#CCC',
  secondaryForeground: rioPalette.secondary,

  // Status
  success: rioPalette.success,
  error: rioPalette.error,
  warning: rioPalette.warning,
  info: rioPalette.info,

  // Shadows
  shadowColor: 'rgba(0, 0, 0, 0.1)',
  shadowColorHover: 'rgba(0, 0, 0, 0.15)',
};
