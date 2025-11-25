import type { Meta, StoryObj } from '@storybook/react'
import { Popover, PopoverTrigger, PopoverContent, PopoverClose } from './Popover'
import { IvisaButton } from '../atoms/Button'
import { IvisaInput } from '../atoms/Input'
import { Text, Label, XStack, YStack } from 'tamagui'

const meta: Meta<typeof Popover> = {
  title: 'Molecules/Popover',
  component: Popover,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <Popover size="$5" allowFlip placement="bottom">
      <PopoverTrigger asChild>
        <IvisaButton variant="outline">Open Popover</IvisaButton>
      </PopoverTrigger>
      <PopoverContent>
        <YStack gap="$3" width={300}>
          <Text fontWeight="600" fontSize="$4">Dimensions</Text>
          <Text fontSize="$3" color="$mutedForeground">Set the dimensions for the layer.</Text>
          
          <XStack alignItems="center" gap="$4">
            <Label width={90} htmlFor="width">Width</Label>
            <IvisaInput flex={1} id="width" defaultValue="100%" />
          </XStack>
          
          <XStack alignItems="center" gap="$4">
            <Label width={90} htmlFor="maxWidth">Max. width</Label>
            <IvisaInput flex={1} id="maxWidth" defaultValue="300px" />
          </XStack>
          
          <XStack alignItems="center" gap="$4">
            <Label width={90} htmlFor="height">Height</Label>
            <IvisaInput flex={1} id="height" defaultValue="25px" />
          </XStack>
        </YStack>
      </PopoverContent>
    </Popover>
  ),
}
