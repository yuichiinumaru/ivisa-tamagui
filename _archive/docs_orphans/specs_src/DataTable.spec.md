# Specification for DataTable Component

## 1. Overview

The `DataTable` is a powerful organism designed to render tabular data with built-in support for pagination, sorting, and filtering. It serves as a wrapper around the headless `@tanstack/react-table` library, providing a consistent and themeable table experience within the Ivisa Tamagui Design System.

**Responsibilities:**
- Display arrays of data in a structured, columnar format.
- Provide out-of-the-box controls for pagination.
- Enable column-based sorting and filtering.
- Ensure consistent styling that adheres to the design system's theme.

## 2. Props

### `DataTableProps<TData, TValue>`

| Prop      | Type                                | Required | Description                                                                                                                                                                                                                                                                  |
| :-------- | :---------------------------------- | :------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `columns` | `ColumnDef<TData, TValue>[]`        | Yes      | An array of column definitions from `@tanstack/react-table`. Each object in the array defines a column's `accessorKey` (or `accessorFn`), `header` (the content to render in the table head), and `cell` (the content to render for that column in each row).                         |
| `data`    | `TData[]`                           | Yes      | An array of data objects to be displayed in the table. The structure of each object in this array should correspond to the `accessorKey`s defined in the `columns` prop.                                                                                                        |

## 3. Features

### Pagination
The `DataTable` includes simple "Previous" and "Next" buttons to navigate through paginated data. This functionality is provided by the `getPaginationRowModel` from `@tanstack/react-table`.

### Sorting
Sorting is enabled by default. Users can click on column headers to sort the data based on that column. The component uses `getSortedRowModel` to handle the sorting logic.

### Filtering
The component is set up to allow for column-based filtering, using `getFilteredRowModel`. While no UI for filtering is provided by default, it can be easily added by passing the `table` object to a custom filter component.

## 4. Usage Example

Here's a basic example of how to use the `DataTable` component.

```tsx
import React from 'react'
import { DataTable } from './DataTable'
import { ColumnDef } from '@tanstack/react-table'

// Define the shape of our data
type Payment = {
  id: string
  amount: number
  status: 'pending' | 'processing' | 'success' | 'failed'
  email: string
}

// Define the columns for the table
const columns: ColumnDef<Payment>[] = [
  {
    accessorKey: 'status',
    header: 'Status',
  },
  {
    accessorKey: 'email',
    header: 'Email',
  },
  {
    accessorKey: 'amount',
    header: 'Amount',
  },
]

// Sample data
const data: Payment[] = [
  { id: '1', amount: 100, status: 'success', email: 'ken@example.com' },
  { id: '2', amount: 125, status: 'processing', email: 'jane@example.com' },
  // ... more data
]

export const MyDataTable = () => {
  return <DataTable columns={columns} data={data} />
}
```

## 5. Implementation Notes

- The component is built using Tamagui primitives (`YStack`, `XStack`, `Text`, `Button`) for styling, ensuring it adapts to the application's theme.
- It leverages `@tanstack/react-table` for all its core logic, which makes it highly extensible. Developers can easily add more advanced features like column resizing, row selection, and more by extending the existing implementation.
- Sub-components (`Table.Container`, `Table.Header`, etc.) are exported to allow for more customized table structures if needed.
