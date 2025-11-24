import { PropsWithChildren } from 'react'
import { TamaguiProvider } from 'tamagui'
import { PortalProvider } from '@tamagui/portal'

import { tamaguiConfig } from './tamagui.config'
import { ComponentErrorBoundary } from './components/ComponentErrorBoundary'

export interface AppProvidersProps extends PropsWithChildren {
  theme?: keyof typeof tamaguiConfig.themes
}

export const AppProviders = ({ theme = 'dark', children }: AppProvidersProps) => {
  return (
    <TamaguiProvider config={tamaguiConfig} defaultTheme={theme}>
      <PortalProvider shouldAddRootHost>
        <ComponentErrorBoundary componentName="AppProvidersRoot">
          {children}
        </ComponentErrorBoundary>
      </PortalProvider>
    </TamaguiProvider>
  )
}
