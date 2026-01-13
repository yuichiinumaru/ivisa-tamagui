// @ts-nocheck
import { darkColors } from './tokens';

export const escuroColors = {
  ...darkColors,
  // Base Backgrounds (Zinc 950/900)
  background: '#09090b',
  backgroundHover: '#18181b',
  backgroundPress: '#27272a',
  backgroundFocus: '#27272a',
  backgroundStrong: '#09090b',

  // Borders (Zinc 800)
  borderColor: '#27272a',
  borderColorHover: '#3f3f46',
  borderColorFocus: '#52525b',

  // Text (Zinc 50)
  color: '#fafafa',
  colorHover: '#f4f4f5',
  colorPress: '#e4e4e7',
  colorFocus: '#fafafa',

  // Primary Action (High Contrast Zinc 50)
  primary: '#fafafa',
  primaryHover: '#f4f4f5',
  primaryPress: '#e4e4e7',
  primaryFocus: '#fafafa',
  primaryForeground: '#18181b', // Zinc 900 for text on primary

  // Secondary (Zinc 900)
  secondary: '#18181b',
  secondaryHover: '#27272a',
  secondaryPress: '#3f3f46',
  secondaryForeground: '#fafafa',
  mutedForeground: '#a1a1aa', // Zinc 400

  // Glassmorphism hints
  shadowColor: 'rgba(0, 0, 0, 0.4)',
  shadowColorHover: 'rgba(0, 0, 0, 0.6)',
};
