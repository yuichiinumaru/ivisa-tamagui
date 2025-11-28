import type { Meta, StoryObj } from '@storybook/react'
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from './Sheet'
import { Button } from '../atoms/Button'
import { Input } from '../atoms/Input'
import { Paragraph, YStack, Label } from 'tamagui'
import { ScrollView } from 'react-native'

const meta: Meta<typeof Sheet> = {
  title: 'molecules/Sheet',
  component: Sheet,
  tags: ['autodocs'],
  argTypes: {
    // You can add controls for Sheet props like open, defaultOpen, snapPoints, modal, dismissOnSnapToBottom
    // For simplicity, we'll focus on demonstrating the content structure and common usage.
    animation: {
      control: 'select',
      options: ['quick', 'bouncy', 'lazy'],
      description: 'Animation type for the sheet.',
    },
    defaultOpen: {
      control: 'boolean',
      description: 'Whether the sheet is open by default.',
    },
    // snapPoints: {
    //   control: 'object',
    //   description: 'Array of numbers (0-100) that the sheet can snap to.',
    // },
  },
  render: (args) => (
    <Sheet {...args}>
      <SheetTrigger asChild>
        <Button>Open Sheet</Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Edit profile</SheetTitle>
          <SheetDescription>
            Make changes to your profile here. Click save when you're done.
          </SheetDescription>
        </SheetHeader>
        <YStack gap="$4">
          <YStack gap="$2">
            <Label htmlFor="name">Name</Label>
            <Input id="name" defaultValue="Pedro Duarte" />
          </YStack>
          <YStack gap="$2">
            <Label htmlFor="username">Username</Label>
            <Input id="username" defaultValue="@peduarte" />
          </YStack>
        </YStack>
        <SheetFooter>
          <SheetClose asChild>
            <Button variant="outline">Cancel</Button>
          </SheetClose>
          <Button>Save changes</Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  ),
}

export default meta

type Story = StoryObj<typeof Sheet>

export const Default: Story = {
  args: {
    animation: 'quick',
  },
}

export const WithSnapPoints: Story = {
  args: {
    animation: 'bouncy',
    snapPoints: [20, 50, 80], // Example snap points at 20%, 50%, and 80% height
    defaultOpen: true,
  },
}

export const LongContent: Story = {
  args: {
    animation: 'lazy',
    children: (
      <SheetTrigger asChild>
        <Button>Open Sheet with Long Content</Button>
      </SheetTrigger>
    ),
    // The render function is overridden here to provide scrollable content
    render: (args) => (
      <Sheet {...args}>
        <SheetTrigger asChild>
          <Button>Open Sheet with Long Content</Button>
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Scrollable Content</SheetTitle>
            <SheetDescription>
              This sheet contains a lot of text to demonstrate scrolling.
            </SheetDescription>
          </SheetHeader>
          <ScrollView>
            <YStack gap="$2">
              {[...Array(20)].map((_, i) => (
                <Paragraph key={i}>
                  This is a long paragraph to demonstrate scrolling in the sheet.
                  Line {i + 1}. Lorem ipsum dolor sit amet, consectetur adipiscing
                  elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                  aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                  dolor in reprehenderit in voluptate velit esse cillum dolore eu
                  fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                  proident, sunt in culpa qui officia deserunt mollit anim id est
                  laborum.
                </Paragraph>
              ))}
            </YStack>
          </ScrollView>
          <SheetFooter>
            <SheetClose asChild>
              <Button>Close</Button>
            </SheetClose>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    ),
  },
}