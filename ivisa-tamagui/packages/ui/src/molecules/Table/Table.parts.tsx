// @ts-nocheck
import { styled, YStack, XStack, Text, GetProps } from 'tamagui'

// For semantic HTML, these components use `tag` props.
// The intended structure is:
// <Table>
//   <TableHeader>
//     <TableRow>...</TableRow>
//   </TableHeader>
//   <TableBody>
//     <TableRow>...</TableRow>
//   </TableBody>
// </Table>

/**
 * Main table container. Use as a wrapper for all other table components.
 * Applies border and rounded corners.
 */
export const Table = styled(YStack, {
  name: 'Table',
  tag: 'table',
  width: '100%',
  borderWidth: 1,
  borderColor: '$borderColor',
  borderRadius: '$4',
  overflow: 'hidden',
})

/**
 * Header section of the table. Wraps `TableRow` with `TableHead` cells.
 * Provides a bottom border to separate the header from the body.
 */
export const TableHeader = styled(YStack, {
  name: 'TableHeader',
  tag: 'thead',
  borderBottomWidth: 1,
  borderBottomColor: '$borderColor',
  backgroundColor: '$background',
})

/**
 * Body section of the table. Wraps a list of `TableRow`s.
 * The last `TableRow` inside will have its border removed by a web-only CSS selector
 * to prevent double borders with the table footer or frame.
 */
export const TableBody = styled(YStack, {
  name: 'TableBody',
  tag: 'tbody',
  // Removes the border from the last row to prevent double borders.
  // Note: This is a web-only selector and will be ignored on native.
  '& > *:last-child': {
    borderBottomWidth: 0,
  },
})

/**
 * Footer section of the table. Wraps a summary `TableRow`.
 * Provides a top border and a slightly different background.
 */
export const TableFooter = styled(YStack, {
  name: 'TableFooter',
  tag: 'tfoot',
  borderTopWidth: 1,
  borderTopColor: '$borderColor',
  backgroundColor: '$backgroundHover',
})

/**
 * Represents a row in the table. Should be a direct child of
 * `TableHeader`, `TableBody`, or `TableFooter`.
 */
export const TableRow = styled(XStack, {
  name: 'TableRow',
  tag: 'tr',
  borderBottomWidth: 1,
  borderBottomColor: '$borderColor',

  variants: {
    header: {
      true: {
        // Header rows don't get a hover effect
      },
      false: {
        hoverStyle: {
          backgroundColor: '$backgroundHover',
        },
      },
    },
  },

  defaultVariants: {
    header: false,
  },
})

/**
 * A header cell. Should be used inside a header `TableRow`.
 */
export const TableHead = styled(Text, {
  name: 'TableHead',
  tag: 'th',
  flex: 1,
  padding: '$3',
  fontWeight: '600',
  textAlign: 'left',
  color: '$color',
  fontSize: '$3',
  textTransform: 'uppercase',
  letterSpacing: 1,
  ellipse: true,
  whiteSpace: 'nowrap',
})

/**
 * A standard data cell. Should be used inside a body or footer `TableRow`.
 */
export const TableCell = styled(Text, {
  name: 'TableCell',
  tag: 'td',
  flex: 1,
  padding: '$3',
  fontSize: '$4',
  color: '$color',
  ellipse: true,
  whiteSpace: 'nowrap',
})

/**
 * A caption for the table. Rendered at the bottom.
 */
export const TableCaption = styled(Text, {
  name: 'TableCaption',
  tag: 'caption',
  captionSide: 'bottom',
  padding: '$3',
  color: '$color',
  fontSize: '$2',
  textAlign: 'center',
})

export type TableProps = GetProps<typeof Table>
export type TableHeaderProps = GetProps<typeof TableHeader>
export type TableBodyProps = GetProps<typeof TableBody>
export type TableFooterProps = GetProps<typeof TableFooter>
export type TableRowProps = GetProps<typeof TableRow>
export type TableHeadProps = GetProps<typeof TableHead>
export type TableCellProps = GetProps<typeof TableCell>
export type TableCaptionProps = GetProps<typeof TableCaption>

