import type { Meta, StoryObj } from '@storybook/react'
import { Stack, HStack, VStack } from './Stack'
import { View, Text } from 'tamagui'

const meta: Meta<typeof Stack> = {
  title: 'atoms/Stack',
  component: Stack,
  tags: ['autodocs'],
  argTypes: {
    gap: {
      control: { type: 'select' },
      options: ['$2', '$4', '$6'],
    },
    p: {
      control: { type: 'select' },
      options: ['$2', '$4', '$6'],
    }
  },
  render: (args) => (
    <Stack {...args} bc="$background" borderWidth={1} borderColor="$borderColor" borderRadius="$4">
        <View p="$4" bc="$primary" borderRadius="$3"><Text color="$primaryForeground">Item 1</Text></View>
        <View p="$4" bc="$secondary" borderRadius="$3"><Text color="$secondaryForeground">Item 2</Text></View>
        <View p="$4" bc="$accent" borderRadius="$3"><Text color="$accentForeground">Item 3</Text></View>
    </Stack>
  )
}

export default meta

type Story = StoryObj<typeof Stack>

export const Default: Story = {
  args: {
    p: '$4',
    gap: '$4',
  },
}

export const Horizontal: Story = {
    name: "HStack",
    render: (args) => (
        <HStack {...args} bc="$background" borderWidth={1} borderColor="$borderColor" borderRadius="$4">
            <View p="$4" bc="$primary" borderRadius="$3"><Text color="$primaryForeground">Item 1</Text></View>
            <View p="$4" bc="$secondary" borderRadius="$3"><Text color="$secondaryForeground">Item 2</Text></View>
            <View p="$4" bc="$accent" borderRadius="$3"><Text color="$accentForeground">Item 3</Text></View>
        </HStack>
      ),
      args: {
        p: '$4',
        gap: '$4',
      },
}

export const Vertical: Story = {
    name: "VStack",
    render: (args) => (
        <VStack {...args} bc="$background" borderWidth={1} borderColor="$borderColor" borderRadius="$4">
            <View p="$4" bc="$primary" borderRadius="$3"><Text color="$primaryForeground">Item 1</Text></View>
            <View p="$4" bc="$secondary" borderRadius="$3"><Text color="$secondaryForeground">Item 2</Text></View>
            <View p="$4" bc="$accent" borderRadius="$3"><Text color="$accentForeground">Item 3</Text></View>
        </VStack>
      ),
      args: {
        p: '$4',
        gap: '$4',
      },
}
