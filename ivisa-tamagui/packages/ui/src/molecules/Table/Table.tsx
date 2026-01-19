import React, { ReactNode } from 'react'
import {
  Table as TableContainer,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
  TableCaption,
} from './Table.parts'
import { Skeleton } from '../../atoms/Skeleton'
import { Empty } from '../Empty'
import { YStack, Paragraph } from 'tamagui'
import { AlertTriangle, Inbox } from '@tamagui/lucide-icons'

// =================================================================================================
// TYPES
// =================================================================================================

/**
 * Defines a column in the table.
 * - `header`: The content to display in the header cell (string or ReactNode).
 * - `accessor`: The key to access the data for this column in a row object.
 * - `render`: An optional function to customize the rendering of a cell.
 */
export type TableColumn<T> = {
  header: ReactNode
  accessor: keyof T
  render?: (item: T) => ReactNode
}

/**
 * Props for the main Table component.
 * - `columns`: An array of column definitions.
 * - `data`: An array of data objects to display.
 * - `isLoading`: If true, shows a skeleton loader.
 * - `hasError`: If true, shows an error message.
 * - `caption`: An optional caption for the table.
 */
export type TableProps<T> = {
  columns: TableColumn<T>[]
  data?: T[]
  isLoading?: boolean
  hasError?: boolean
  caption?: string
  footer?: ReactNode
  getKey?: (item: T) => string | number
}

// =================================================================================================
// SKELETON LOADER
// =================================================================================================

const TableSkeleton = ({ columns, caption }: { columns: TableColumn<any>[]; caption?: string }) => (
  <TableContainer>
    <TableHeader>
      <TableRow header>
        {columns.map((col, index) => (
          <TableHead key={`skeleton-head-${index}`}>{col.header}</TableHead>
        ))}
      </TableRow>
    </TableHeader>
    <TableBody>
      {[...Array(3)].map((_, rowIndex) => (
        <TableRow key={`skeleton-row-${rowIndex}`}>
          {columns.map((_, colIndex) => (
            <TableCell key={`skeleton-cell-${rowIndex}-${colIndex}`}>
              <Skeleton />
            </TableCell>
          ))}
        </TableRow>
      ))}
    </TableBody>
    {caption && <TableCaption>{caption}</TableCaption>}
  </TableContainer>
)

// =================================================================================================
// ERROR STATE
// =================================================================================================

const TableError = () => (
  <YStack
    borderWidth={1}
    borderColor="$red10"
    borderRadius="$4"
    padding="$4"
    alignItems="center"
    gap="$2"
  >
    <AlertTriangle size={32} color="$red10" />
    <Paragraph color="$red10">Ocorreu um erro ao carregar os dados.</Paragraph>
  </YStack>
)

// =================================================================================================
// EMPTY STATE
// =================================================================================================

const TableEmpty = () => (
  <Empty
    icon={<Inbox size={48} />}
    title="Nenhum registro encontrado"
    description="Não há dados para exibir no momento."
    height={200}
  />
)

// =================================================================================================
// MAIN COMPONENT
// =================================================================================================

export function Table<T>({
  columns,
  data,
  isLoading = false,
  hasError = false,
  caption,
  footer,
  getKey = (item) => (item as any).id,
}: TableProps<T>) {
  if (isLoading) {
    return <TableSkeleton columns={columns} caption={caption} />
  }

  if (hasError) {
    return <TableError />
  }

  if (!data || data.length === 0) {
    return <TableEmpty />
  }

  return (
    <TableContainer>
      <TableHeader>
        <TableRow header>
          {columns.map((column, index) => (
            <TableHead key={`header-${index}`}>{column.header}</TableHead>
          ))}
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((item) => (
          <TableRow key={getKey(item)}>
            {columns.map((column) => (
              <TableCell key={`${getKey(item)}-${String(column.accessor)}`}>
                {column.render ? column.render(item) : (item[column.accessor] as ReactNode)}
              </TableCell>
            ))}
          </TableRow>
        ))}
      </TableBody>
      {footer}
      {caption && <TableCaption>{caption}</TableCaption>}
    </TableContainer>
  )
}

export type TableSkeletonProps = React.ComponentProps<typeof TableSkeleton>

export type TableErrorProps = React.ComponentProps<typeof TableError>

export type TableEmptyProps = React.ComponentProps<typeof TableEmpty>

