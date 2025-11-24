import React from 'react'
import { Text } from 'tamagui'
import { Portal } from '@tamagui/portal'
export const Popover: React.FC<any> = (props) => 
  <Portal><Text>{props.children || "Popover"}</Text></Portal>