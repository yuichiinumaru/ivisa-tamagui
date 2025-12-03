import type { Meta, StoryObj } from '@storybook/react'
import { HoverCard, HoverCardContent, HoverCardTrigger } from './HoverCard'
import { Button } from '../../atoms/Button'
import { Text, YStack, Avatar, H4 } from 'tamagui'

const meta: Meta<typeof HoverCard> = {
  title: 'Molecules/HoverCard',
  component: HoverCard,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
}

export default meta
type Story = StoryObj<typeof HoverCard>

export const Default: Story = {
  render: () => (
    <HoverCard>
      <HoverCardTrigger asChild>
        <Button variant="ghost">@nextjs</Button>
      </HoverCardTrigger>
      <HoverCardContent>
        <YStack gap="$4" maxWidth={300}>
          <YStack flexDirection="row" gap="$4">
            <Avatar circular size="$10">
              <Avatar.Image src="https://github.com/vercel.png" />
              <Avatar.Fallback backgroundColor="$gray5" />
            </Avatar>
            <YStack gap="$1">
              <H4 size="$3">Next.js</H4>
              <Text size="$3" color="$gray11">
                @nextjs
              </Text>
            </YStack>
          </YStack>
          <Text size="$3">
            The React Framework – created and maintained by @vercel.
          </Text>
          <YStack flexDirection="row" gap="$4">
            <Text size="$3" color="$gray11">
              Joined December 2021
            </Text>
          </YStack>
        </YStack>
      </HoverCardContent>
    </HoverCard>
  ),
}
