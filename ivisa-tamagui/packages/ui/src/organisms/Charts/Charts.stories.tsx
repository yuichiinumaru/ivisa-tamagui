import type { Meta, StoryObj } from '@storybook/react'
import { Charts } from './Charts'
import { YStack } from 'tamagui'

const meta: Meta<typeof Charts> = {
  title: 'Organismos/Charts',
  component: Charts,
  args: {
    data: [
      { mes: 'Jan', valor: 180 },
      { mes: 'Fev', valor: 250 },
      { mes: 'Mar', valor: 120 },
      { mes: 'Abr', valor: 350 },
      { mes: 'Mai', valor: 200 },
    ],
    xKey: 'mes',
    yKey: 'valor',
    height: 300,
  },
}

export default meta

type Story = StoryObj<typeof Charts>

export const Padrao: Story = {}

export const Carregando: Story = {
  args: {
    isLoading: true,
  },
}

export const EstadoVazio: Story = {
  args: {
    data: [],
  },
}

export const ComErro: Story = {
  args: {
    error: new Error('Falha ao carregar dados'),
  },
}

export const EstresseDeLayout: Story = {
  render: (args) => (
    <YStack width={300} height={400} borderColor="$borderColor" borderWidth={1} padding="$2">
      <Charts {...args} />
    </YStack>
  ),
}
