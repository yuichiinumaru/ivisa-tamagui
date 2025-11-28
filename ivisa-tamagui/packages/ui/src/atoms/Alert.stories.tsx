import type { Meta, StoryObj } from '@storybook/react'
import { Alert, AlertTitle, AlertDescription } from './Alert'
import { AlertTriangle } from '@tamagui/lucide-icons'
import { YStack } from 'tamagui'

const meta: Meta<typeof Alert> = {
  title: 'atoms/Alert',
  component: Alert,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['default', 'destructive'],
    },
  },
  render: (args) => (
    <Alert {...args}>
      <AlertTriangle />
      <YStack>
        <AlertTitle variant={args.variant}>Heads up!</AlertTitle>
        <AlertDescription variant={args.variant}>
          You can add components to your app using the cli.
        </AlertDescription>
      </YStack>
    </Alert>
  ),
}

export default meta

type Story = StoryObj<typeof Alert>

export const Default: Story = {
  args: {
    variant: 'default',
  },
}

export const Destructive: Story = {
  args: {
    variant: 'destructive',
  },
}
