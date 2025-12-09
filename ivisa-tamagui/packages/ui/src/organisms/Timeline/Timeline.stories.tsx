import type { Meta, StoryObj } from '@storybook/react'
import { Timeline, TimelineItem } from './Timeline'
import { Text, YStack } from 'tamagui'

const meta: Meta<typeof Timeline> = {
  title: 'Organisms/Timeline',
  component: Timeline,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Timeline displays a list of events in chronological order.',
      },
    },
  },
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof Timeline>

export const Default: Story = {
  render: () => (
    <Timeline>
      <TimelineItem>
        <YStack>
          <Text fontWeight="bold">Step 1</Text>
          <Text fontSize="$2">Description for step 1</Text>
        </YStack>
      </TimelineItem>
      <TimelineItem>
        <YStack>
          <Text fontWeight="bold">Step 2</Text>
          <Text fontSize="$2">Description for step 2</Text>
        </YStack>
      </TimelineItem>
      <TimelineItem>
        <YStack>
          <Text fontWeight="bold">Step 3</Text>
          <Text fontSize="$2">Description for step 3</Text>
        </YStack>
      </TimelineItem>
    </Timeline>
  ),
}
