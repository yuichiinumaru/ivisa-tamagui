// @ts-nocheck

// import type React from 'react';
import type { Meta, StoryObj } from '@storybook/react'
import { ScannerView } from './ScannerView'


const meta: Meta<React.ComponentProps<typeof ScannerView>> = {
  title: 'Organismos/ScannerView',
  component: ScannerView,
  tags: ['autodocs'],
  args: {
    isActive: true,
  },
}

export default meta
type Story = StoryObj<React.ComponentProps<typeof ScannerView>>

export const Active: Story = {
  args: {
    isActive: true,
    mockData: 'QR-CODE-123',
  },
}

export const Inactive: Story = {
  args: {
    isActive: false,
  },
}

export const WithCallback: Story = {
    args: {
        isActive: true,
        mockData: 'BARCODE-789',
        onScan: (data) => alert(`Scanned: ${data}`),
        onClose: () => alert('Closed'),
    }
}
