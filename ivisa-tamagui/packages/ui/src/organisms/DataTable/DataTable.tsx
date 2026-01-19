import { AlertCircle, Inbox } from '@tamagui/lucide-icons'
import React, { useMemo, useState, isValidElement } from 'react'
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
  TableHeadText,
  TableCellText,
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

// Helper for Text Wrapping
const renderCellContent = (content: React.ReactNode, isHeader: boolean) => {
  if (isValidElement(content)) return content
  const Wrapper = isHeader ? TableHeadText : TableCellText
  return <Wrapper>{content}</Wrapper>
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
    if (typeof process !== 'undefined' && process.env.NODE_ENV === 'development') {
      console.warn(
        `DataTable: Rendering ${data.length} rows without pagination is a performance hazard. ` +
          `Pagination has been forcibly enabled.`
      )
    }
    showPagination = true
  }

  // 🛡️ Fix: Memoize data to prevent mutation of frozen arrays (Storybook args)
  // and ensure useReactTable has a stable reference.
  const safeData = useMemo(() => [...(data ?? [])], [data])
  const safeColumns = useMemo(() => columns, [columns])

  const table = useReactTable({
    data: safeData,
    columns: safeColumns,
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
        <TableRow key={`skeleton-${i}`} tag="tr">
          {columns.map((_, j) => (
            <TableCellFrame key={`skeleton-cell-${j}`} tag="td">
              <Skeleton height="$4" />
            </TableCellFrame>
          ))}
        </TableRow>
      ))
    }

    if (error) {
      return (
        <TableRow tag="tr">
          <NoResultsCell tag="td" {...({ colSpan: columns.length } as any)}>
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
        <TableRow tag="tr">
          <NoResultsCell tag="td" {...({ colSpan: columns.length } as any)}>
            {emptyState || (
              <Empty
                icon={<Inbox size="$5" color="$gray10" />}
                title={localization.noResults}
              />
            )}
          </NoResultsCell>
        </TableRow>
      )
    }

    return rows.map((row) => (
      <TableRow key={row.id} data-state={row.getIsSelected() && 'selected'} tag="tr">
        {row.getVisibleCells().map((cell) => (
          <TableCellFrame key={cell.id} tag="td">
            {renderCellContent(flexRender(cell.column.columnDef.cell, cell.getContext()), false)}
          </TableCellFrame>
        ))}
      </TableRow>
    ))
  }

  return (
    <YStack gap="$3">
      {headerActions && <HeaderActionsContainer>{headerActions}</HeaderActionsContainer>}
      <TableContainer>
        <ScrollView horizontal showsHorizontalScrollIndicator>
          <YStack minWidth="100%" tag="table" aria-label="Data table">
            {/* Header */}
            <TableHeader tag="thead">
              {table.getHeaderGroups().map((headerGroup) => (
                <TableRow key={headerGroup.id} tag="tr">
                  {headerGroup.headers.map((header) => (
                    <TableCellFrame key={header.id} tag="th">
                      {header.isPlaceholder
                        ? null
                        : renderCellContent(flexRender(header.column.columnDef.header, header.getContext()), true)}
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
        <XStack paddingVertical="$3" paddingHorizontal="$4" alignItems="center">
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
        </XStack>
      )}
    </YStack>
  )
}

