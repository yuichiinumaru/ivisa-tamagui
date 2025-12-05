import type { Meta, StoryObj } from '@storybook/react'
import { AspectRatio } from './AspectRatio'
import { Image } from 'tamagui'

const meta: Meta<typeof AspectRatio> = {
  title: 'Atoms/AspectRatio',
  component: AspectRatio,
  tags: ['autodocs'],
  argTypes: {
    ratio: {
      control: 'select',
      options: ['16:9', '4:3', '1:1', '21:9'],
      mapping: {
        '16:9': 16 / 9,
        '4:3': 4 / 3,
        '1:1': 1,
        '21:9': 21 / 9,
      },
      description: 'The aspect ratio of the container',
    },
  },
}

export default meta

type Story = StoryObj<typeof AspectRatio>

export const Default: Story = {
  render: (args) => (
    <AspectRatio {...args} width={300} overflow="hidden" backgroundColor="$gray5">
      <Image
        source={{
          uri: 'https://images.unsplash.com/photo-1535025183041-0991a977e25b?w=300&dpr=2&q=80',
        }}
        width="100%"
        height="100%"
        objectFit="cover"
      />
    </AspectRatio>
  ),
  args: {
    ratio: '16:9',
  },
}

export const Square: Story = {
  render: (args) => (
    <AspectRatio {...args} width={300} overflow="hidden" backgroundColor="$gray5">
      <Image
        source={{
          uri: 'https://images.unsplash.com/photo-1535025183041-0991a977e25b?w=300&dpr=2&q=80',
        }}
        width="100%"
        height="100%"
        objectFit="cover"
      />
    </AspectRatio>
  ),
  args: {
    ratio: 1,
  },
}
