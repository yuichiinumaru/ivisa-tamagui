import type { Meta, StoryObj } from '@storybook/react'
import { Table, TableHeader, TableBody, TableFooter, TableRow, TableHead, TableCell, TableCaption } from './Table'

const meta: Meta<typeof Table> = {
  title: 'Molecules/Table',
  component: Table,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof Table>

export const Default: Story = {
  render: () => (
    <Table>
      <TableCaption>A list of your recent invoices.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Invoice</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Method</TableHead>
          <TableHead>Amount</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell>INV001</TableCell>
          <TableCell>Paid</TableCell>
          <TableCell>Credit Card</TableCell>
          <TableCell>$250.00</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>INV002</TableCell>
          <TableCell>Pending</TableCell>
          <TableCell>PayPal</TableCell>
          <TableCell>$150.00</TableCell>
        </TableRow>
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell>Total</TableCell>
          <TableCell></TableCell>
          <TableCell></TableCell>
          <TableCell>$400.00</TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  ),
}
