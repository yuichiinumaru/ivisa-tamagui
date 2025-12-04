import type { Meta, StoryObj } from '@storybook/react'
import { Toaster } from './Sonner'
import { Button } from '../../atoms/Button'
import { toast } from 'sonner'
import { H4 } from '../../atoms/Typography'
import { VStack } from '../../atoms/Stack'

const meta: Meta<typeof Toaster> = {
  title: 'Molecules/Sonner',
  component: Toaster,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'A toast component based on Sonner that provides non-intrusive notifications.',
      },
    },
  },
  argTypes: {
    position: {
      control: 'select',
      options: ['top-left', 'top-center', 'top-right', 'bottom-left', 'bottom-center', 'bottom-right'],
      description: 'The position of the toast notifications on the screen.',
    },
  },
}

export default meta
type Story = StoryObj<typeof Toaster>

export const Playground: Story = {
  render: (args) => (
    <VStack>
      <Toaster {...args} />
      <H4>Click buttons to see different toast types</H4>
      <Button onPress={() => toast('A default toast notification.')}>Default</Button>
      <Button onPress={() => toast.success('Success!', { description: 'The operation was successful.' })}>
        Success
      </Button>
      <Button onPress={() => toast.error('Error!', { description: 'Something went wrong.' })}>
        Error
      </Button>
      <Button onPress={() => toast.warning('Warning!', { description: 'Please be cautious.' })}>
        Warning
      </Button>
      <Button onPress={() => toast.info('Info', { description: 'Here is some information.' })}>
        Info
      </Button>
      <Button
        onPress={() =>
          toast('Event has been created', {
            action: {
              label: 'Undo',
              onClick: () => console.log('Undo'),
            },
          })
        }
      >
        With Action
      </Button>
    </VStack>
  ),
  args: {
    position: 'bottom-right',
  },
}
