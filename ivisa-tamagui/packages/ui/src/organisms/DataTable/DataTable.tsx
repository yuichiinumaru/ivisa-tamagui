import { AlertCircle } from '@tamagui/lucide-icons'
import React, { useState } from 'react'
import type { ColumnDef, ColumnFiltersState, SortingState } from '@tanstack/react-table'
import {
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from '@tanstack/react-table'
import { ScrollView, Text, XStack, YStack } from 'tamagui'
import { Button } from '../../atoms/Button'
import { Skeleton } from '../../atoms/Skeleton'
import { Empty } from '../../molecules/Empty'
import {
  HeaderActionsContainer,
  NoResultsCell,
  TableCellFrame,
  TableContainer,
  TableHeader,
  TableRow,
} from './DataTable.parts'

// --- Component Definition ---
const DEFAULT_PAGE_SIZE = 10
const MAX_ROWS_WITHOUT_PAGINATION = 100
export interface DataTableLocalization {
  noResults: string
  previousPage: string
  nextPage: string
  pageOf: (currentPage: number, pageCount: number) => string
  errorTitle: string
  errorBody: string
  retry: string
}

const DEFAULT_LOCALIZATION: DataTableLocalization = {
  noResults: 'Nenhum resultado encontrado.',
  previousPage: 'Anterior',
  nextPage: 'Próximo',
  pageOf: (currentPage, pageCount) => `Página ${currentPage} de ${pageCount}`,
  errorTitle: 'Algo deu errado',
  errorBody: 'Houve um erro ao carregar os dados. Por favor, tente novamente.',
  retry: 'Tentar novamente',
}

export interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[]
  data: TData[]
  showPagination?: boolean
  isLoading?: boolean
  error?: Error | null
  onRetry?: () => void
  emptyState?: React.ReactNode
  headerActions?: React.ReactNode
  localization?: Partial<DataTableLocalization>
}

export function DataTable<TData, TValue>({
  columns,
  data,
  showPagination: initialShowPagination = true,
  isLoading = false,
  error = null,
  onRetry,
  emptyState,
  headerActions,
  localization: customLocalization,
}: DataTableProps<TData, TValue>) {
  const [sorting, setSorting] = useState<SortingState>([])
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([])

  const localization = { ...DEFAULT_LOCALIZATION, ...customLocalization }
  let showPagination = initialShowPagination

  // 🛡️ Guard: Performance Protection
  if (!showPagination && data.length > MAX_ROWS_WITHOUT_PAGINATION) {
    if (process.env.NODE_ENV === 'development') {
      console.warn(
        `DataTable: Rendering ${data.length} rows without pagination is a performance hazard. ` +
          `Pagination has been forcibly enabled.`
      )
    }
    showPagination = true
  }

  const table = useReactTable({
    data: data ?? [],
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),
    onColumnFiltersChange: setColumnFilters,
    getFilteredRowModel: getFilteredRowModel(),
    initialState: {
      pagination: {
        pageSize: DEFAULT_PAGE_SIZE,
      },
    },
    state: {
      sorting,
      columnFilters,
    },
  })

  // 🛡️ Guard: Ensure we don't render millions of rows
  // If pagination is somehow disabled but logic fails, slice the array in render.
  const rows = showPagination
    ? table.getRowModel().rows
    : table.getRowModel().rows.slice(0, MAX_ROWS_WITHOUT_PAGINATION)

  const renderTableBody = () => {
    if (isLoading) {
      return Array.from({ length: table.getState().pagination.pageSize }).map((_, i) => (
        <TableRow key={`skeleton-${i}`}>
          {columns.map((_, j) => (
            <TableCellFrame key={`skeleton-cell-${j}`}>
              <Skeleton height="$4" />
            </TableCellFrame>
          ))}
        </TableRow>
      ))
    }

    if (error) {
      return (
        <TableRow>
          <NoResultsCell>
            <Empty
              icon={<AlertCircle size="$5" color="$red10" />}
              title={localization.errorTitle}
              body={localization.errorBody}
              action={
                onRetry && (
                  <Button variant="outline" onPress={onRetry}>
                    {localization.retry}
                  </Button>
                )
              }
            />
          </NoResultsCell>
        </TableRow>
      )
    }

    if (rows.length === 0) {
      return (
        <TableRow>
          <NoResultsCell>
            {emptyState || <Empty title={localization.noResults} />}
          </NoResultsCell>
        </TableRow>
      )
    }

    return rows.map((row) => (
      <TableRow key={row.id} data-state={row.getIsSelected() && 'selected'}>
        {row.getVisibleCells().map((cell) => (
          <TableCellFrame key={cell.id}>
            {flexRender(cell.column.columnDef.cell, cell.getContext())}
          </TableCellFrame>
        ))}
      </TableRow>
    ))
  }

  return (
    <YStack gap="$3" tag="table" aria-label="Data table">
      {headerActions && <HeaderActionsContainer>{headerActions}</HeaderActionsContainer>}
      <TableContainer>
        <ScrollView horizontal showsHorizontalScrollIndicator>
          <YStack minWidth="100%">
            {/* Header */}
            <TableHeader tag="thead">
              {table.getHeaderGroups().map((headerGroup) => (
                <TableRow key={headerGroup.id} tag="tr">
                  {headerGroup.headers.map((header) => (
                    <TableCellFrame key={header.id} tag="th">
                      {header.isPlaceholder
                        ? null
                        : flexRender(header.column.columnDef.header, header.getContext())}
                    </TableCellFrame>
                  ))}
                </TableRow>
              ))}
            </TableHeader>

            {/* Body */}
            <YStack tag="tbody">{renderTableBody()}</YStack>
          </YStack>
        </ScrollView>
      </TableContainer>

      {/* Pagination Controls */}
      {showPagination && table.getPageCount() > 1 && (
        <TableRow>
          <YStack flex={1} />
          <XStack alignItems="center" justifyContent="flex-end" gap="$2">
            <Text fontSize="$2" color="$color">
              {localization.pageOf(
                table.getState().pagination.pageIndex + 1,
                table.getPageCount()
              )}
            </Text>
            <Button
              variant="outline"
              size="$2"
              onPress={() => table.previousPage()}
              disabled={!table.getCanPreviousPage()}
            >
              {localization.previousPage}
            </Button>
            <Button
              variant="outline"
              size="$2"
              onPress={() => table.nextPage()}
              disabled={!table.getCanNextPage()}
            >
              {localization.nextPage}
            </Button>
          </XStack>
        </TableRow>
      )}
    </YStack>
  )
}
