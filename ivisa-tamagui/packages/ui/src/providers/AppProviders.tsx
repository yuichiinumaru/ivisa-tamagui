import { PropsWithChildren } from 'react';
import { TamaguiProvider } from 'tamagui';
import { PortalProvider } from '@tamagui/portal';

import config from '../tamagui.config';
import { themes } from '../theme';
import { ComponentErrorBoundary } from '../molecules/ComponentErrorBoundary';

export type ThemeName = keyof typeof themes;

export interface AppProvidersProps extends PropsWithChildren {
  theme?: ThemeName;
}

export const AppProviders = ({ theme = 'claro', children }: AppProvidersProps) => (
  <TamaguiProvider config={config} defaultTheme={theme}>
    <PortalProvider shouldAddRootHost>
      <ComponentErrorBoundary componentName="AppProviders">
        {children}
      </ComponentErrorBoundary>
    </PortalProvider>
  </TamaguiProvider>
);

