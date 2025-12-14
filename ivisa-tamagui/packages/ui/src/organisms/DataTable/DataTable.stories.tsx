import type { Meta, StoryObj } from '@storybook/react'
import { DataTable } from './DataTable'
import { Text, YStack } from 'tamagui'
import { createColumnHelper } from '@tanstack/react-table'

const meta: Meta<typeof DataTable> = {
  title: 'Organisms/DataTable',
  component: DataTable,
  argTypes: {
    isLoading: { control: 'boolean' },
    error: { control: 'text' },
  },
}

export default meta
type Story = StoryObj<typeof DataTable>

type Payment = {
  id: string
  amount: number
  status: 'pending' | 'processing' | 'success' | 'failed'
  email: string
  trend: number[]
}

const data: Payment[] = [
  {
    id: '728ed52f',
    amount: 100,
    status: 'pending',
    email: 'm@example.com',
    trend: [10, 20, 15, 30, 40, 35, 50],
  },
  {
    id: '489e1d42',
    amount: 125,
    status: 'processing',
    email: 'example@gmail.com',
    trend: [50, 40, 45, 30, 20, 25, 10],
  },
]

const columnHelper = createColumnHelper<Payment>()

const SimpleSparkline = ({ data }: { data: number[] }) => {
  const max = Math.max(...data)
  const min = Math.min(...data)
  const range = max - min || 1
  const height = 20
  const width = 100
  const step = width / (data.length - 1)

  const points = data
    .map((val, index) => {
      const x = index * step
      const y = height - ((val - min) / range) * height
      return `${x},${y}`
    })
    .join(' ')

  return (
    <svg width={width} height={height} style={{ overflow: 'visible' }}>
      <polyline
        points={points}
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      />
    </svg>
  )
}

const columns = [
  columnHelper.accessor('status', {
    header: 'Status',
    cell: (info) => <Text>{info.getValue()}</Text>,
  }),
  columnHelper.accessor('email', {
    header: 'Email',
    cell: (info) => <Text>{info.getValue()}</Text>,
  }),
  columnHelper.accessor('amount', {
    header: 'Amount',
    cell: (info) => <Text>${info.getValue()}</Text>,
  }),
  columnHelper.accessor('trend', {
    header: 'Trend (Sparkline)',
    cell: (info) => <SimpleSparkline data={info.getValue()} />,
  }),
]

export const Default: Story = {
  args: {
    data,
    columns,
  },
}

export const Loading: Story = {
  args: {
    data: [],
    columns,
    isLoading: true,
  },
}

export const ErrorState: Story = {
  args: {
    data: [],
    columns,
    error: new Error('Failed to fetch data'),
  },
}
