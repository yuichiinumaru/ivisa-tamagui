import type { Meta, StoryObj } from '@storybook/react'
import { NetworkGraph } from './NetworkGraph'
import { Heading } from 'tamagui'
import React from 'react'

const data = {
  nodes: [
    { id: '1', label: 'Centro' },
    { id: '2', label: 'Norte' },
    { id: '3', label: 'Sul' },
    { id: '4', label: 'Leste' },
    { id: '5', label: 'Oeste' },
  ],
  links: [
    { source: '1', target: '2' },
    { source: '1', target: '3' },
    { source: '1', target: '4' },
    { source: '1', target: '5' },
    { source: '2', target: '3' },
  ]
}

const meta: Meta<typeof NetworkGraph> = {
  title: 'Organisms/NetworkGraph',
  component: NetworkGraph,
  args: {
    data,
    width: 600,
    height: 400,
    headerContent: <Heading size="$4">Topologia da Rede</Heading>
  },
}

export default meta

type Story = StoryObj<typeof NetworkGraph>

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
