import React from 'react'
import { View, Text } from 'tamagui'
export const Table: React.FC<any> = (props) => 
  <View><Text>{props.children || "Table"}</Text></View>