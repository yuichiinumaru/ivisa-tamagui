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
