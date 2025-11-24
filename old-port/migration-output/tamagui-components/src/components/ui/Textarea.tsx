import React from 'react'
import { Text } from 'tamagui'
export const Textarea: React.FC<any> = (props) => <Text>{props.children || "Textarea placeholder"}</Text>