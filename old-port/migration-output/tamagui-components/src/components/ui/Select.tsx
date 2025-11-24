import React from 'react'
import { Text } from 'tamagui'
export const Select: React.FC<any> = (props) => <Text>{props.children || "Select placeholder"}</Text>