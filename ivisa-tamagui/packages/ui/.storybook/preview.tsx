import "./fonts.css"
import React from "react"
import { Preview } from "@storybook/react"
import { TamaguiProvider, Theme, YStack } from "tamagui"
import config from "../src/tamagui.config"

const allThemes = Object.keys(config.themes).filter(theme =>
  ['claro', 'escuro'].includes(theme)
)

const preview: Preview = {
  decorators: [
    (Story, context) => {
      const theme = context.globals.theme || "claro"

      // Sync body background/color for Portals and out-of-bounds content
      React.useEffect(() => {
        const bg = theme === 'escuro' ? '#09090b' : '#ffffff'
        const color = theme === 'escuro' ? '#fafafa' : '#000000'
        document.body.style.backgroundColor = bg
        document.body.style.color = color
      }, [theme])

      return (
        <TamaguiProvider key={theme} config={config} defaultTheme={theme}>
          <Theme name={theme}>
            {/* @ts-ignore */}
            <YStack f={1} backgroundColor="$background" minHeight="100vh">
              <Story />
            </YStack>
          </Theme>
        </TamaguiProvider>
      )
    },
  ],

  initialGlobals: {
    theme: allThemes[0] ?? "claro",
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
          title: t[0].toUpperCase() + t.slice(1),
        })),
      }
    },
  },
}

export default preview
