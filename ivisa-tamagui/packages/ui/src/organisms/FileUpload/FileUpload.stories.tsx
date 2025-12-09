import type { Meta, StoryObj } from '@storybook/react'
import { FileUpload } from './FileUpload'

const meta: Meta<typeof FileUpload> = {
  title: 'Organisms/FileUpload',
  component: FileUpload,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'FileUpload provides a dropzone area for file selection.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    onFileSelect: { action: 'selected' },
    accept: { control: 'text' },
  },
}

export default meta

type Story = StoryObj<typeof FileUpload>

export const Default: Story = {
  args: {},
}

export const ImagesOnly: Story = {
  args: {
    accept: 'image/*',
  },
}
