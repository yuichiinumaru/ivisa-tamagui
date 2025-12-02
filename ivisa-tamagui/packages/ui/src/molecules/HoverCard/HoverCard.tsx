import React from 'react'
import { Popover, PopoverTrigger, PopoverContent } from '../Popover'
import { GetProps } from 'tamagui'

export type HoverCardProps = GetProps<typeof Popover>

export const HoverCard = (props: HoverCardProps) => {
  return <Popover hoverable {...props} />
}

export const HoverCardTrigger = PopoverTrigger
export const HoverCardContent = PopoverContent
