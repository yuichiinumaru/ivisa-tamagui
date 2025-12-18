import React from 'react'
import { GetProps, styled, XStack, Circle, Text } from 'tamagui'

const StatusLightFrame = styled(XStack, {
  name: 'StatusLight',
  alignItems: 'center',
  gap: '$2',
  variants: {
    variant: {
      neutral: {},
      positive: {},
      notice: {},
      negative: {},
      info: {},
    },
    disabled: {
      true: {
        opacity: 0.5,
      },
    },
  } as const,
  defaultVariants: {
    variant: 'neutral',
  },
})

const StatusDot = styled(Circle, {
  name: 'StatusDot',
  size: 8,
  variants: {
    variant: {
      neutral: { backgroundColor: '$gray10' },
      positive: { backgroundColor: '$green10' },
      notice: { backgroundColor: '$yellow10' },
      negative: { backgroundColor: '$red10' },
      info: { backgroundColor: '$blue10' },
    },
  } as const,
  defaultVariants: {
    variant: 'neutral',
  },
})

const StatusText = styled(Text, {
  name: 'StatusText',
  color: '$foreground',
  fontSize: '$3',
  fontFamily: '$body',
})

export type StatusLightProps = GetProps<typeof StatusLightFrame> & {
  children: React.ReactNode
}

export const StatusLight = React.forwardRef<React.ElementRef<typeof StatusLightFrame>, StatusLightProps>(
  ({ children, variant = 'neutral', ...props }, ref) => {
    return (
      <StatusLightFrame ref={ref} variant={variant} {...props}>
        <StatusDot variant={variant} />
        <StatusText>{children}</StatusText>
      </StatusLightFrame>
    )
  }
)

StatusLight.displayName = 'StatusLight'
