import React from 'react'
import { View, Text } from 'tamagui'
export const Accordion: React.FC<any> = (props) => 
  <View><Text>{props.children || "Accordion"}</Text></View>