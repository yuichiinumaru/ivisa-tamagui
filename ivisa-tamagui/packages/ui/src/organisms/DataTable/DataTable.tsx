import React, { useState } from 'react'
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
  getPaginationRowModel,
  getSortedRowModel,
  SortingState,
  getFilteredRowModel,
  ColumnFiltersState,
} from '@tanstack/react-table'
import {
  YStack,
  XStack,
  Text,
  styled,
  ScrollView,
  View,
} from 'tamagui'
import { Button } from '../../atoms/Button'

// --- Constants ---
const MIN_COLUMN_WIDTH = 100
const BORDER_WIDTH = 1

// --- Styled Primitives for the Table ---

const TableContainer = styled(YStack, {
  borderColor: '$borderColor',
  borderWidth: BORDER_WIDTH,
  borderRadius: '$md',
  overflow: 'hidden',
})

const TableHeader = styled(YStack, {
  backgroundColor: '$background',
  borderBottomWidth: BORDER_WIDTH,
  borderColor: '$borderColor',
})

const TableRow = styled(XStack, {
  borderBottomWidth: BORDER_WIDTH,
  borderColor: '$borderColor',
  paddingVertical: '$3',
  paddingHorizontal: '$4',
  alignItems: 'center',
  hoverStyle: {
    backgroundColor: '$backgroundHover',
  },
})

const TableHeadText = styled(Text, {
  color: '$mutedForeground',
  fontSize: '$3',
  fontWeight: '500',
})

const TableCellText = styled(Text, {
  color: '$foreground',
  fontSize: '$3',
})

// 💀 Resurrection: Replaced inline styles with styled components
const TableCellFrame = styled(View, {
  flex: 1,
  minWidth: MIN_COLUMN_WIDTH,
})

const NoResultsCell = styled(View, {
  flex: 1,
  alignItems: 'center',
  padding: '$5', // 20px
})

// --- Component Definition ---

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[]
  data: TData[]
}

export function DataTable<TData, TValue>({
  columns,
  data,
}: DataTableProps<TData, TValue>) {
  const [sorting, setSorting] = useState<SortingState>([])
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([])

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),
    onColumnFiltersChange: setColumnFilters,
    getFilteredRowModel: getFilteredRowModel(),
    state: {
      sorting,
      columnFilters,
    },
  })

  return (
    <YStack gap="$4" marginHorizontal="$true">
      {/* Optional: Global Search or Filters could go here */}
      
      <TableContainer>
        <ScrollView horizontal showsHorizontalScrollIndicator={true}>
          <YStack minWidth="100%">
            {/* Header */}
            <TableHeader>
              {table.getHeaderGroups().map((headerGroup) => (
                <TableRow key={headerGroup.id} borderBottomWidth={1} paddingVertical="$3">
                  {headerGroup.headers.map((header) => {
                    return (
                      <TableCellFrame key={header.id}>
                        {header.isPlaceholder
                          ? null
                          : flexRender(
                              header.column.columnDef.header,
                              header.getContext()
                            )}
                      </TableCellFrame>
                    )
                  })}
                </TableRow>
              ))}
            </TableHeader>

            {/* Body */}
            <YStack>
              {table.getRowModel().rows?.length ? (
                table.getRowModel().rows.map((row) => (
                  <TableRow key={row.id} data-state={row.getIsSelected() && "selected"}>
                    {row.getVisibleCells().map((cell) => (
                      <TableCellFrame key={cell.id}>
                        {flexRender(cell.column.columnDef.cell, cell.getContext())}
                      </TableCellFrame>
                    ))}
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <NoResultsCell>
                    <TableHeadText>No results.</TableHeadText>
                  </NoResultsCell>
                </TableRow>
              )}
            </YStack>
          </YStack>
        </ScrollView>
      </TableContainer>

      {/* Pagination Controls */}
      <XStack alignItems="center" justifyContent="flex-end" gap="$2">
        <Button
          variant="outline"
          size="sm"
          onPress={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
        >
          Previous
        </Button>
        <Button
          variant="outline"
          size="sm"
          onPress={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
        >
          Next
        </Button>
      </XStack>
    </YStack>
  )
}

// --- Export sub-components for custom usage ---
export const Table = {
  Container: TableContainer,
  Header: TableHeader,
  Row: TableRow,
  HeadText: TableHeadText,
  CellText: TableCellText,
}
