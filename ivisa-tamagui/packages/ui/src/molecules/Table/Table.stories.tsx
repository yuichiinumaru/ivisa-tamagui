import type { Meta, StoryObj } from '@storybook/react'
import { Table, TableHeader, TableBody, TableFooter, TableRow, TableHead, TableCell, TableCaption } from './Table'
import { Text } from '../../atoms/Typography'

const invoices = [
  { invoice: 'INV001', paymentStatus: 'Paid', totalAmount: '$250.00', paymentMethod: 'Credit Card' },
  { invoice: 'INV002', paymentStatus: 'Pending', totalAmount: '$150.00', paymentMethod: 'PayPal' },
  { invoice: 'INV003', paymentStatus: 'Unpaid', totalAmount: '$350.00', paymentMethod: 'Bank Transfer' },
  { invoice: 'INV004', paymentStatus: 'Paid', totalAmount: '$450.00', paymentMethod: 'Credit Card' },
  { invoice: 'INV005', paymentStatus: 'Paid', totalAmount: '$550.00', paymentMethod: 'PayPal' },
]

const meta: Meta<typeof Table> = {
  title: 'Molecules/Table',
  component: Table,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'A responsive table component for displaying tabular data.',
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof Table>

export const Playground: Story = {
  render: (args) => (
    <Table {...args}>
      <TableHeader>
        <TableRow>
          <TableHead>Invoice</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Method</TableHead>
          <TableHead>Amount</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {invoices.map((invoice) => (
          <TableRow key={invoice.invoice}>
            <TableCell>
              <Text fontWeight="bold">{invoice.invoice}</Text>
            </TableCell>
            <TableCell>{invoice.paymentStatus}</TableCell>
            <TableCell>{invoice.paymentMethod}</TableCell>
            <TableCell>
              <Text textAlign="right">{invoice.totalAmount}</Text>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  ),
}

export const WithCaption: Story = {
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
        {invoices.slice(0, 3).map((invoice) => (
          <TableRow key={invoice.invoice}>
            <TableCell>{invoice.invoice}</TableCell>
            <TableCell>{invoice.paymentStatus}</TableCell>
            <TableCell>{invoice.paymentMethod}</TableCell>
            <TableCell>{invoice.totalAmount}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  ),
}

export const WithFooter: Story = {
  render: () => (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Invoice</TableHead>
          <TableHead>Amount</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {invoices.map((invoice) => (
          <TableRow key={invoice.invoice}>
            <TableCell>{invoice.invoice}</TableCell>
            <TableCell>{invoice.totalAmount}</TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell>
            <Text fontWeight="bold">Total</Text>
          </TableCell>
          <TableCell>
            <Text fontWeight="bold">$1,750.00</Text>
          </TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  ),
}
