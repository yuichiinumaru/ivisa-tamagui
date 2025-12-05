import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetFooter,
  SheetTitle,
  SheetDescription,
} from './Sheet'
import { Button } from '../atoms/Button'
import { Input } from '../atoms/Input'
import { Label, YStack } from 'tamagui'

const meta: Meta<typeof Sheet> = {
  title: 'Molecules/Sheet',
  component: Sheet,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => {
    const [open, setOpen] = React.useState(false)
    return (
      <Sheet open={open} onOpenChange={setOpen}>
        <Button variant="outline" onPress={() => setOpen(true)}>Open</Button>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Edit profile</SheetTitle>
            <SheetDescription>
              Make changes to your profile here. Click save when you're done.
            </SheetDescription>
          </SheetHeader>
          <YStack gap="$4" py="$4">
            <YStack gap="$1">
              <Label htmlFor="name">Name</Label>
              <Input id="name" defaultValue="Pedro Duarte" />
            </YStack>
            <YStack gap="$1">
              <Label htmlFor="username">Username</Label>
              <Input id="username" defaultValue="@peduarte" />
            </YStack>
          </YStack>
          <SheetFooter>
            <Button onPress={() => setOpen(false)}>Save changes</Button>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    )
  },
}
