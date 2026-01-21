
import type React from 'react';
import type { Meta, StoryObj } from '@storybook/react'
import { A11yToolbar } from './A11yToolbar'


const meta: Meta<React.ComponentProps<typeof A11yToolbar>> = {
  title: 'Organismos/A11yToolbar',
  component: A11yToolbar,
  tags: ['autodocs'],
  args: {
    isDark: false,
  },
}

export default meta
type Story = StoryObj<React.ComponentProps<typeof A11yToolbar>>

export const Padrao: Story = {}

export const DarkMode: Story = {
  args: {
    isDark: true,
  },
}

