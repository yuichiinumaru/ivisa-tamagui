import type { Meta, StoryObj } from '@storybook/react'
import { ColumnDef } from '@tanstack/react-table'
import { DataTable, Table } from './DataTable'
import { Button } from '../../atoms/Button'
import { XStack, YStack, Text } from 'tamagui'

const meta: Meta<typeof DataTable> = {
  title: 'Organisms/DataTable',
  component: DataTable,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof meta>

// Sample Data
type Payment = {
  id: string
  amount: number
  status: 'pending' | 'processing' | 'success' | 'failed'
  email: string
}

const data: Payment[] = [
  {
    id: '728ed52f',
    amount: 100,
    status: 'pending',
    email: 'm@example.com',
  },
  {
    id: '489e1d42',
    amount: 125,
    status: 'processing',
    email: 'example@gmail.com',
  },
  {
    id: '627a91d3',
    amount: 50,
    status: 'success',
    email: 'success@hotmail.com',
  },
  {
    id: '921b82c1',
    amount: 775,
    status: 'failed',
    email: 'fail@yahoo.com',
  },
  // Add more data for pagination
  ...Array.from({ length: 20 }).map((_, i) => ({
    id: `generated-${i}`,
    amount: Math.floor(Math.random() * 1000),
    status: (i % 2 === 0 ? 'success' : 'pending') as 'success' | 'pending',
    email: `user${i}@example.com`,
  })),
]

const columns: ColumnDef<Payment>[] = [
  {
    accessorKey: 'status',
    header: () => <Table.HeadText>Status</Table.HeadText>,
    cell: ({ row }) => (
      <Table.CellText textTransform="capitalize">
        {row.getValue('status')}
      </Table.CellText>
    ),
  },
  {
    accessorKey: 'email',
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onPress={() => column.toggleSorting(column.getIsSorted() === 'asc')}
          paddingLeft="$0"
        >
          Email {column.getIsSorted() === 'asc' ? '↑' : column.getIsSorted() === 'desc' ? '↓' : ''}
        </Button>
      )
    },
    cell: ({ row }) => <Table.CellText>{row.getValue('email')}</Table.CellText>,
  },
  {
    accessorKey: 'amount',
    header: () => <Table.HeadText textAlign="right">Amount</Table.HeadText>,
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue('amount'))
      const formatted = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
      }).format(amount)
 
      return <Table.CellText textAlign="right" fontWeight="500">{formatted}</Table.CellText>
    },
  },
]

export const Default: Story = {
  render: () => (
    <YStack width={800}>
       <DataTable columns={columns} data={data} />
    </YStack>
  ),
}
