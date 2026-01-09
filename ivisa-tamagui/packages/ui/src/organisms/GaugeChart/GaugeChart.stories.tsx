
import type React from 'react';
import type { Meta, StoryObj } from '@storybook/react'
import { GaugeChart } from './GaugeChart'
import { Text } from 'tamagui'


const meta: Meta<React.ComponentProps<typeof GaugeChart>> = {
  title: 'Organismos/Gráficos/GaugeChart',
  component: GaugeChart,
  argTypes: {
    isLoading: { control: 'boolean' },
    error: { control: 'text' },
    value: { control: { type: 'range', min: 0, max: 100 } },
    variant: {
      control: 'select',
      options: ['default', 'radial'],
    },
  },
}

export default meta
type Story = StoryObj<React.ComponentProps<typeof GaugeChart>>

export const Padrao: Story = {
  args: {
    title: 'Meta de Vacinação',
    value: 75,
    footerContent: <Text color="$gray10">Atualizado há 2 horas</Text>,
  },
}

export const RadialVariant: Story = {
  args: {
    title: 'Progresso Anual',
    value: 60,
    variant: 'radial',
    footerContent: <Text color="$gray10">Meta: 80%</Text>,
  },
}

export const Carregando: Story = {
  args: {
    title: 'Carregando...',
    value: 0,
    isLoading: true,
  },
}

export const Erro: Story = {
  args: {
    title: 'Erro',
    value: 0,
    error: 'Não foi possível carregar os dados',
  },
}
