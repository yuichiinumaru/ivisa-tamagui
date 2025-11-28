import type { Meta, StoryObj } from '@storybook/react'
import { Button, YStack, Text } from 'tamagui'
import { ToastProvider, useToast, Toast } from './Toast' // Import Toast and ToastProvider
import { PortalProvider } from '@tamagui/portal' // Needed for ToastProvider

const meta: Meta<typeof Toast> = { // Use ToastFrame as the component for Storybook
  title: 'molecules/Toast',
  component: Toast,
  tags: ['autodocs'],
  argTypes: {},
  parameters: {
    layout: 'fullscreen', // To properly see the toast position
  },
  render: (args) => {
    const ToastTrigger = () => {
      const { toast } = useToast()

      return (
        <YStack gap="$2">
          <Button onPress={() => toast({
            title: 'Event Scheduled',
            description: 'Your event has been successfully scheduled.',
          })}>
            Show Default Toast
          </Button>

          <Button theme="red" onPress={() => toast({
            title: 'Uh oh! Something went wrong.',
            description: 'There was a problem with your request.',
            variant: 'destructive',
          })}>
            Show Destructive Toast
          </Button>

          <Button theme="green" onPress={() => toast({
            title: 'Success!',
            description: 'Your changes have been saved.',
            variant: 'success',
          })}>
            Show Success Toast
          </Button>

          <Button onPress={() => toast({
            title: 'Unsaved Changes',
            description: 'You have unsaved changes. Would you like to save them?',
            action: (
                <Button variant="outline" size="$2" onPress={() => console.log('Saved!')}>
                    <Text>Save</Text>
                </Button>
            ),
            duration: 0, // Make it persistent until dismissed
          })}>
            Show Toast With Action (Persistent)
          </Button>
          <Text fontSize="$1" theme="alt1">Toasts will appear in the bottom right.</Text>
        </YStack>
      )
    }

    return (
      <PortalProvider>
        <ToastProvider>
          <YStack flex={1} alignItems="center" justifyContent="center">
            <ToastTrigger />
          </YStack>
        </ToastProvider>
      </PortalProvider>
    )
  },
}

export default meta

type Story = StoryObj<typeof Toast>

export const Default: Story = {
  args: {},
}
