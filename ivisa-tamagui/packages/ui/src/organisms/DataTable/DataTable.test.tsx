import { render, screen } from '../../../vitest.setup'
import { DataTable } from './DataTable'
import { ColumnDef } from '@tanstack/react-table'

type Payment = {
  id: string
  amount: number
  status: string
  email: string
}

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

const data: Payment[] = [
  { id: '1', amount: 100, status: 'success', email: 'test@example.com' },
]

describe('DataTable', () => {
  it('renders data', () => {
    render(<DataTable columns={columns} data={data} />)
    expect(screen.getByText('test@example.com')).toBeInTheDocument()
    expect(screen.getByText('Status')).toBeInTheDocument()
  })
})
