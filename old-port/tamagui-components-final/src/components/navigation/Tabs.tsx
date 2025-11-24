import React from 'react'
import { View, Text } from 'tamagui'
export const Tabs: React.FC<any> = (props) => 
  <View><Text>{props.children || "Tabs"}</Text></View>