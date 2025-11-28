import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import {
  ResizablePanelGroup,
  ResizablePanel,
  ResizableHandle,
} from './Resizable'
import { YStack, Text } from 'tamagui'

const meta: Meta<typeof ResizablePanelGroup> = {
  title: 'Molecules/Resizable',
  component: ResizablePanelGroup,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof meta>

export const Horizontal: Story = {
  render: () => (
    <ResizablePanelGroup
      direction="horizontal"
      width={600}
      height={300}
      borderWidth={1}
      borderColor="$borderColor"
      borderRadius="$md"
    >
      <ResizablePanel defaultSize={50}>
        <YStack flex={1} alignItems="center" justifyContent="center">
          <Text>One</Text>
        </YStack>
      </ResizablePanel>
      <ResizableHandle />
      <ResizablePanel defaultSize={50}>
        <YStack flex={1} alignItems="center" justifyContent="center">
          <Text>Two</Text>
        </YStack>
      </ResizablePanel>
    </ResizablePanelGroup>
  ),
}

export const Vertical: Story = {
  render: () => (
    <ResizablePanelGroup
      direction="vertical"
      width={600}
      height={300}
      borderWidth={1}
      borderColor="$borderColor"
      borderRadius="$md"
    >
      <ResizablePanel defaultSize={25}>
        <YStack flex={1} alignItems="center" justifyContent="center">
          <Text>One</Text>
        </YStack>
      </ResizablePanel>
      <ResizableHandle />
      <ResizablePanel defaultSize={75}>
        <YStack flex={1} alignItems="center" justifyContent="center">
          <Text>Two</Text>
        </YStack>
      </ResizablePanel>
    </ResizablePanelGroup>
  ),
}
