import type { Meta, StoryObj } from '@storybook/react'
import { RankingChart } from './RankingChart'

const meta: Meta<typeof RankingChart> = {
  title: 'Organisms/RankingChart',
  component: RankingChart,
  tags: ['autodocs'],
  argTypes: {},
}

export default meta
type Story = StoryObj<typeof RankingChart>

export const Default: Story = {
  args: {},
}
