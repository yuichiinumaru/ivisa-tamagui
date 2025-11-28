import type { Meta, StoryObj } from '@storybook/react';
import { Sidebar } from './Sidebar';
import { Text } from 'tamagui';

const meta = {
  title: 'organisms/Sidebar',
  component: Sidebar,
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    variant: {
      control: {
        type: 'select',
        options: ['collapsible', 'fixed', 'floating'],
      },
    },
  },
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
