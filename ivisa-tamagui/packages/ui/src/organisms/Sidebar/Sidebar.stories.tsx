import type { Meta, StoryObj } from '@storybook/react';
import { Sidebar } from './Sidebar';
import { Button } from '../../atoms/Button';
import { XStack, YStack, Text, Paragraph } from 'tamagui';

const meta = {
  title: 'Organisms/Sidebar',
  component: Sidebar,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Sidebar>;

export default meta;

type Story = StoryObj<typeof meta>;

// A more realistic content for the sidebar
const SidebarContent = () => (
  <>
    <Button justifyContent="flex-start">Home</Button>
    <Button justifyContent="flex-start">Profile</Button>
    <Button justifyContent="flex-start">Settings</Button>
  </>
);

export const Default: Story = {
  render: () => (
    <XStack height="100vh" width="100vw" backgroundColor="$background">
      <Sidebar>
        <SidebarContent />
      </Sidebar>
      <YStack flex={1} padding="$4" gap="$4">
        <Text fontSize="$8" fontWeight="bold">Main Content</Text>
        <Paragraph>
          This is the main content area. The sidebar is responsive.
        </Paragraph>
        <Paragraph color="$colorPress">
          Use the Storybook viewport controls to see how it changes from a fixed panel on desktop to a collapsible sheet on mobile.
        </Paragraph>
      </YStack>
    </XStack>
  ),
  parameters: {
    docs: {
      description: {
        story: 'The Sidebar component is responsive. On desktop viewports, it displays as a static panel. On mobile viewports, it collapses into a hamburger menu that triggers a slide-out sheet. Use the viewport addon in the Storybook toolbar to test different screen sizes.'
      }
    }
  }
};
