import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Breadcrumb, BreadcrumbProps } from './Breadcrumb'

const meta: Meta<BreadcrumbProps> = {
  title: 'Molecules/Breadcrumb',
  component: Breadcrumb,
  tags: ['autodocs'],
  args: {
    ariaLabel: 'Breadcrumb NAV'
  }
}

export default meta

type Story = StoryObj<typeof meta>

const defaultItems = [
  { label: 'Home', href: '#' },
  { label: 'Projects', href: '#' },
  { label: 'Design System', href: '#' },
  { label: 'Docs' }
]

export const Default: Story = {
  args: {
    items: defaultItems
  }
}

export const CustomSeparator: Story = {
  args: {
    items: defaultItems,
    separator: '>'
  }
}

export const LongTrail: Story = {
  args: {
    items: [
      { label: 'Home', href: '#' },
      { label: 'Platform', href: '#' },
      { label: 'Components', href: '#' },
      { label: 'Navigation', href: '#' },
      { label: 'Breadcrumb', href: '#' },
      { label: 'Specs' }
    ],
    separator: '•'
  }
}
