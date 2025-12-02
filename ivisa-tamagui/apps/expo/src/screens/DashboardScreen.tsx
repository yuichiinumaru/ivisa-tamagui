import React from 'react'
import { YStack, H4, Text, XStack } from 'tamagui'
import { DataTable, BarChart, Card } from '@ivisa/ui'
import { ColumnDef } from '@tanstack/react-table'

type Transaction = {
  id: string
  amount: number
  status: string
  date: string
}

const data: Transaction[] = [
  { id: '1', amount: 125.00, status: 'Completed', date: '2023-10-01' },
  { id: '2', amount: 50.00, status: 'Pending', date: '2023-10-02' },
  { id: '3', amount: 300.50, status: 'Completed', date: '2023-10-03' },
  { id: '4', amount: 75.20, status: 'Failed', date: '2023-10-04' },
]

const columns: ColumnDef<Transaction>[] = [
  {
    accessorKey: 'id',
    header: () => <Text fontWeight="bold">ID</Text>,
    cell: info => <Text>{info.getValue() as string}</Text>,
  },
  {
    accessorKey: 'date',
    header: () => <Text fontWeight="bold">Date</Text>,
    cell: info => <Text>{info.getValue() as string}</Text>,
  },
  {
    accessorKey: 'amount',
    header: () => <Text fontWeight="bold">Amount</Text>,
    cell: info => <Text>${(info.getValue() as number).toFixed(2)}</Text>,
  },
  {
    accessorKey: 'status',
    header: () => <Text fontWeight="bold">Status</Text>,
    cell: info => <Text color={info.getValue() === 'Completed' ? '$green10' : '$red10'}>{info.getValue() as string}</Text>,
  },
]

const chartData = [
  { x: 'Mon', y: 120 },
  { x: 'Tue', y: 200 },
  { x: 'Wed', y: 150 },
  { x: 'Thu', y: 300 },
  { x: 'Fri', y: 250 },
  { x: 'Sat', y: 400 },
  { x: 'Sun', y: 350 },
]

export function DashboardScreen() {
  return (
    <YStack flex={1} padding="$4" gap="$4" backgroundColor="$background">
      <H4>Dashboard</H4>

      <Card padded bordered>
        <YStack gap="$2">
          <H4 fontSize="$5">Weekly Sales</H4>
          {/* BarChart needs explicit width/height sometimes in Native, but let's try default */}
          <YStack height={250}>
             <BarChart data={chartData} />
          </YStack>
        </YStack>
      </Card>

      <Card padded bordered>
        <YStack gap="$2">
          <H4 fontSize="$5">Recent Transactions</H4>
          <DataTable columns={columns} data={data} />
        </YStack>
      </Card>
    </YStack>
  )
}
