// @ts-nocheck
import { Label as TamaguiLabel, styled, XStack, YStack } from 'tamagui'

export const SelectContainer = styled(YStack, {
  name: 'SelectContainer',
  gap: '$2',
})

export const SelectTrigger = styled(XStack, {
  name: 'SelectTrigger',
  alignItems: 'center',
  justifyContent: 'space-between',
  borderWidth: 1,
  borderColor: '$borderColor',
  borderRadius: '$4',
  height: 40,
  paddingHorizontal: '$3',
  backgroundColor: '$background',

  variants: {
    hasError: {
      true: {
        borderColor: '$red10',
      },
    },
    disabled: {
      true: {
        backgroundColor: '$gray5',
        opacity: 0.5,
      },
    },
  } as const,
})

export const SelectElement = styled('select', {
  name: 'Select',
  flex: 1,
  height: '100%',
  backgroundColor: 'transparent',
  borderWidth: 0,
  outlineWidth: 0,
  color: '$color',
  fontSize: '$4',
  // Reset native styles
  appearance: 'none',
})

export const Label = styled(TamaguiLabel, {
  name: 'Label',
  color: '$color',
  fontSize: '$4',

  variants: {
    hasError: {
      true: {
        color: '$red10',
      },
    },
  } as const,
})

