import type { Meta, StoryObj } from '@storybook/react'
import { DashboardShell } from './DashboardShell'

const meta: Meta<typeof DashboardShell> = {
  title: 'Organisms/DashboardShell',
  component: DashboardShell,
  tags: ['autodocs'],
  argTypes: {},
}

export default meta
type Story = StoryObj<typeof DashboardShell>

export const Default: Story = {
  args: {},
  parameters: {
      layout: 'fullscreen',
  }
}
