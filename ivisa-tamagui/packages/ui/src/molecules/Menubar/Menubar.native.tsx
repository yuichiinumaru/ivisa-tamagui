import React from 'react'
import { View, styled } from 'tamagui'

// 💀 The Rite of Resurrection: Safe Native Stub
// This file exists to prevent React Native from crashing when importing @ivisa/ui.
// Menubar is a desktop-only pattern. On native, it renders nothing or minimal fallbacks.

const StubComponent = (name: string) => {
  const Component = styled(View, {
    name,
    display: 'none', // Hide by default on native
  })
  return Component
}

export const Menubar = StubComponent('Menubar')
export const MenubarMenu = StubComponent('MenubarMenu')
export const MenubarTrigger = StubComponent('MenubarTrigger')
export const MenubarContent = StubComponent('MenubarContent')
export const MenubarItem = StubComponent('MenubarItem')
export const MenubarSeparator = StubComponent('MenubarSeparator')
export const MenubarLabel = StubComponent('MenubarLabel')
export const MenubarCheckboxItem = StubComponent('MenubarCheckboxItem')
export const MenubarRadioGroup = StubComponent('MenubarRadioGroup')
export const MenubarRadioItem = StubComponent('MenubarRadioItem')
export const MenubarPortal = StubComponent('MenubarPortal')
export const MenubarSubContent = StubComponent('MenubarSubContent')
export const MenubarSubTrigger = StubComponent('MenubarSubTrigger')
export const MenubarGroup = StubComponent('MenubarGroup')
export const MenubarSub = StubComponent('MenubarSub')
export const MenubarShortcut = StubComponent('MenubarShortcut')

export type MenubarProps = React.ComponentProps<typeof Menubar>

export type MenubarMenuProps = React.ComponentProps<typeof MenubarMenu>

export type MenubarTriggerProps = React.ComponentProps<typeof MenubarTrigger>

export type MenubarContentProps = React.ComponentProps<typeof MenubarContent>

export type MenubarItemProps = React.ComponentProps<typeof MenubarItem>

export type MenubarSeparatorProps = React.ComponentProps<typeof MenubarSeparator>

export type MenubarLabelProps = React.ComponentProps<typeof MenubarLabel>

export type MenubarCheckboxItemProps = React.ComponentProps<typeof MenubarCheckboxItem>

export type MenubarRadioGroupProps = React.ComponentProps<typeof MenubarRadioGroup>

export type MenubarRadioItemProps = React.ComponentProps<typeof MenubarRadioItem>

export type MenubarPortalProps = React.ComponentProps<typeof MenubarPortal>

export type MenubarSubContentProps = React.ComponentProps<typeof MenubarSubContent>

export type MenubarSubTriggerProps = React.ComponentProps<typeof MenubarSubTrigger>

export type MenubarGroupProps = React.ComponentProps<typeof MenubarGroup>

export type MenubarSubProps = React.ComponentProps<typeof MenubarSub>

export type MenubarShortcutProps = React.ComponentProps<typeof MenubarShortcut>

export type StubComponentProps = React.ComponentProps<typeof StubComponent>

