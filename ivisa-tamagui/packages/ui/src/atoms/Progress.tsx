import { GetProps, styled, Text, XStack } from 'tamagui'
import * as ProgressPrimitive from '@tamagui/progress'
import React from 'react'

// --- Subcomponents ---

// 1. Indicator
const ProgressIndicatorFrame = styled(ProgressPrimitive.Indicator, {
  name: 'ProgressIndicator',
  height: '100%',
  width: '100%',
  backgroundColor: '$primary',

  variants: {
    status: {
      default: { backgroundColor: '$primary' },
      success: { backgroundColor: '$green10' },
      warning: { backgroundColor: '$yellow10' },
      error: { backgroundColor: '$red10' },
    },
  },
  defaultVariants: {
    status: 'default',
  },
})

// 2. Root (Frame) - The Bar itself
const ProgressFrame = styled(ProgressPrimitive.Progress, {
  name: 'Progress',
  overflow: 'hidden',
  backgroundColor: '$secondary',
  borderRadius: 1000,
  flex: 1, // Allow it to fill space if in a stack

  variants: {
    size: {
      xs: { height: 2 },
      sm: { height: 4 },
      md: { height: 8 },
      lg: { height: 12 },
    },
  },
  defaultVariants: {
    size: 'md',
  },
})

// 3. Label (Optional internal label)
const ProgressLabel = styled(Text, {
  name: 'ProgressLabel',
  color: '$color',
  fontSize: '$3',
  marginBottom: '$2',
})

// --- Exports & Types ---

export type ProgressIndicatorProps = GetProps<typeof ProgressIndicatorFrame>
export type ProgressProps = GetProps<typeof ProgressFrame> & {
  value?: number
  /**
   * If true, displays the percentage value to the right of the bar.
   */
  showValue?: boolean
  /**
   * Label text.
   */
  label?: string
  /**
   * Status variant for the indicator (color).
   */
  status?: ProgressIndicatorProps['status']
}

// --- Main Component ---

/**
 * Progress Atom
 *
 * Displays an indicator showing the completion progress of a task.
 * Supports Compound Pattern (<Progress><Progress.Indicator /></Progress>)
 * and Facade Pattern (<Progress value={50} />).
 */
const ProgressComponent = React.forwardRef<React.ElementRef<typeof ProgressFrame>, ProgressProps>(
  ({ value, showValue, label, status, size, children, ...props }, ref) => {
    // Compound Mode: If children are present, render them directly inside the Frame.
    // NOTE: If using Compound Mode, automatic label/value placement is disabled.
    if (children) {
      return (
        <ProgressFrame ref={ref} value={value} size={size} {...props}>
          {children}
        </ProgressFrame>
      )
    }

    // Facade Mode: Render standard structure
    // To solve the "Clipping" issue and "Atom" constraints:
    // If showValue is true, we wrap the Bar and Text in an XStack.
    // This changes the root element from a div (primitive) to a div (stack).
    // This is acceptable for a "smart" atom facade.

    const Bar = (
       <ProgressFrame ref={ref} value={value} size={size} {...props}>
          <ProgressIndicatorFrame status={status} animation="bouncy" />
       </ProgressFrame>
    )

    if (showValue) {
        return (
            <XStack alignItems="center" gap="$3" width="100%">
                {Bar}
                <Text
                    fontSize="$1"
                    color="$color"
                    minWidth={30} // Prevent layout shift
                    textAlign="right"
                >
                    {Math.round(value ?? 0)}%
                </Text>
            </XStack>
        )
    }

    return Bar
  }
)

ProgressComponent.displayName = 'Progress'

// Bind subcomponents for Compound Pattern
export const Progress = Object.assign(ProgressComponent, {
  Indicator: ProgressIndicatorFrame,
  Label: ProgressLabel,
  Root: ProgressComponent,
})
