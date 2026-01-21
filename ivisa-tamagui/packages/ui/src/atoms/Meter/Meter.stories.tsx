// @ts-nocheck
import type { Meta, StoryObj } from '@storybook/react'
import { Meter } from './Meter'
import { YStack } from 'tamagui'

const meta: Meta<typeof Meter> = {
  title: 'Átomos/Meter',
  component: Meter,
  tags: ['autodocs'],
  args: {
    min: 0,
    max: 100,
  },
}

export default meta
type Story = StoryObj<typeof Meter>

export const Default: Story = {
  args: {
    label: 'Armazenamento',
    valueLabel: '50%',
    value: 50,
  },
  render: (args) => (
    <div style={{ width: 300 }}>
      <Meter {...args} />
    </div>
  ),
}

export const Variants: Story = {
  render: () => (
    <YStack gap="$4" width={300}>
      <Meter value={80} label="Bom" variant="positive" />
      <Meter value={60} label="Atenção" variant="notice" />
      <Meter value={20} label="Crítico" variant="negative" />
      <Meter value={40} label="Info" variant="info" />
    </YStack>
  ),
}

