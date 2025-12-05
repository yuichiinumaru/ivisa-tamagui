import { styled, Text } from 'tamagui'

export const Kbd = styled(Text, {
  name: 'Kbd',
  tag: 'kbd',
  fontSize: 12,
  fontWeight: '500',
  fontFamily: '$body',
  backgroundColor: '$background',
  color: '$color',
  borderRadius: '$2',
  paddingHorizontal: 6,
  paddingVertical: 2,
  borderWidth: 1,
  borderColor: '$borderColor',
  minWidth: 20,
  textAlign: 'center',
})
