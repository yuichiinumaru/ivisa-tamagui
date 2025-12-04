import type { Meta, StoryObj } from '@storybook/react'
import { ScrollArea } from './ScrollArea'
import { YStack, Text } from 'tamagui'

const meta: Meta<typeof ScrollArea> = {
  title: 'atoms/ScrollArea',
  component: ScrollArea,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <YStack height={200} width={300} borderWidth={1} borderColor="$borderColor" borderRadius="$4">
        <Story />
      </YStack>
    ),
  ],
  render: (args) => (
    <ScrollArea {...args}>
      <YStack p="$4">
        <Text fontSize="$4" fontWeight="bold" mb="$2">Tags</Text>
        {Array.from({ length: 50 }).map((_, i) => `Tag ${i + 1}`).map((tag) => (
          <Text key={tag} py="$1">{tag}</Text>
        ))}
      </YStack>
    </ScrollArea>
  ),
}

export default meta

type Story = StoryObj<typeof ScrollArea>

export const Default: Story = {
  args: {},
}

export const Horizontal: Story = {
    render: (args) => (
        <ScrollArea {...args} horizontal>
            <YStack p="$4" flexDirection="row" gap="$4">
                {Array.from({ length: 20 }).map((_, i) => (
                    <Text key={i} whiteSpace="nowrap">Item {i+1}</Text>
                ))}
            </YStack>
        </ScrollArea>
    )
}
