
import React, { cloneElement, isValidElement, ReactElement, ReactNode, useId } from 'react'

import {
  styled,
  Tooltip as TamaguiTooltip,
  TooltipProps as TamaguiTooltipProps,
  TooltipGroup,
} from 'tamagui'

import { withErrorLogging } from '../../utils/withErrorLogging'
import { logComponentWarning } from '../../utils/logging'

export const TooltipContent = styled(TamaguiTooltip.Content, {
  name: 'TooltipContent',
  enterStyle: { y: -10, opacity: 0 },
  exitStyle: { y: -10, opacity: 0 },
  elevate: true,
  animation: [
    'quick',
    {
      opacity: {
        overshootClamping: true,
      },
    },
  ],

  backgroundColor: '$background',
  borderColor: '$borderColor',
  borderWidth: 1,
  padding: '$3',
  borderRadius: '$4',
  shadowColor: '$shadowColor',
  shadowOffset: { width: 0, height: 2 },
  shadowOpacity: 0.1,
  shadowRadius: 10,
  elevation: 5,
})

export const TooltipArrow = styled(TamaguiTooltip.Arrow, {
  name: 'TooltipArrow',
  backgroundColor: '$borderColor',
})

export interface TooltipProps extends TamaguiTooltipProps {
  children: ReactNode
  content: ReactNode
  /**
   * Explicit override useful for test environments where touch capability detection is unreliable.
   */
  touchDeviceOverride?: boolean
  /** Alignment hint used only for warnings; not forwarded to Tamagui. */
  align?: 'center' | 'start' | 'end'
}

const TOUCH_DELAY = 0
const DESKTOP_DELAY = 700
const DEFAULT_CLOSE_DELAY = 150

const isTouchDevice = () => {
  if (typeof navigator !== 'undefined' && navigator.maxTouchPoints > 0) {
    return true
  }

  if (typeof window !== 'undefined' && 'ontouchstart' in window) {
    return true
  }

  return false
}

const mergeDescribedBy = (existing: unknown, generatedId: string) => {
  if (typeof existing === 'string' && existing.trim().length > 0) {
    const ids = new Set(existing.split(/\s+/))
    ids.add(generatedId)
    return Array.from(ids).join(' ')
  }

  return generatedId
}

const TooltipImpl = React.forwardRef<
  React.ElementRef<typeof TamaguiTooltip>,
  TooltipProps
>(({ children, content, align = 'center', touchDeviceOverride, delay, ...props }, ref) => {
  const tooltipId = useId()
  const isTouch = typeof touchDeviceOverride === 'boolean' ? touchDeviceOverride : isTouchDevice()
  const fallbackOpenDelay = isTouch ? TOUCH_DELAY : DESKTOP_DELAY

  const normaliseDelay = (value: TooltipProps['delay']): { open: number; close: number } => {
    if (typeof value === 'number') {
      return { open: value, close: DEFAULT_CLOSE_DELAY }
    }

    if (value && typeof value === 'object') {
      return {
        open: value.open ?? fallbackOpenDelay,
        close: value.close ?? DEFAULT_CLOSE_DELAY,
      }
    }

    return { open: fallbackOpenDelay, close: DEFAULT_CLOSE_DELAY }
  }

  const delayConfig = normaliseDelay(delay)

  if (align !== 'center') {
    logComponentWarning('Tooltip', `align "${align}" may misalign arrow`)
  }

  const triggerChild = isValidElement(children)
    ? cloneElement(children as ReactElement, {
        'aria-describedby': mergeDescribedBy(children.props['aria-describedby'], tooltipId),
      })
    : children

  return (
    <TooltipGroup delay={delayConfig}>
      <TamaguiTooltip ref={ref} {...props}>
        <TamaguiTooltip.Trigger asChild>{triggerChild}</TamaguiTooltip.Trigger>
        <TooltipContent id={tooltipId} aria-live="polite" role="tooltip">
          <TooltipArrow />
          {content}
        </TooltipContent>
      </TamaguiTooltip>
    </TooltipGroup>
  )
})

TooltipImpl.displayName = 'Tooltip'

export const Tooltip = withErrorLogging<TooltipProps, React.ElementRef<typeof TamaguiTooltip>>(
  'Tooltip',
  TooltipImpl
)
