import { darkColors } from './tokens';

export const escuroColors = {
  ...darkColors,
  // Base Backgrounds (Black & Deep Blue)
  background: '#000000',
  backgroundHover: '#050A14', // Very dark blue
  backgroundPress: '#0A1429',
  backgroundFocus: '#0A1429',
  backgroundStrong: '#020408',

  // Borders (Subtle Blue)
  borderColor: '#1E293B',
  borderColorHover: '#334155',
  borderColorFocus: '#3B82F6', // Bright Blue Focus

  // Text (White)
  color: '#FFFFFF',
  colorHover: '#E2E8F0',
  colorPress: '#CBD5E1',
  colorFocus: '#FFFFFF',

  // Primary Action (Blue)
  primary: '#1E40AF', // Blue 800
  primaryHover: '#1D4ED8', // Blue 700
  primaryPress: '#2563EB', // Blue 600
  primaryFocus: '#2563EB',
  primaryForeground: '#FFFFFF',

  // Secondary
  secondary: '#0F172A', // Slate 900
  secondaryHover: '#1E293B',
  secondaryPress: '#334155',
  secondaryForeground: '#FFFFFF',

  // Glassmorphism hints (used in specific components if they use these tokens)
  shadowColor: 'rgba(59, 130, 246, 0.2)', // Blue glow
  shadowColorHover: 'rgba(59, 130, 246, 0.4)',
};
