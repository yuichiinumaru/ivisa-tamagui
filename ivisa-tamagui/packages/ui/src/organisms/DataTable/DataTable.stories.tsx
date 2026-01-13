// @ts-nocheck


import type React from 'react';
import {
  DataTable,
  DataTableProps,
} from './DataTable'
import type { Meta, StoryObj } from '@storybook/react'
import { createColumnHelper } from '@tanstack/react-table'
import { MoreHorizontal } from '@tamagui/lucide-icons'
import { Button } from '../../atoms/Button'
import {

  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '../../molecules/DropdownMenu'

const meta: Meta<React.ComponentProps<typeof DataTable>> = {
  title: 'Organismos/DataTable',
  component: DataTable,
  parameters: {
    layout: 'padded',
  },
}

export default meta
type Story = StoryObj<React.ComponentProps<typeof DataTable>>

type Person = {
  id: string
  firstName: string
  lastName: string
  age: number
  status: 'active' | 'inactive' | 'pending'
}

const columnHelper = createColumnHelper<Person>()

const columns = [
  columnHelper.accessor('firstName', {
    header: 'Nome',
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor('lastName', {
    header: 'Sobrenome',
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor('age', {
    header: 'Idade',
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor('status', {
    header: 'Status',
    cell: (info) => info.getValue(),
  }),
  columnHelper.display({
    id: 'actions',
    cell: () => (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" size="sm" icon={<MoreHorizontal size={16} />} />
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem>Editar</DropdownMenuItem>
          <DropdownMenuItem>Excluir</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    ),
  }),
]

const data: Person[] = [
  { id: '1', firstName: 'João', lastName: 'Silva', age: 30, status: 'active' },
  { id: '2', firstName: 'Maria', lastName: 'Santos', age: 25, status: 'pending' },
  { id: '3', firstName: 'Pedro', lastName: 'Oliveira', age: 40, status: 'inactive' },
  { id: '4', firstName: 'Ana', lastName: 'Costa', age: 28, status: 'active' },
  { id: '5', firstName: 'Lucas', lastName: 'Pereira', age: 35, status: 'active' },
]

export const Padrao: Story = {
  name: 'Padrão (Default)',
  args: {
    columns,
    data,
  },
}

export const Loading: Story = {
  args: {
    columns,
    data: [],
    isLoading: true,
  },
}

export const EmptyState: Story = {
  args: {
    columns,
    data: [],
  },
}

export const ErrorState: Story = {
  args: {
    columns,
    data: [],
    error: new Error('Falha ao carregar dados'),
  },
}
