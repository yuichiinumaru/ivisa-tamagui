export const themes = ['light', 'dark'] as const
export type Theme = typeof themes[number]

export const semanticTokens = {
  brand: {
    primary: '$primary',
    secondary: '$secondary',
    accent: '$accent',
  },
  feedback: {
    success: '$success',
    warning: '$warning',
    info: '$info',
    destructive: '$destructive',
  },
  surfaces: {
    base: '$background',
    muted: '$muted',
    border: '$borderColor',
  },
}
