import React, { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Pagination, PaginationProps } from './Pagination'

const meta: Meta<PaginationProps> = {
  title: 'Molecules/Pagination',
  component: Pagination,
  tags: ['autodocs'],
  args: {
    totalPages: 10,
    siblingCount: 1,
    showEdges: true,
    disabled: false,
  },
}

export default meta;

type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => {
    const [page, setPage] = useState(3)

    return (
      <Pagination
        {...args}
        currentPage={page}
        onPageChange={setPage}
      />
    )
  },
}

export const Compact: Story = {
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

export const Disabled: Story = {
  render: (args) => (
    <Pagination
      {...args}
      currentPage={2}
      onPageChange={() => {}}
    />
  ),
  args: {
    disabled: true,
  },
}
