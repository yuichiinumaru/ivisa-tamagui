import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogFooter, DialogTitle, DialogDescription, DialogClose } from './Dialog'
import { IvisaButton } from '../atoms/Button'
import { IvisaInput } from '../atoms/Input'
import { Label, XStack, YStack, Text } from 'tamagui'

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
        <IvisaButton variant="outline">Edit Profile</IvisaButton>
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
            <IvisaInput flex={1} id="name" defaultValue="Pedro Duarte" />
          </XStack>
          <XStack alignItems="center" gap="$4">
            <Label width={90} htmlFor="username">
              Username
            </Label>
            <IvisaInput flex={1} id="username" defaultValue="@peduarte" />
          </XStack>
        </YStack>
        <DialogFooter>
          <DialogClose asChild>
            <IvisaButton>Save changes</IvisaButton>
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
        <IvisaButton variant="destructive">Delete Account</IvisaButton>
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
            <IvisaButton variant="outline">Cancel</IvisaButton>
          </DialogClose>
          <IvisaButton variant="destructive">Continue</IvisaButton>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  ),
}
