import type { Meta, StoryObj } from '@storybook/react'
import { Tooltip } from './Tooltip'
import { Button } from '../../atoms/Button'
import { XStack, Text } from 'tamagui'

const meta: Meta<typeof Tooltip> = {
  title: 'Molecules/Tooltip',
  component: Tooltip,
  parameters: {
    layout: 'centered',
  },
}

export default meta

type Story = StoryObj<typeof Tooltip>

export const Default: Story = {
  render: (args) => (
    <Tooltip {...args} content="This is a tooltip">
      <Button>Hover me</Button>
    </Tooltip>
  ),
}

export const WithCustomContent: Story = {
  render: (args) => (
    <Tooltip
      {...args}
      content={
        <XStack padding="$2" backgroundColor="$muted" borderRadius="$sm">
          <Text>Custom Content</Text>
        </XStack>
      }
    >
      <Button variant="outline">Hover me (Custom)</Button>
    </Tooltip>
  ),
}
