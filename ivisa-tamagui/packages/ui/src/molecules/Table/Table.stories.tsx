
// import type React from 'react';
import type { Meta, StoryObj } from '@storybook/react'
import { Table, TableColumn } from './Table'
import { TableFooter, TableRow, TableCell } from './Table.parts'
import { YStack, Text } from 'tamagui'
import { Badge } from '../../atoms/Badge'


// =================================================================================================
// MOCKS
// =================================================================================================

interface Invoice {
  id: string
  invoice: string
  paymentStatus: 'Paid' | 'Pending' | 'Unpaid'
  totalAmount: string
  paymentMethod: string
}

const invoices: Invoice[] = [
  { id: '1', invoice: 'FAT001', paymentStatus: 'Paid', totalAmount: 'R$250,00', paymentMethod: 'Cartão de Crédito' },
  { id: '2', invoice: 'FAT002', paymentStatus: 'Pending', totalAmount: 'R$150,00', paymentMethod: 'PayPal' },
  { id: '3', invoice: 'FAT003', paymentStatus: 'Unpaid', totalAmount: 'R$350,00', paymentMethod: 'Transferência' },
  { id: '4', invoice: 'FAT004', paymentStatus: 'Paid', totalAmount: 'R$450,00', paymentMethod: 'Cartão de Crédito' },
  { id: '5', invoice: 'FAT005', paymentStatus: 'Paid', totalAmount: 'R$550,00', paymentMethod: 'PayPal' },
]

const columns: TableColumn<Invoice>[] = [
  {
    header: 'Fatura',
    accessor: 'invoice',
    render: (item) => <Text fontWeight="bold">{item.invoice}</Text>,
  },
  {
    header: 'Status',
    accessor: 'paymentStatus',
    render: (item) => {
      const statusMap = {
        Paid: { label: 'Pago', color: 'green' },
        Pending: { label: 'Pendente', color: 'orange' },
        Unpaid: { label: 'Não Pago', color: 'red' },
      }
      const { label, color } = statusMap[item.paymentStatus]
      return <Badge color={color}>{label}</Badge>
    },
  },
  {
    header: 'Método',
    accessor: 'paymentMethod',
  },
  {
    header: 'Valor',
    accessor: 'totalAmount',
    render: (item) => <Text textAlign="right">{item.totalAmount}</Text>,
  },
]

// =================================================================================================
// META
// =================================================================================================

const meta: Meta<React.ComponentProps<typeof Table>> = {
  title: 'Moléculas/Table',
  component: Table,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Uma tabela responsiva para exibir dados tabulares com estados de carregamento, erro e vazio.',
      },
    },
  },
}

export default meta
type Story = StoryObj<React.ComponentProps<typeof Table>>

// =================================================================================================
// STORIES
// =================================================================================================

export const Padrao: Story = {
  args: {
    columns: columns,
    data: invoices,
    caption: 'Uma lista das suas faturas recentes.',
  },
}

export const Carregando: Story = {
  args: {
    ...Padrao.args,
    isLoading: true,
  },
}

export const Empty: Story = {
  args: {
    ...Padrao.args,
    data: [],
  },
}

export const Error: Story = {
  args: {
    ...Padrao.args,
    data: undefined, // data is undefined to simulate error
    hasError: true,
  },
}

export const InSmallContainer: Story = {
  render: (args) => (
    <YStack width={400} mx="auto">
      <Table {...args} />
    </YStack>
  ),
  args: {
    ...Padrao.args,
    caption: 'A tabela se ajusta a um contêiner estreito com truncamento de texto.',
  },
}

export const WithFooter: Story = {
  args: {
    ...Padrao.args,
    footer: (
      <TableFooter>
        <TableRow>
          <TableCell>
            <Text fontWeight="bold">Total</Text>
          </TableCell>
          <TableCell />
          <TableCell />
          <TableCell>
            <Text fontWeight="bold" textAlign="right">
              R$1.750,00
            </Text>
          </TableCell>
        </TableRow>
      </TableFooter>
    ),
  },
}

export const WithPartialData: Story = {
  args: {
    ...Padrao.args,
    data: [
      ...invoices,
      {
        id: '6',
        invoice: 'FAT006',
        paymentStatus: 'Pending',
        totalAmount: null, // null value
        paymentMethod: undefined, // undefined value
      },
    ],
    caption: 'Tabela com alguns dados ausentes (nulos ou indefinidos).',
  },
}

