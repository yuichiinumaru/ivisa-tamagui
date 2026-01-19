import type { Meta, StoryObj } from '@storybook/react'
import { StatusLight } from './StatusLight'
import { YStack } from 'tamagui'

const meta: Meta<any> = {
  title: 'Átomos/StatusLight',
  component: StatusLight,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<any>

export const Default: Story = {
  args: {
    children: 'Neutro',
    variant: 'neutral',
  },
}

export const Variants: Story = {
  render: () => (
    <YStack gap="$4">
      <StatusLight variant="neutral">Neutro</StatusLight>
      <StatusLight variant="positive">Positivo</StatusLight>
      <StatusLight variant="notice">Aviso</StatusLight>
      <StatusLight variant="negative">Negativo</StatusLight>
      <StatusLight variant="info">Informativo</StatusLight>
    </YStack>
  ),
}

export const Disabled: Story = {
  args: {
    children: 'Desabilitado',
    disabled: true,
    variant: 'positive',
  },
}

