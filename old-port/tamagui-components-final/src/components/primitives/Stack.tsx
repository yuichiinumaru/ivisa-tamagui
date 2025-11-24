import React from 'react'
import { Stack as TamaguiStack, styled } from 'tamagui'

import { withErrorLogging } from '../../utils/withErrorLogging'

const StyledStack = styled(TamaguiStack, {
  name: 'Stack',
  display: 'flex',
  gap: '$4',
  variants: {
    direction: {
      vertical: { flexDirection: 'column' },
      horizontal: { flexDirection: 'row' },
    },
    gap: {
      xs: { gap: '$1' },
      sm: { gap: '$2' },
      md: { gap: '$4' },
      lg: { gap: '$6' },
      xl: { gap: '$8' },
    },
    align: {
      start: { alignItems: 'flex-start' },
      center: { alignItems: 'center' },
      end: { alignItems: 'flex-end' },
      stretch: { alignItems: 'stretch' },
    },
    justify: {
      start: { justifyContent: 'flex-start' },
      center: { justifyContent: 'center' },
      end: { justifyContent: 'flex-end' },
      between: { justifyContent: 'space-between' },
    },
    wrap: {
      true: { flexWrap: 'wrap' },
    },
  },
  defaultVariants: {
    direction: 'vertical',
    gap: 'md',
    align: 'start',
    justify: 'start',
  },
})

export interface StackProps extends Omit<React.ComponentProps<typeof StyledStack>, 'direction'> {
  direction?: 'vertical' | 'horizontal'
}

const StackImpl = React.forwardRef<React.ElementRef<typeof StyledStack>, StackProps>(
  ({ direction = 'vertical', role, accessibilityRole, ...props }, ref) => {
    const finalRole = role ?? 'group'
    const finalAccessibilityRole = accessibilityRole ?? 'group'
    const ariaOrientation = direction === 'horizontal' ? 'horizontal' : 'vertical'

    return (
      <StyledStack
        ref={ref}
        direction={direction}
        role={finalRole}
        accessibilityRole={finalAccessibilityRole}
        aria-orientation={ariaOrientation}
        {...props}
      />
    )
  }
)

StackImpl.displayName = 'Stack'

const HStackImpl = React.forwardRef<React.ElementRef<typeof StyledStack>, Omit<StackProps, 'direction'>>(
  ({ role, accessibilityRole, ...props }, ref) => (
    <StyledStack
      ref={ref}
      direction="horizontal"
      role={role ?? 'group'}
      accessibilityRole={accessibilityRole ?? 'group'}
      aria-orientation="horizontal"
      {...props}
    />
  )
)

HStackImpl.displayName = 'HStack'

const VStackImpl = React.forwardRef<React.ElementRef<typeof StyledStack>, Omit<StackProps, 'direction'>>(
  ({ role, accessibilityRole, ...props }, ref) => (
    <StyledStack
      ref={ref}
      direction="vertical"
      role={role ?? 'group'}
      accessibilityRole={accessibilityRole ?? 'group'}
      aria-orientation="vertical"
      {...props}
    />
  )
)

VStackImpl.displayName = 'VStack'

export const Stack = withErrorLogging<StackProps, React.ElementRef<typeof StyledStack>>('Stack', StackImpl)
export const HStack = withErrorLogging<Omit<StackProps, 'direction'>, React.ElementRef<typeof StyledStack>>('HStack', HStackImpl)
export const VStack = withErrorLogging<Omit<StackProps, 'direction'>, React.ElementRef<typeof StyledStack>>('VStack', VStackImpl)
