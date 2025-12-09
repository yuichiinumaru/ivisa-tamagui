import type { Meta, StoryObj } from '@storybook/react'
import { DashboardLayout } from './DashboardLayout'
import { Text, YStack, H3 } from 'tamagui'

const meta: Meta<typeof DashboardLayout> = {
  title: 'Organisms/DashboardLayout',
  component: DashboardLayout,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'DashboardLayout provides a standard application shell with Header, Sidebar, and Main content area.',
      },
    },
  },
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof DashboardLayout>

export const Default: Story = {
  render: () => (
    <DashboardLayout
      header={
        <H3>My Dashboard</H3>
      }
      sidebar={
        <YStack padding="$4" space="$2">
          <Text>Home</Text>
          <Text>Settings</Text>
          <Text>Profile</Text>
        </YStack>
      }
    >
      <YStack space="$4">
        <H3>Welcome back!</H3>
        <Text>This is the main content area.</Text>
      </YStack>
    </DashboardLayout>
  ),
}
