import { Tooltip as TamaguiTooltip, TooltipProps as TamaguiTooltipProps, styled, Paragraph, YStack, XStack } from 'tamagui'
import React from 'react'
import { Skeleton } from '../../atoms/Skeleton'

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

  variants: {
    hasError: {
      true: {
        borderColor: '$destructive',
      },
    },
  },
})

const TooltipArrow = styled(TamaguiTooltip.Arrow, {
  name: 'TooltipArrow',
  borderColor: '$borderColor',
  borderWidth: 1,
  backgroundColor: '$background',
  variants: {
    hasError: {
      true: {
        borderColor: '$destructive',
      },
    },
  },
})

export interface TooltipProps extends TamaguiTooltipProps {
  content: React.ReactNode
  trigger?: React.ReactNode
  isLoading?: boolean
  hasError?: boolean
  isDisabled?: boolean
  actions?: React.ReactNode
}

export const Tooltip = React.forwardRef<unknown, TooltipProps>(({ children, content, isLoading = false, hasError = false, isDisabled = false, actions, ...props }, _ref) => {
  if (isLoading) {
    return <Skeleton />
  }

  return (
    <TamaguiTooltip {...props} disabled={isDisabled}>
      <TamaguiTooltip.Trigger asChild>
        {children}
      </TamaguiTooltip.Trigger>
      <TooltipContent hasError={hasError}>
        <TooltipArrow hasError={hasError} />
        <YStack gap="$2">
          {typeof content === 'string' ? <Paragraph size="$2">{content}</Paragraph> : content}
          {actions && <XStack gap="$2">{actions}</XStack>}
        </YStack>
      </TooltipContent>
    </TamaguiTooltip>
  )
})

Tooltip.displayName = 'Tooltip'
