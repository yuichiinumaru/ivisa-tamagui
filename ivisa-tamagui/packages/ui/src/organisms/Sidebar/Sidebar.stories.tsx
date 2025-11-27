import type { Meta, StoryObj } from '@storybook/react';
import { Sidebar } from './Sidebar';
import { Text } from 'tamagui';

const meta = {
  title: 'organisms/Sidebar',
  component: Sidebar,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof Sidebar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: (
      <>
        <Text>Sidebar Item 1</Text>
        <Text>Sidebar Item 2</Text>
        <Text>Sidebar Item 3</Text>
      </>
    ),
  },
};
