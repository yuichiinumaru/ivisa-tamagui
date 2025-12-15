import type { Meta, StoryObj } from '@storybook/react'
import { TreemapChart } from './TreemapChart'
import { Heading } from 'tamagui'
import React from 'react'

const data = [
  { name: 'Alpha', size: 200 },
  { name: 'Beta', size: 150 },
  { name: 'Gamma', size: 100 },
  { name: 'Delta', size: 80 },
  { name: 'Epsilon', size: 50 },
  { name: 'Zeta', size: 30 },
  { name: 'Eta', size: 20 },
]

const meta: Meta<typeof TreemapChart> = {
  title: 'Organismos/Gráficos/TreemapChart',
  component: TreemapChart,
  args: {
    data,
    labelKey: 'name',
    valueKey: 'size',
    height: 350,
    headerContent: <Heading size="$4">Distribuição de Recursos</Heading>
  },
}

export default meta

type Story = StoryObj<typeof TreemapChart>

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
