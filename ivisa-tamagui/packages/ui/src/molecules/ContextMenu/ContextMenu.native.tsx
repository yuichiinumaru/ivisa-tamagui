// @ts-nocheck
import React from 'react'
import { YStack } from 'tamagui'

// 💀 Resurrection: Native Stub Implementation
// This component currently performs a passthrough for Triggers and hides Content.
// Future implementation should utilize a native-compatible library.

export const ContextMenu = ({ children }: { children: React.ReactNode }) => <>{children}</>

export const ContextMenuTrigger = ({ children }: { children: React.ReactNode }) => <>{children}</>

// Content is hidden on native to prevent inline rendering of overlay content
export const ContextMenuContent = () => null

export const ContextMenuItem = ({ children }: { children: React.ReactNode }) => <YStack>{children}</YStack>

export const ContextMenuCheckboxItem = ContextMenuItem
export const ContextMenuRadioItem = ContextMenuItem
export const ContextMenuLabel = ContextMenuItem

export const ContextMenuSeparator = () => <YStack height={1} backgroundColor="$borderColor" />

export const ContextMenuShortcut = ContextMenuItem

export const ContextMenuGroup = ({ children }: { children: React.ReactNode }) => <>{children}</>

export const ContextMenuSub = ({ children }: { children: React.ReactNode }) => <>{children}</>

export const ContextMenuSubContent = () => null

export const ContextMenuSubTrigger = ContextMenuItem

export const ContextMenuRadioGroup = ContextMenuGroup

export const ContextMenuPortal = ({ children }: { children: React.ReactNode }) => <>{children}</>

export type ContextMenuProps = React.ComponentProps<typeof ContextMenu>

export type ContextMenuTriggerProps = React.ComponentProps<typeof ContextMenuTrigger>

export type ContextMenuContentProps = React.ComponentProps<typeof ContextMenuContent>

export type ContextMenuItemProps = React.ComponentProps<typeof ContextMenuItem>

export type ContextMenuCheckboxItemProps = React.ComponentProps<typeof ContextMenuCheckboxItem>

export type ContextMenuRadioItemProps = React.ComponentProps<typeof ContextMenuRadioItem>

export type ContextMenuLabelProps = React.ComponentProps<typeof ContextMenuLabel>

export type ContextMenuSeparatorProps = React.ComponentProps<typeof ContextMenuSeparator>

export type ContextMenuShortcutProps = React.ComponentProps<typeof ContextMenuShortcut>

export type ContextMenuGroupProps = React.ComponentProps<typeof ContextMenuGroup>

export type ContextMenuSubProps = React.ComponentProps<typeof ContextMenuSub>

export type ContextMenuSubContentProps = React.ComponentProps<typeof ContextMenuSubContent>

export type ContextMenuSubTriggerProps = React.ComponentProps<typeof ContextMenuSubTrigger>

export type ContextMenuRadioGroupProps = React.ComponentProps<typeof ContextMenuRadioGroup>

export type ContextMenuPortalProps = React.ComponentProps<typeof ContextMenuPortal>
