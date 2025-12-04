import type { Meta, StoryObj } from '@storybook/react'
import { Video } from './Video'

const meta: Meta<typeof Video> = {
  title: 'Organisms/Video',
  component: Video,
  tags: ['autodocs'],
  argTypes: {
    src: { control: 'text' },
  },
}

export default meta
type Story = StoryObj<typeof Video>

export const Default: Story = {
  args: {
    src: 'https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4',
    height: 300,
  },
}
