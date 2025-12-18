import React from 'react'
import { GetProps, styled, XStack, YStack, Text, View } from 'tamagui'

const MeterFrame = styled(YStack, {
  name: 'Meter',
  width: '100%',
  gap: '$2',
})

const MeterHeader = styled(XStack, {
  justifyContent: 'space-between',
  alignItems: 'center',
})

const MeterLabel = styled(Text, {
  fontSize: '$3',
  fontWeight: '600',
  color: '$foreground',
})

const MeterValueLabel = styled(Text, {
  fontSize: '$3',
  color: '$mutedForeground',
})

const MeterTrack = styled(View, {
  height: 8,
  borderRadius: 4,
  backgroundColor: '$gray5',
  overflow: 'hidden',
  position: 'relative',
})

const MeterFill = styled(View, {
  height: '100%',
  borderRadius: 4,
  backgroundColor: '$primary',
  variants: {
    variant: {
      positive: { backgroundColor: '$green10' },
      notice: { backgroundColor: '$yellow10' },
      negative: { backgroundColor: '$red10' },
      info: { backgroundColor: '$blue10' },
    },
  } as const,
})

export interface MeterProps extends GetProps<typeof MeterFrame> {
  value: number
  min?: number
  max?: number
  label?: string
  valueLabel?: string
  variant?: 'positive' | 'notice' | 'negative' | 'info'
}

export const Meter = React.forwardRef<React.ElementRef<typeof MeterFrame>, MeterProps>(
  ({ value, min = 0, max = 100, label, valueLabel, variant, ...props }, ref) => {
    // Calculate percentage
    const percentage = Math.min(Math.max((value - min) / (max - min), 0), 1) * 100

    return (
      <MeterFrame ref={ref} {...props}>
        {(label || valueLabel) && (
          <MeterHeader>
            {label && <MeterLabel>{label}</MeterLabel>}
            {valueLabel && <MeterValueLabel>{valueLabel}</MeterValueLabel>}
          </MeterHeader>
        )}
        <MeterTrack>
          <MeterFill width={`${percentage}%`} variant={variant} />
        </MeterTrack>
      </MeterFrame>
    )
  }
)

Meter.displayName = 'Meter'
