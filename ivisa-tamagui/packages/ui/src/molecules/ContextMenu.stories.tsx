import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { ContextMenu, ContextMenuEntry } from './ContextMenu'
import { YStack, Text } from 'tamagui'

const meta: Meta<typeof ContextMenu> = {
  title: 'Molecules/ContextMenu',
  component: ContextMenu,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof meta>

const menuItems: ContextMenuEntry[] = [
  { label: 'Back', shortcut: '⌘[', onSelect: () => console.log('Back') },
  { label: 'Forward', shortcut: '⌘]', disabled: true },
  { label: 'Reload', shortcut: '⌘R' },
  { type: 'separator' },
  {
    label: 'More Tools',
    type: 'sub',
    children: [
      { label: 'Save Page As...', shortcut: '⇧⌘S' },
      { label: 'Create Shortcut...' },
      { label: 'Name Window...' },
    ],
  },
  { type: 'separator' },
  { label: 'Developer Tools' },
]

export const Default: Story = {
  render: () => (
    <ContextMenu items={menuItems}>
      <YStack
        width={300}
        height={200}
        borderWidth={1}
        borderColor="$borderColor"
        borderRadius="$md"
        alignItems="center"
        justifyContent="center"
      >
        <Text>Right-click here</Text>
      </YStack>
    </ContextMenu>
  ),
}
