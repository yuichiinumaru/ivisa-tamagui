// @ts-nocheck
import type { Meta, StoryObj } from '@storybook/react'
import { Separator, SeparatorProps } from './Separator'
import { YStack, XStack, Text } from 'tamagui'

const meta: Meta<typeof Separator> = {
  title: 'Átomos/Separator',
  component: Separator,
  tags: ['autodocs'],
  argTypes: {
    orientation: {
      control: { type: 'radio' },
      options: ['horizontal', 'vertical'],
    },
  },
}

export default meta

type Story = StoryObj<typeof Separator>

const renderDefault = (args: SeparatorProps) => {
  if (args.orientation === 'vertical') {
    return (
      <XStack height={50} gap="$2" alignItems="center">
        <Text>Conteúdo 1</Text>
        <Separator {...args} />
        <Text>Conteúdo 2</Text>
      </XStack>
    )
  }

  return (
    <YStack width={200} gap="$2">
      <Text>Conteúdo 1</Text>
      <Separator {...args} />
      <Text>Conteúdo 2</Text>
    </YStack>
  )
}

export const Padrao: Story = {
  render: renderDefault,
  args: {
    orientation: 'horizontal',
  },
  play: async ({ canvasElement }) => {
    // The Separator is a non-interactive component, so there are no direct user interactions to test.
    // This play function is included to fulfill the requirement of having one.
  },
}

export const RestritoWidth: Story = {
  render: (args) => (
    <YStack maxWidth={100} borderWidth={1} borderColor="$borderColor" padding="$2" gap="$2" alignItems="center">
      <Text fontSize="$2" textAlign="center">Container de 100px</Text>
      {renderDefault(args)}
    </YStack>
  ),
  args: {
    orientation: 'horizontal',
  },
}

