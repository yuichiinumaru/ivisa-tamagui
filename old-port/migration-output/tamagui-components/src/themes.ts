export const tokens = {
  dark: {
    background: '#0a0a0a',
    foreground: '#fafafa',
  },
  light: {
    background: '#ffffff', 
    foreground: '#0a0a0a',
  }
}

export const themes = ['light', 'dark'] as const
export type Theme = typeof themes[number]
