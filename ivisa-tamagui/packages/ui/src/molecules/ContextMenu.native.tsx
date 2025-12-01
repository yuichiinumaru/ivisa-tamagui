import React from 'react'

export type ContextMenuEntry = {
  label?: string
  shortcut?: string
  onSelect?: () => void
  disabled?: boolean
  type?: 'separator' | 'sub' | 'item'
  children?: ContextMenuEntry[]
}

export type ContextMenuProps = {
  children: React.ReactNode
  items: ContextMenuEntry[]
}

export const ContextMenu = ({ children }: ContextMenuProps) => {
  // ContextMenu is currently web-only (wraps Radix UI).
  // On Native, we pass through children to avoid breaking the tree.
  // Future: Implement using react-native-context-menu-view or Sheet.
  return <>{children}</>
}
