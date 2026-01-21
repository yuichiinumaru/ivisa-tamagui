
import type React from 'react';
import type { Meta, StoryObj } from '@storybook/react'
import { LocationStatus } from './LocationStatus'


const meta: Meta<React.ComponentProps<typeof LocationStatus>> = {
  title: 'Organismos/LocationStatus',
  component: LocationStatus,
  tags: ['autodocs'],
  args: {
    latitude: -22.9068,
    longitude: -43.1729,
    accuracy: 5,
    timestamp: new Date().toISOString(),
  },
}

export default meta
type Story = StoryObj<React.ComponentProps<typeof LocationStatus>>

export const HighAccuracy: Story = {
  args: {
    accuracy: 5,
  },
}

export const MediumAccuracy: Story = {
  args: {
    accuracy: 25,
  },
}

export const LowAccuracy: Story = {
  args: {
    accuracy: 100,
  },
}

export const Searching: Story = {
  args: {
    isSearching: true,
  },
}

export const Error: Story = {
  args: {
    error: 'GPS indisponível',
  },
}

