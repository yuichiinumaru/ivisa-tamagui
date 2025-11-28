import type { Meta, StoryObj } from '@storybook/react'
import { Skeleton } from './Skeleton'
import { XStack, YStack } from 'tamagui'

const meta: Meta<typeof Skeleton> = {
  title: 'atoms/Skeleton',
  component: Skeleton,
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof Skeleton>

export const Default: Story = {
  args: {
    width: 200,
    height: 20,
  },
}

export const CardSkeleton: Story = {
  render: () => (
    <YStack space="$3" p="$4" borderWidth={1} borderColor="$borderColor" borderRadius="$4" width={300}>
        <XStack space="$3" alignItems="center">
            <Skeleton circular width={40} height={40} />
            <YStack space="$2">
                <Skeleton width={150} height={16} />
                <Skeleton width={100} height={12} />
            </YStack>
        </XStack>
        <YStack space="$2" mt="$2">
            <Skeleton width="100%" height={12} />
            <Skeleton width="90%" height={12} />
        </YStack>
    </YStack>
  ),
}
