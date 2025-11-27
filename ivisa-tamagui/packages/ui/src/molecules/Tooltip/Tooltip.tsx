import { Tooltip as TamaguiTooltip, TooltipProps as TamaguiTooltipProps, styled, Paragraph } from 'tamagui'
import React from 'react'

const TooltipContent = styled(TamaguiTooltip.Content, {
  name: 'TooltipContent',
  enterStyle: { x: 0, y: -5, opacity: 0, scale: 0.9 },
  exitStyle: { x: 0, y: -5, opacity: 0, scale: 0.9 },
  scale: 1,
  x: 0,
  y: 0,
  opacity: 1,
  animation: 'quick',
  maxWidth: 350,
  padding: '$2',
  backgroundColor: '$background',
  borderColor: '$borderColor',
  borderWidth: 1,
  borderRadius: '$md',
  zIndex: 1000,
})

const TooltipArrow = styled(TamaguiTooltip.Arrow, {
  name: 'TooltipArrow',
  borderColor: '$borderColor',
  borderWidth: 1,
  backgroundColor: '$background',
})

export interface TooltipProps extends TamaguiTooltipProps {
  content: React.ReactNode
  trigger?: React.ReactNode
}

export const Tooltip = React.forwardRef<any, TooltipProps>(({ children, content, ...props }, ref) => {
  return (
    <TamaguiTooltip {...props}>
      <TamaguiTooltip.Trigger asChild>
        {children}
      </TamaguiTooltip.Trigger>
      <TooltipContent>
        <TooltipArrow />
        {typeof content === 'string' ? <Paragraph size="$2">{content}</Paragraph> : content}
      </TooltipContent>
    </TamaguiTooltip>
  )
})

Tooltip.displayName = 'Tooltip'
