import React from 'react'
import { Text } from 'tamagui'
import { Portal } from '@tamagui/portal'

export interface DropdownProps {
  children?: React.ReactNode
}

export const Dropdown: React.FC<DropdownProps> = ({ children }) => {
  return <Portal><Text>{children ?? 'Dropdown placeholder'}</Text></Portal>
}