import { Meta, StoryObj } from '@storybook/react'
import { BarChart } from './BarChart'

const meta: Meta<typeof BarChart> = {
  title: 'Organismos/BarChart',
  component: BarChart,
  argTypes: {
    height: { control: 'number' },
    color: { control: 'color' },
  },
}

export default meta

type Story = StoryObj<typeof BarChart>

const data = [
  { name: 'Jan', value: 400 },
  { name: 'Feb', value: 300 },
  { name: 'Mar', value: 200 },
  { name: 'Apr', value: 278 },
  { name: 'May', value: 189 },
]

export const Default: Story = {
  args: {
    data,
    xKey: 'name',
    yKey: 'value',
    height: 300,
  },
}

export const Loading: Story = {
  args: {
    isLoading: true,
    height: 300,
  },
}

export const Empty: Story = {
  args: {
    data: [],
    xKey: 'name',
    yKey: 'value',
    height: 300,
  },
}

export const ErrorState: Story = {
  args: {
    error: new Error('Failed to fetch'),
    height: 300,
  },
}
