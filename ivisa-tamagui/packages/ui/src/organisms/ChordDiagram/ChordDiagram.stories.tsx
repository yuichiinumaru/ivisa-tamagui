import type { Meta, StoryObj } from '@storybook/react'
import { ChordDiagram } from './ChordDiagram'
import { Heading } from 'tamagui'
import React from 'react'

const matrix = [
  [11975,  5871, 8916, 2868],
  [ 1951, 10048, 2060, 6171],
  [ 8010, 16145, 8090, 8045],
  [ 1013,   990,  940, 6907]
];
const labels = ['Preto', 'Loiro', 'Castanho', 'Ruivo'];

const meta: Meta<React.ComponentProps<typeof ChordDiagram>> = {
  title: 'Organismos/Gráficos/ChordDiagram',
  component: ChordDiagram,
  args: {
    matrix,
    labels,
    width: 400,
    height: 400,
    headerContent: <Heading size="$4">Interação entre Cores</Heading>
  },
}

export default meta

type Story = StoryObj<React.ComponentProps<typeof ChordDiagram>>

export const Padrao: Story = {}

export const Carregando: Story = {
  args: {
    isLoading: true,
  },
}

export const EstadoVazio: Story = {
  args: {
    matrix: [],
  },
}

