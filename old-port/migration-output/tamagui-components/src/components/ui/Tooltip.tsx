import React from 'react'
import { Text } from 'tamagui'
import { Portal } from '@tamagui/portal'
export const Tooltip: React.FC<any> = (props) => 
  <Portal><Text>{props.children || "Tooltip"}</Text></Portal>