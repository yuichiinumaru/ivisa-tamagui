import React from 'react'
import { Text } from 'tamagui'
import { Portal } from '@tamagui/portal'
export const Dropdown: React.FC<any> = (props) => 
  <Portal><Text>{props.children || "Dropdown"}</Text></Portal>