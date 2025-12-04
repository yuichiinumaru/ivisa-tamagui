import { styled, Stack, Text, Image } from 'tamagui'

export const Empty = styled(Stack, {
  name: 'Empty',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '$4',
  gap: '$2',
})

export const EmptyImage = styled(Image, {
  width: 100,
  height: 100,
  resizeMode: 'contain',
})

export const EmptyTitle = styled(Text, {
  fontSize: '$5',
  fontWeight: '600',
  textAlign: 'center',
})

export const EmptyDescription = styled(Text, {
  fontSize: '$3',
  color: '$mutedForeground',
  textAlign: 'center',
})
