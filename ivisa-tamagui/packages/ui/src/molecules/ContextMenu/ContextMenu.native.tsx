import React from 'react'
import { YStack } from 'tamagui'

export const ContextMenu = ({ children }: { children: React.ReactNode }) => <>{children}</>
export const ContextMenuTrigger = ({ children }: { children: React.ReactNode }) => <>{children}</>
// Hide content on native to prevent inline rendering
export const ContextMenuContent = ({ children }: { children: React.ReactNode }) => null
export const ContextMenuItem = ({ children }: { children: React.ReactNode }) => <YStack>{children}</YStack>
export const ContextMenuCheckboxItem = ContextMenuItem
export const ContextMenuRadioItem = ContextMenuItem
export const ContextMenuLabel = ContextMenuItem
export const ContextMenuSeparator = () => <YStack height={1} />
export const ContextMenuShortcut = ContextMenuItem
export const ContextMenuGroup = ({ children }: { children: React.ReactNode }) => <>{children}</>
export const ContextMenuSub = ({ children }: { children: React.ReactNode }) => <>{children}</>
// Hide sub-content on native
export const ContextMenuSubContent = ({ children }: { children: React.ReactNode }) => null
export const ContextMenuSubTrigger = ContextMenuItem
export const ContextMenuRadioGroup = ContextMenuGroup
export const ContextMenuPortal = ({ children }: { children: React.ReactNode }) => <>{children}</>
