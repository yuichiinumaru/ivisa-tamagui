import type { Meta, StoryObj } from '@storybook/react'
import { KPIGrid } from './KPIGrid'

const meta: Meta<typeof KPIGrid> = {
  title: 'Organisms/KPIGrid',
  component: KPIGrid,
  tags: ['autodocs'],
  argTypes: {},
}

export default meta
type Story = StoryObj<typeof KPIGrid>

export const Default: Story = {
  args: {},
}
