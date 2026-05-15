import React from 'react'
import { Meta, StoryObj } from '@storybook/react'
import { Dropzone } from './Dropzone'

const meta: Meta<typeof Dropzone> = {
  title: 'Átomos/Dropzone',
  component: Dropzone,
}

export default meta

type Story = StoryObj<typeof Dropzone>

export const Default: Story = {
  args: {
    onDrop: (files) => console.log('Dropped files:', files),
    accept: 'image/*',
  },
}

export const Active: Story = {
  render: (args) => <Dropzone {...args} />,
  parameters: {
    pseudo: { hover: true }, // Simulate hover state if plugin available, otherwise manual check
  },
}
