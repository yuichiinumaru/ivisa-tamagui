// removed // @ts-nocheck to enable type checking
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

// Removed trailing alias exports to avoid duplicate-type declarations
