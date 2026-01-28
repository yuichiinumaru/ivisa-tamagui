// Removed @ts-nocheck — enabling type checking

import { Tooltip as TamaguiTooltip, TooltipProps as TamaguiTooltipProps, styled, Paragraph, YStack, XStack, Portal } from 'tamagui'
import React from 'react'
import { Skeleton } from '../../atoms/Skeleton'

export const TooltipContent = styled(TamaguiTooltip.Content, {
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
  zIndex: 100000, // Increased zIndex

  variants: {
    hasError: {
      true: {
        borderColor: '$destructive',
      },
    },
  },
})

export const TooltipArrow = styled(TamaguiTooltip.Arrow, {
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

export const TooltipTrigger = TamaguiTooltip.Trigger

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
      <TooltipTrigger asChild>
        {children}
      </TooltipTrigger>
      {/*
        NOTE: Tamagui's Tooltip.Content is usually portaled by default or controlled via wrapping context.
        If clipping occurs, it is because of the stacking context.
        Adding specific Portal might be needed if not implicit, but Tamagui often handles it.
        We increased zIndex to 100000.
        If explicit Portal is needed, we would use <TamaguiTooltip.Portal> if available.
        According to Tamagui docs, we should place Content inside Portal.
      */}
      <Portal>
        <TooltipContent hasError={hasError}>
          <TooltipArrow hasError={hasError} />
          <YStack gap="$2">
            {typeof content === 'string' ? <Paragraph size="$2">{content}</Paragraph> : content}
            {actions && <XStack gap="$2">{actions}</XStack>}
          </YStack>
        </TooltipContent>
      </Portal>
    </TamaguiTooltip>
  )
})

Tooltip.displayName = 'Tooltip'

export type TooltipContentProps = React.ComponentProps<typeof TooltipContent>

export type TooltipArrowProps = React.ComponentProps<typeof TooltipArrow>

export type TooltipTriggerProps = React.ComponentProps<typeof TooltipTrigger>
