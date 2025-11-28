import type { Meta, StoryObj } from '@storybook/react'
import { Slider } from './Slider'
import { YStack } from 'tamagui'

const meta: Meta<typeof Slider> = {
  title: 'atoms/Slider',
  component: Slider,
  tags: ['autodocs'],
  argTypes: {
    defaultValue: {
      control: { type: 'object' },
    },
    max: {
      control: { type: 'number' },
    },
    step: {
      control: { type: 'number' },
    },
    disabled: {
      control: { type: 'boolean' }
    }
  },
  render: (args) => (
    <YStack width={250} p="$4">
      <Slider {...args} />
    </YStack>
  )
}

export default meta

type Story = StoryObj<typeof Slider>

export const Default: Story = {
  args: {
    defaultValue: [50],
    max: 100,
    step: 1,
  },
}

export const Disabled: Story = {
  args: {
    ...Default.args,
    disabled: true,
  },
}
