
import type React from 'react';
import type { Meta, StoryObj } from '@storybook/react'
import { SignaturePad } from './SignaturePad'


const meta: Meta<React.ComponentProps<typeof SignaturePad>> = {
  title: 'Organismos/SignaturePad',
  component: SignaturePad,
  tags: ['autodocs'],
  args: {
    strokeColor: '#000',
    strokeWidth: 3,
  },
}

export default meta
type Story = StoryObj<React.ComponentProps<typeof SignaturePad>>

export const Padrao: Story = {}

export const BlueInk: Story = {
  args: {
    strokeColor: 'blue',
  },
}

export const WithCallback: Story = {
    args: {
        onSave: (path) => alert(`Saved path length: ${path.length}`),
    }
}
