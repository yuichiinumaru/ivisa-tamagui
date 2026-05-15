import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import { ComboButton } from './ComboButton'

const meta: Meta<typeof ComboButton> = {
  title: 'Moléculas/ComboButton',
  component: ComboButton,
  argTypes: {
    label: { control: 'text' },
  },
}

export default meta

type Story = StoryObj<typeof ComboButton>

export const Default: Story = {
  args: {
    label: 'Save',
    onMainPress: () => alert('Main Action'),
    options: [
      { label: 'Save as Draft', onPress: () => alert('Draft') },
      { label: 'Save and Publish', onPress: () => alert('Publish') },
    ],
  },
}

export const Destructive: Story = {
  args: {
    label: 'Delete',
    onMainPress: () => alert('Delete'),
    theme: 'red',
    options: [
      { label: 'Delete Forcefully', onPress: () => alert('Force') },
      { label: 'Archive', onPress: () => alert('Archive') },
    ],
  },
}
