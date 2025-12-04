import type { Meta, StoryObj } from '@storybook/react'
import { Empty, EmptyTitle, EmptyDescription } from './Empty'
import { Ban } from '@tamagui/lucide-icons'

const meta: Meta<typeof Empty> = {
  title: 'Molecules/Empty',
  component: Empty,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof Empty>

export const Default: Story = {
  render: () => (
    <Empty>
      <Ban size={48} color="$mutedForeground" />
      <EmptyTitle>No Data</EmptyTitle>
      <EmptyDescription>There is nothing to display here.</EmptyDescription>
    </Empty>
  ),
}
