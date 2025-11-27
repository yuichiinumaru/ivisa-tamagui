import type { Meta, StoryObj } from '@storybook/react'
import { ToggleGroup, ToggleGroupItem } from './ToggleGroup'
import { Text } from 'tamagui'

const meta: Meta<typeof ToggleGroup> = {
  title: 'Molecules/ToggleGroup',
  component: ToggleGroup,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    type: {
      control: { type: 'select' },
      options: ['single', 'multiple'],
    },
  },
}

export default meta

type Story = StoryObj<typeof ToggleGroup>

export const Default: Story = {
  args: {
    type: 'single',
    defaultValue: 'left',
  },
  render: (args) => (
    <ToggleGroup {...args}>
      <ToggleGroupItem value="left" aria-label="Left aligned">
        <Text>Left</Text>
      </ToggleGroupItem>
      <ToggleGroupItem value="center" aria-label="Center aligned">
        <Text>Center</Text>
      </ToggleGroupItem>
      <ToggleGroupItem value="right" aria-label="Right aligned">
        <Text>Right</Text>
      </ToggleGroupItem>
    </ToggleGroup>
  ),
}
