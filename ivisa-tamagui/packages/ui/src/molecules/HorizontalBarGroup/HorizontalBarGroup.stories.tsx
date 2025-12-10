import type { Meta, StoryObj } from '@storybook/react'
import { HorizontalBarGroup } from './HorizontalBarGroup'

const meta: Meta<typeof HorizontalBarGroup> = {
  title: 'Molecules/HorizontalBarGroup',
  component: HorizontalBarGroup,
  tags: ['autodocs'],
  argTypes: {},
}

export default meta
type Story = StoryObj<typeof HorizontalBarGroup>

export const Default: Story = {
  args: {},
}
