import type { Meta, StoryObj } from '@storybook/react'
import { HeatmapChart } from './HeatmapChart'
import { YStack, Heading } from 'tamagui'
import React from 'react'

const generateData = () => {
  const data = []
  const days = ['Seg', 'Ter', 'Qua', 'Qui', 'Sex']
  const times = ['08h', '10h', '12h', '14h', '16h']
  days.forEach(d => {
    times.forEach(t => {
      data.push({
        day: d,
        time: t,
        count: Math.floor(Math.random() * 50)
      })
    })
  })
  return data
}

const meta: Meta<React.ComponentProps<typeof HeatmapChart>> = {
  title: 'Organismos/Gráficos/HeatmapChart',
  component: HeatmapChart,
  args: {
    data: generateData(),
    xKey: 'day',
    yKey: 'time',
    valueKey: 'count',
    height: 350,
  },
}

export default meta

type Story = StoryObj<React.ComponentProps<typeof HeatmapChart>>

export const Padrao: Story = {
  render: (args) => (
    <HeatmapChart
      {...args}
      headerContent={<Heading size="$4">Ocupação por Horário</Heading>}
    />
  ),
}

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
