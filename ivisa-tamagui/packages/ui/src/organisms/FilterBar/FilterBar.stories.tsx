import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { FilterBar } from './FilterBar'

const meta: Meta<React.ComponentProps<typeof FilterBar>> = {
  title: 'Organismos/FilterBar',
  component: FilterBar,
  parameters: {
    layout: 'padded',
  },
}

export default meta
type Story = StoryObj<React.ComponentProps<typeof FilterBar>>

const filters = [
  {
    id: 'search',
    type: 'text' as const,
    placeholder: 'Buscar...',
    label: 'Busca',
  },
  {
    id: 'status',
    type: 'select' as const,
    label: 'Status',
    placeholder: 'Selecione',
    options: [
      { label: 'Ativo', value: 'active' },
      { label: 'Inativo', value: 'inactive' },
      { label: 'Pendente', value: 'pending' },
    ],
  },
  {
    id: 'category',
    type: 'select' as const,
    label: 'Categoria',
    placeholder: 'Todas',
    options: [
      { label: 'Tecnologia', value: 'tech' },
      { label: 'Saúde', value: 'health' },
      { label: 'Educação', value: 'education' },
    ],
  },
  {
      id: 'date',
      type: 'date' as const,
      label: 'Data de Início',
      placeholder: 'Selecione uma data'
  }
]

export const Padrao: Story = {
  args: {
    filters: filters,
    onFilterChange: (values) => console.log('Filters changed:', values),
  },
}

export const WithInitialValues: Story = {
  args: {
    filters: filters,
    initialValues: {
        search: 'Initial query',
        status: 'active'
    },
    onFilterChange: (values) => console.log('Filters changed:', values),
  },
}
