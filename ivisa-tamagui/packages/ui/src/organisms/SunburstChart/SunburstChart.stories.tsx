import type { Meta, StoryObj } from '@storybook/react'
import { SunburstChart, SunburstData } from './SunburstChart'

const meta: Meta<typeof SunburstChart> = {
  title: 'Organismos/Gráficos/SunburstChart',
  component: SunburstChart,
  parameters: {
    layout: 'centered',
  },
}

export default meta

type Story = StoryObj<typeof SunburstChart>

const sampleData: SunburstData = {
  name: 'Root',
  children: [
    {
      name: 'Group A',
      children: [
        { name: 'A1', value: 100 },
        { name: 'A2', value: 200 },
      ],
    },
    {
      name: 'Group B',
      children: [
        { name: 'B1', value: 150 },
        { name: 'B2', value: 50 },
        {
          name: 'B3',
          children: [
            { name: 'B3a', value: 20 },
            { name: 'B3b', value: 30 },
          ],
        },
      ],
    },
    {
      name: 'Group C',
      value: 100
    }
  ],
}

export const Padrao: Story = {
  args: {
    data: sampleData,
    width: 400,
    height: 400,
  },
}

export const Carregando: Story = {
  args: {
    data: sampleData,
    isLoading: true,
  },
}

export const Erro: Story = {
  args: {
    data: sampleData,
    error: new Error('Failed to load data'),
  },
}

export const Empty: Story = {
    args: {
        data: null as any,
    }
}
