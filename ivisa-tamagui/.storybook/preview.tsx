// Mocks para APIs nativas do React Native no ambiente web/Storybook
if (typeof window !== 'undefined') {
  try {
    // Mock para requireNativeComponent
    require('react-native').requireNativeComponent = () => () => null;
    // Mock para PermissionsAndroid
    require('react-native').PermissionsAndroid = {
      request: async () => 'granted',
      check: async () => true,
      RESULTS: { GRANTED: 'granted' }
    };
  } catch (e) {
    // Ignora se já estiver mockado ou não existir
  }
}
import type { Preview } from '@storybook/react-vite';
import { AppProviders } from '@ivisa/ui';

const preview: Preview = {
  decorators: [
    (Story) => (
      <AppProviders>
        <Story />
      </AppProviders>
    ),
  ],
  parameters: {
    options: {
      storySort: {
        order: ['Organismos', 'Moléculas', 'Átomos', '*'],
        method: 'alphabetical',
      },
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    a11y: {
      test: 'todo',
    },
  },
};

export default preview;
