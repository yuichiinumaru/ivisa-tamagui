import type { Meta, StoryObj } from '@storybook/react'
import { Toaster } from './Sonner'
import { Button } from '../../atoms/Button'
import { toast } from 'sonner'

const meta: Meta<typeof Toaster> = {
  title: 'Molecules/Sonner',
  component: Toaster,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof Toaster>

export const Default: Story = {
  render: () => (
    <>
      <Toaster />
      <Button onPress={() => toast('Event has been created')}>
        Show Toast
      </Button>
    </>
  ),
}
