import type { Meta, StoryObj } from '@storybook/react'
import { Empty } from './Empty'
import { Button } from '../../atoms/Button'
import { Ban } from '@tamagui/lucide-icons'

const meta: Meta<typeof Empty> = {
  title: 'Molecules/Empty',
  component: Empty,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'A component to be displayed when there is no data to show. It can contain an icon or image, a title, a description, and a call-to-action button.',
      },
    },
  },
  argTypes: {
    title: {
      control: 'text',
      description: 'The main title for the empty state.',
    },
    description: {
      control: 'text',
      description: 'The descriptive text for the empty state.',
    },
  },
}

export default meta
type Story = StoryObj<typeof Empty>

export const Default: Story = {
  args: {
    icon: <Ban />,
    title: 'No Data',
    description: 'There is nothing to display here.',
  },
}

export const WithImage: Story = {
  args: {
    imageSource: { uri: 'https://via.placeholder.com/100' },
    title: 'No Images Found',
    description: 'Try adjusting your search filters.',
  },
}

export const WithButton: Story = {
  args: {
    icon: <Ban />,
    title: 'No Project Created',
    description: 'Get started by creating a new project.',
    children: <Button marginTop="$4">Create Project</Button>,
  },
}
