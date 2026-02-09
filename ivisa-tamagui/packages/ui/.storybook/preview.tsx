import "./fonts.css"
import React from "react"
import type { Preview } from "@storybook/react"
import { TamaguiProvider, Theme, YStack } from "tamagui"
import config from "../src/tamagui.config"

/**
 * 1. EXTRAÇÃO DE TIPOS
 */
type ConfThemes = keyof typeof config.themes;
interface TamaguiVariable {
  get: () => string | number;
}

const allThemes: ConfThemes[] = (Object.keys(config.themes) as ConfThemes[]).filter(
  (theme): theme is ConfThemes => ['claro', 'escuro'].includes(theme)
)

const preview: Preview = {
  decorators: [
    (Story, context) => {
      const themeName = (context.globals.theme as ConfThemes) || "claro"

      // 2. SINCRONIZAÇÃO DO BODY
      React.useEffect(() => {
        const themeObj = config.themes[themeName]
                
        const extractColor = (prop: unknown, fallback: string): string => {
          if (prop && typeof prop === 'object' && 'get' in prop) {            
            const variable = prop as TamaguiVariable;
            if (typeof variable.get === 'function') {
              return String(variable.get());
            }
          }
          return fallback;
        };

        const isDark = themeName === 'escuro';
        const bg = extractColor(themeObj?.background, isDark ? '#09090b' : '#ffffff');
        const color = extractColor(themeObj?.color, isDark ? '#fafafa' : '#000000');
            
        document.body.style.backgroundColor = bg
        document.body.style.color = color
      }, [themeName])

      // 3. HANDLER DE TOUCH
      React.useEffect(() => {
        const isTouchDevice = 
          typeof window !== 'undefined' && 
          ('ontouchstart' in window || navigator.maxTouchPoints > 0)

        if (isTouchDevice) return

        const preventSpuriousTouch = (e: TouchEvent) => {
          e.stopPropagation()
        }

        window.addEventListener('touchend', preventSpuriousTouch, { capture: true })
        return () => window.removeEventListener('touchend', preventSpuriousTouch, { capture: true })
      }, [])

      return (
        <TamaguiProvider config={config} defaultTheme={themeName}>
          <Theme name={themeName}>
            <YStack flex={1} backgroundColor="$background" minHeight="100vh">
              <Story />
            </YStack>
          </Theme>
        </TamaguiProvider>
      )
    },
  ],

  initialGlobals: {
    theme: allThemes[0] || "claro",
  },

  globalTypes: {
    theme: {
      name: "Tema",
      description: "Temas de UI",
      defaultValue: allThemes[0],
      toolbar: {
        icon: "paintbrush",
        items: allThemes.map(t => ({
          value: t,
          title: t.charAt(0).toUpperCase() + t.slice(1),
        })),
      }
    },
  },
}

export default preview