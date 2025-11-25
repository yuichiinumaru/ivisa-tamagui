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
  Button,
  Input,
} from 'tamagui'
import { IvisaButton } from '../atoms/Button'
import { IvisaInput } from '../atoms/Input'

// --- Styled Primitives for the Table ---

const TableContainer = styled(YStack, {
  borderColor: '$borderColor',
  borderWidth: 1,
  borderRadius: '$md', // Changed from $4 to $md
  overflow: 'hidden',
})

const TableHeader = styled(YStack, {
  backgroundColor: '$background',
  borderBottomWidth: 1,
  borderColor: '$borderColor',
})

const TableRow = styled(XStack, {
  borderBottomWidth: 1,
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
    <YStack gap="$4" width="100%">
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
                      <View key={header.id} style={{ flex: 1, minWidth: 100 }}>
                        {header.isPlaceholder
                          ? null
                          : flexRender(
                              header.column.columnDef.header,
                              header.getContext()
                            )}
                      </View>
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
                      <View key={cell.id} style={{ flex: 1, minWidth: 100 }}>
                        {flexRender(cell.column.columnDef.cell, cell.getContext())}
                      </View>
                    ))}
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <View style={{ flex: 1, alignItems: 'center', padding: 20 }}>
                    <TableHeadText>No results.</TableHeadText>
                  </View>
                </TableRow>
              )}
            </YStack>
          </YStack>
        </ScrollView>
      </TableContainer>

      {/* Pagination Controls */}
      <XStack alignItems="center" justifyContent="flex-end" gap="$2">
        <IvisaButton
          variant="outline"
          size="sm"
          onPress={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
        >
          Previous
        </IvisaButton>
        <IvisaButton
          variant="outline"
          size="sm"
          onPress={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
        >
          Next
        </IvisaButton>
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
