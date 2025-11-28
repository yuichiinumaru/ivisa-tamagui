import type { Meta, StoryObj } from '@storybook/react'
import {
  ResizablePanelGroup,
  ResizablePanel,
  ResizableHandle,
} from './Resizable'
import { YStack, XStack, Paragraph } from 'tamagui'

const meta: Meta<typeof ResizablePanelGroup> = {
  title: 'molecules/Resizable',
  component: ResizablePanelGroup,
  tags: ['autodocs'],
  argTypes: {
    direction: {
      control: 'select',
      options: ['horizontal', 'vertical'],
      description: 'The layout direction of the panels.',
    },
  },
  parameters: {
    layout: 'centered',
  },
}

export default meta

type Story = StoryObj<typeof ResizablePanelGroup>

const ResizableContainer = (props: { children: React.ReactNode }) => (
  <YStack width={500} height={300} borderWidth={1} borderColor="$borderColor" borderRadius="$4" overflow="hidden">
    {props.children}
  </YStack>
);

export const Horizontal: Story = {
  args: {
    direction: 'horizontal',
    children: (
      <ResizableContainer>
        <ResizablePanelGroup direction="horizontal">
          <ResizablePanel defaultSize={50}>
            <XStack flex={1} alignItems="center" justifyContent="center">
              <Paragraph>Panel A</Paragraph>
            </XStack>
          </ResizablePanel>
          <ResizableHandle />
          <ResizablePanel defaultSize={50}>
            <XStack flex={1} alignItems="center" justifyContent="center">
              <Paragraph>Panel B</Paragraph>
            </XStack>
          </ResizablePanel>
        </ResizablePanelGroup>
      </ResizableContainer>
    ),
  },
}

export const Vertical: Story = {
  args: {
    direction: 'vertical',
    children: (
      <ResizableContainer>
        <ResizablePanelGroup direction="vertical">
          <ResizablePanel defaultSize={50}>
            <YStack flex={1} alignItems="center" justifyContent="center">
              <Paragraph>Panel A</Paragraph>
            </YStack>
          </ResizablePanel>
          <ResizableHandle />
          <ResizablePanel defaultSize={50}>
            <YStack flex={1} alignItems="center" justifyContent="center">
              <Paragraph>Panel B</Paragraph>
            </YStack>
          </ResizablePanel>
        </ResizablePanelGroup>
      </ResizableContainer>
    ),
  },
}

export const WithCustomSizes: Story = {
  args: {
    direction: 'horizontal',
    children: (
      <ResizableContainer>
        <ResizablePanelGroup direction="horizontal">
          <ResizablePanel defaultSize={30}>
            <XStack flex={1} alignItems="center" justifyContent="center">
              <Paragraph>Panel A (30%)</Paragraph>
            </XStack>
          </ResizablePanel>
          <ResizableHandle />
          <ResizablePanel defaultSize={70}>
            <XStack flex={1} alignItems="center" justifyContent="center">
              <Paragraph>Panel B (70%)</Paragraph>
            </XStack>
          </ResizablePanel>
        </ResizablePanelGroup>
      </ResizableContainer>
    ),
  },
}
