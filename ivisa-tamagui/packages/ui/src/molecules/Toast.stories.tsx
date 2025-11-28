import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Button } from '../atoms/Button'
import { ToastProvider, useToast } from './Toast'
import { YStack } from 'tamagui'

const meta: Meta = {
  title: 'Molecules/Toast',
  decorators: [
    (Story) => (
      <ToastProvider>
        <Story />
      </ToastProvider>
    ),
  ],
  parameters: {
    layout: 'centered',
  },
}

export default meta

const ToastDemo = () => {
  const { toast } = useToast()

  return (
    <YStack space>
      <Button
        onPress={() =>
          toast({
            title: 'Scheduled: Catch up',
            description: 'Friday, February 10, 2023 at 5:57 PM',
          })
        }
      >
        Show Toast
      </Button>
      <Button
        variant="destructive"
        onPress={() =>
          toast({
            title: 'Uh oh! Something went wrong.',
            description: 'There was a problem with your request.',
            variant: 'destructive',
          })
        }
      >
        Show Destructive Toast
      </Button>
      <Button
        onPress={() =>
          toast({
            title: 'Success!',
            description: 'Your changes have been saved.',
            variant: 'success',
          })
        }
      >
        Show Success Toast
      </Button>
      <Button
        onPress={() =>
          toast({
            title: 'Event has been created',
            description: 'You can view it in your calendar.',
            action: <Button size="$1">Undo</Button>,
          })
        }
      >
        Show Toast with Action
      </Button>
    </YStack>
  )
}

export const Default: StoryObj = {
  render: () => <ToastDemo />,
}
