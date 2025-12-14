import type { Meta, StoryObj } from '@storybook/react'
import { ImageAnnotator } from './ImageAnnotator'

const meta: Meta<typeof ImageAnnotator> = {
  title: 'Organismos/ImageAnnotator',
  component: ImageAnnotator,
  tags: ['autodocs'],
  args: {
    imageUrl: 'https://images.unsplash.com/photo-1590611936760-eeb9f5920d34?q=80&w=1000&auto=format&fit=crop',
    strokeColor: 'red',
  },
}

export default meta
type Story = StoryObj<typeof ImageAnnotator>

export const Default: Story = {}

export const InspectionMode: Story = {
  args: {
    strokeColor: '#ff0000',
  },
}
