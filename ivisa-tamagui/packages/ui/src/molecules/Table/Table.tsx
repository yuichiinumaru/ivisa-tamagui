import { styled, Stack, Text } from 'tamagui'

export const Table = styled(Stack, {
  name: 'Table',
  width: '100%',
  overflow: 'scroll',
})

export const TableHeader = styled(Stack, {
  name: 'TableHeader',
  borderBottomWidth: 1,
  borderBottomColor: '$borderColor',
})

export const TableBody = styled(Stack, {
  name: 'TableBody',
})

export const TableFooter = styled(Stack, {
  name: 'TableFooter',
  backgroundColor: '$muted',
  borderTopWidth: 1,
  borderTopColor: '$borderColor',
})

export const TableRow = styled(Stack, {
  name: 'TableRow',
  flexDirection: 'row',
  borderBottomWidth: 1,
  borderBottomColor: '$borderColor',
  hoverStyle: {
      backgroundColor: '$muted',
  },
})

export const TableHead = styled(Text, {
  name: 'TableHead',
  padding: '$3',
  fontWeight: '600',
  textAlign: 'left',
  flex: 1,
  color: '$mutedForeground',
})

export const TableCell = styled(Text, {
  name: 'TableCell',
  padding: '$3',
  flex: 1,
})

export const TableCaption = styled(Text, {
  name: 'TableCaption',
  padding: '$2',
  color: '$mutedForeground',
  fontSize: '$2',
  textAlign: 'center',
})
