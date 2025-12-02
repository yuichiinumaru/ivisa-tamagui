import React, { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Drawer, DrawerOverlay, DrawerFrame, DrawerHandle } from './Drawer'
import { Sheet } from '@tamagui/sheet'
import { Button } from '../atoms/Button/Button'
import { YStack, Text, XStack } from 'tamagui'

const meta: Meta<typeof Drawer> = {
  title: 'Molecules/Drawer',
  component: Drawer,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A drawer component built on top of Tamagui Sheet.',
      },
    },
  },
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof Drawer>

export const Default: Story = {
  render: () => {
    const [open, setOpen] = useState(false)
    return (
        <Drawer open={open} onOpenChange={setOpen}>
            <Sheet.Trigger asChild>
                <Button>Open Drawer</Button>
            </Sheet.Trigger>
            <DrawerOverlay />
            <DrawerFrame>
                <DrawerHandle />
                <YStack padding="$4" gap="$4">
                    <Text fontSize="$6" fontWeight="bold">Drawer Title</Text>
                    <Text>Drawer Content</Text>
                    <XStack justifyContent="flex-end">
                        <Button onPress={() => setOpen(false)}>Close</Button>
                    </XStack>
                </YStack>
            </DrawerFrame>
        </Drawer>
    )
  },
}
