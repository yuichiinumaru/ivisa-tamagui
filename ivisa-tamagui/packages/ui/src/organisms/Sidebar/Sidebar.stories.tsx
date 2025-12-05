import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Sidebar } from './Sidebar';
import { Text } from 'tamagui';

const meta = {
  title: 'Organisms/Sidebar',
  component: Sidebar,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: `
### Sidebar
The Application Sidebar. It acts as a collapsible drawer on mobile (using Sheet) and a fixed or floating sidebar on desktop.

### Usage
Wrap your main content layout with the Sidebar provider or place it as the primary navigation element.
It supports different variants:
- **Fixed**: Always visible on the side.
- **Collapsible**: Can be expanded/collapsed.
- **Floating**: Floats over content (often used for mobile or overlay modes).

Note: This component handles responsive behavior automatically.
`,
      },
    },
  },
  argTypes: {
    variant: {
      control: {
        type: 'select',
        options: ['collapsible', 'fixed', 'floating'],
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Sidebar>;

export default meta;

type Story = StoryObj<typeof meta>;

const sidebarContent = (
  <>
    <Text>Sidebar Item 1</Text>
    <Text>Sidebar Item 2</Text>
    <Text>Sidebar Item 3</Text>
  </>
);

export const Default: Story = {
  args: {
    children: sidebarContent,
    variant: 'fixed',
  },
};

export const Collapsible: Story = {
  args: {
    children: sidebarContent,
    variant: 'collapsible',
  },
};

export const Floating: Story = {
  args: {
    children: sidebarContent,
    variant: 'floating',
  },
};