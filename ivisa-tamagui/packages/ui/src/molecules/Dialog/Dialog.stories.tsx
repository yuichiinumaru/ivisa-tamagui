import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogFooter, DialogTitle, DialogDescription, DialogClose } from './Dialog'
import { Button } from '../../atoms/Button'
import { Input } from '../../atoms/Input'
import { Label, XStack, YStack } from 'tamagui'

const meta: Meta<typeof Dialog> = {
  title: 'Molecules/Dialog',
  component: Dialog,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <Dialog modal>
      <DialogTrigger asChild>
        <Button variant="outline">Edit Profile</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Edit profile</DialogTitle>
          <DialogDescription>
            Make changes to your profile here. Click save when you're done.
          </DialogDescription>
        </DialogHeader>
        <YStack gap="$4" py="$4">
          <XStack alignItems="center" gap="$4">
            <Label width={90} htmlFor="name">
              Name
            </Label>
            <Input flex={1} id="name" defaultValue="Pedro Duarte" />
          </XStack>
          <XStack alignItems="center" gap="$4">
            <Label width={90} htmlFor="username">
              Username
            </Label>
            <Input flex={1} id="username" defaultValue="@peduarte" />
          </XStack>
        </YStack>
        <DialogFooter>
          <DialogClose asChild>
            <Button>Save changes</Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  ),
}

export const AlertStyle: Story = {
  render: () => (
    <Dialog modal>
      <DialogTrigger asChild>
        <Button variant="destructive">Delete Account</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Are you absolutely sure?</DialogTitle>
          <DialogDescription>
            This action cannot be undone. This will permanently delete your account and remove your data from our servers.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <DialogClose asChild>
            <Button variant="outline">Cancel</Button>
          </DialogClose>
          <Button variant="destructive">Continue</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  ),
}
