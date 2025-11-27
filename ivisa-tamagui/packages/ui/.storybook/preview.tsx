import React from "react"
import { Preview } from "@storybook/react"
import { TamaguiProvider } from "tamagui"
import config from "../src/tamagui.config"

// Lista todos os temas existentes no config
const allThemes = Object.keys(config.themes)

const preview: Preview = {
  decorators: [
    (Story, context) => {
      const theme = context.globals.theme || "light"

      return (
        <TamaguiProvider config={config} defaultTheme={theme}>
          <Story />
        </TamaguiProvider>
      )
    },
  ],

  globals: {
    theme: allThemes[0] ?? "light",
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
