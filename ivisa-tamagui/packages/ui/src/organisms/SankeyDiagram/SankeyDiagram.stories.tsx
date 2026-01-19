import type { Meta, StoryObj } from '@storybook/react'
import { SankeyDiagram } from './SankeyDiagram'
import { Heading } from 'tamagui'
import React from 'react'

const data = {
  nodes: [
    { id: 'Sources', label: 'Fontes' },
    { id: 'Oil', label: 'Petróleo' },
    { id: 'Gas', label: 'Gás' },
    { id: 'Coal', label: 'Carvão' },
    { id: 'Electricity', label: 'Eletricidade' },
    { id: 'Residential', label: 'Residencial' },
    { id: 'Industrial', label: 'Industrial' },
    { id: 'Transport', label: 'Transporte' },
  ],
  links: [
    { source: 'Oil', target: 'Transport', value: 40 },
    { source: 'Gas', target: 'Electricity', value: 30 },
    { source: 'Gas', target: 'Residential', value: 10 },
    { source: 'Coal', target: 'Electricity', value: 50 },
    { source: 'Electricity', target: 'Residential', value: 20 },
    { source: 'Electricity', target: 'Industrial', value: 60 },
    { source: 'Sources', target: 'Oil', value: 40 },
    { source: 'Sources', target: 'Gas', value: 40 },
    { source: 'Sources', target: 'Coal', value: 50 },
  ]
}

const meta: Meta<React.ComponentProps<typeof SankeyDiagram>> = {
  title: 'Organismos/Gráficos/SankeyDiagram',
  component: SankeyDiagram,
  args: {
    data,
    width: 600,
    height: 400,
    headerContent: <Heading size="$4">Fluxo de Energia</Heading>
  },
}

export default meta

type Story = StoryObj<React.ComponentProps<typeof SankeyDiagram>>

export const Padrao: Story = {}

export const Carregando: Story = {
  args: {
    isLoading: true,
  },
}

export const EstadoVazio: Story = {
  args: {
    data: { nodes: [], links: [] },
  },
}

