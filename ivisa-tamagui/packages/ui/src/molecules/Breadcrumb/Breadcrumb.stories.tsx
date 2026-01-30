// @ts-nocheck
import React from 'react'
import { Meta, StoryObj } from '@storybook/react'
import { Breadcrumb } from './Breadcrumb'

const meta: Meta<typeof Breadcrumb> = {
  title: 'Moléculas/Breadcrumb',
  component: Breadcrumb,
  argTypes: {
    maxItems: { control: 'number' },
  },
}

export default meta

type Story = StoryObj<typeof Breadcrumb>

const items = [
  { label: 'Home', href: '/' },
  { label: 'Products', href: '/products' },
  { label: 'Electronics', href: '/products/electronics' },
  { label: 'Laptops', href: '/products/electronics/laptops' },
  { label: 'Gaming', href: '/products/electronics/laptops/gaming' },
  { label: 'Alienware', href: '/products/electronics/laptops/gaming/alienware' },
]

export const Default: Story = {
  args: {
    items: items.slice(0, 3),
  },
}

export const Collapsed: Story = {
  args: {
    items: items,
    maxItems: 4,
  },
}

export const CustomCollapse: Story = {
  args: {
    items: items,
    maxItems: 3,
    itemsBeforeCollapse: 2,
    itemsAfterCollapse: 1,
  },
}
