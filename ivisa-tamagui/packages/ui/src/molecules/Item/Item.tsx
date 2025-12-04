import { styled, XStack, Text, GetProps } from 'tamagui'

export const Item = styled(XStack, {
  name: 'Item',
  alignItems: 'center',
  gap: '$3',
  padding: '$3',
  borderRadius: '$md',
  hoverStyle: {
      backgroundColor: '$muted',
  },
})

export const ItemText = styled(Text, {
  name: 'ItemText',
  fontSize: '$3',
  fontWeight: '500',
  flex: 1,
})

export const ItemValue = styled(Text, {
  name: 'ItemValue',
  fontSize: '$3',
  color: '$mutedForeground',
})
