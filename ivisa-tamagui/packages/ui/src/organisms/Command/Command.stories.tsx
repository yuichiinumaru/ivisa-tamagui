import type { Meta, StoryObj } from '@storybook/react'
import {
  Command,
  CommandDialog,
  CommandInput,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandSeparator,
  CommandShortcut,
} from './Command'
import { useState, useEffect } from 'react'
import { View, Text, Button } from 'tamagui'

const meta: Meta<typeof Command> = {
  title: 'Organisms/Command',
  component: Command,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
}

export default meta
type Story = StoryObj<typeof Command>

export const Default: Story = {
  render: () => (
    <View width={400} borderWidth={1} borderColor="$borderColor" borderRadius="$md" overflow="hidden">
      <Command>
        <CommandInput placeholder="Type a command or search..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Suggestions">
            <CommandItem onSelect={() => console.log('Calendar')}>
              <Text>Calendar</Text>
            </CommandItem>
            <CommandItem onSelect={() => console.log('Search Emoji')}>
              <Text>Search Emoji</Text>
            </CommandItem>
            <CommandItem onSelect={() => console.log('Calculator')}>
              <Text>Calculator</Text>
            </CommandItem>
          </CommandGroup>
          <CommandSeparator />
          <CommandGroup heading="Settings">
            <CommandItem onSelect={() => console.log('Profile')}>
              <Text>Profile</Text>
              <CommandShortcut>⌘P</CommandShortcut>
            </CommandItem>
            <CommandItem onSelect={() => console.log('Billing')}>
              <Text>Billing</Text>
              <CommandShortcut>⌘B</CommandShortcut>
            </CommandItem>
            <CommandItem onSelect={() => console.log('Settings')}>
              <Text>Settings</Text>
              <CommandShortcut>⌘S</CommandShortcut>
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </Command>
    </View>
  ),
}

export const DialogDemo = () => {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setOpen((open) => !open)
      }
    }
    document.addEventListener('keydown', down)
    return () => document.removeEventListener('keydown', down)
  }, [])

  return (
    <>
      <Text fontSize="$md" color="$mutedForeground">
        Press{' '}
        <Text fontWeight="bold" fontSize="$md">
          ⌘K
        </Text>{' '}
        to open the command dialog
      </Text>
      <Text fontSize="$sm" color="$mutedForeground" marginTop="$2">
        (Or click the button below)
      </Text>
      <Button onPress={() => setOpen(true)} marginTop="$lg">Open Command Dialog</Button>

      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Type a command or search..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Suggestions">
            <CommandItem>
              <Text>Calendar</Text>
            </CommandItem>
            <CommandItem>
              <Text>Search Emoji</Text>
            </CommandItem>
            <CommandItem>
              <Text>Calculator</Text>
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  )
}
