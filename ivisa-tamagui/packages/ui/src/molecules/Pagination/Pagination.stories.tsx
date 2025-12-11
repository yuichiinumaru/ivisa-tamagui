import type { Meta, StoryObj } from '@storybook/react'
import React, { useState } from 'react'
import { YStack } from 'tamagui'

import { Pagination, PaginationProps } from './Pagination'

const meta: Meta<PaginationProps> = {
  title: 'Molecules/Paginação',
  component: Pagination,
  tags: ['autodocs'],
  args: {
    totalPages: 10,
    siblingCount: 1,
    showEdges: true,
    disabled: false,
    isLoading: false,
    hasError: false,
  },
  argTypes: {
    totalPages: {
      control: { type: 'number', min: 1, step: 1 },
    },
    siblingCount: {
      control: { type: 'number', min: 0, step: 1 },
    },
    currentPage: {
      control: { type: 'number', min: 1, step: 1 },
    },
  },
  parameters: {
    docs: {
      description: {
        component: 'Componente para navegação entre páginas.',
      },
    },
  },
}

export default meta

type Story = StoryObj<typeof meta>

export const Padrao: Story = {
  name: 'Padrão',
  render: (args) => {
    const [page, setPage] = useState(5)

    return (
      <Pagination
        {...args}
        currentPage={page}
        onPageChange={setPage}
      />
    )
  },
}

export const Compacto: Story = {
  name: 'Compacto',
  render: (args) => {
    const [page, setPage] = useState(5)

    return (
      <Pagination
        {...args}
        currentPage={page}
        siblingCount={0}
        size="sm"
        onPageChange={setPage}
      />
    )
  },
  args: {
    totalPages: 6,
  },
}

export const Desabilitado: Story = {
  name: 'Desabilitado',
  args: {
    disabled: true,
    currentPage: 2,
  },
}

export const Carregando: Story = {
  name: 'Carregando',
  args: {
    isLoading: true,
  },
}

export const ComErro: Story = {
  name: 'Com Erro',
  args: {
    hasError: true,
    currentPage: 1,
  },
}

export const TesteDeEstresse: Story = {
  name: 'Teste de Estresse',
  render: (args) => {
    const [page, setPage] = useState(50)
    return (
      <YStack maxWidth={380}>
        <Pagination
          {...args}
          currentPage={page}
          onPageChange={setPage}
        />
      </YStack>
    )
  },
  args: {
    totalPages: 100,
  },
}
