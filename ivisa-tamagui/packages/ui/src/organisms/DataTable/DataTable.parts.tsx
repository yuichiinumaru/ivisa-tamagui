import React from 'react'
import { Text, View, XStack, YStack, styled } from 'tamagui'

// --- Constants ---
const MIN_COLUMN_WIDTH = 100
const BORDER_WIDTH = 1


export const TableContainer = styled(YStack, {
  name: 'TableContainer',
  borderColor: '$borderColor',
  borderWidth: BORDER_WIDTH,
  borderRadius: '$4',
  overflow: 'hidden',
})

export const TableHeader = styled(YStack, {
  name: 'TableHeader',
  backgroundColor: '$background',
  borderBottomWidth: BORDER_WIDTH,
  borderColor: '$borderColor',
})

export const TableRow = styled(XStack, {
  name: 'TableRow',
  borderBottomWidth: BORDER_WIDTH,
  borderColor: '$borderColor',
  paddingVertical: '$3',
  paddingHorizontal: '$4',
  alignItems: 'center',

  hoverStyle: {
    backgroundColor: '$backgroundHover',
  },

  pressStyle: {
    backgroundColor: '$backgroundPress',
  },
})

export const TableHeadText = styled(Text, {
  name: 'TableHeadText',
  color: '$color',
  fontSize: '$2',
  fontWeight: '600',
})

export const TableCellText = styled(Text, {
  name: 'TableCellText',
  color: '$color',
  fontSize: '$2',
})

export const TableCellFrame = styled(View, {
  name: 'TableCellFrame',
  flex: 1,
  minWidth: MIN_COLUMN_WIDTH,
})

export const NoResultsCell = styled(View, {
  name: 'NoResultsCell',
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  padding: '$4',
})

export const HeaderActionsContainer = styled(XStack, {
  name: 'HeaderActionsContainer',
  paddingHorizontal: '$4',
  paddingBottom: '$3',
  justifyContent: 'flex-end',
})

export type TableContainerProps = React.ComponentProps<typeof TableContainer>

export type TableHeaderProps = React.ComponentProps<typeof TableHeader>

export type TableRowProps = React.ComponentProps<typeof TableRow>

export type TableHeadTextProps = React.ComponentProps<typeof TableHeadText>

export type TableCellTextProps = React.ComponentProps<typeof TableCellText>

export type TableCellFrameProps = React.ComponentProps<typeof TableCellFrame>

export type NoResultsCellProps = React.ComponentProps<typeof NoResultsCell>

export type HeaderActionsContainerProps = React.ComponentProps<typeof HeaderActionsContainer>

