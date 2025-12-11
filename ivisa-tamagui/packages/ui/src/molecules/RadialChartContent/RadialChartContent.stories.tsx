import { Button } from '../../atoms/Button'
import type { Meta, StoryObj } from '@storybook/react'
import { RadialChartContent } from './RadialChartContent'
import { YStack } from 'tamagui'
import { DollarSign, Activity } from '@tamagui/lucide-icons'

const meta: Meta<typeof RadialChartContent> = {
  title: 'Molecules/RadialChartContent',
  component: RadialChartContent,
  tags: ['autodocs'],
  argTypes: {
    title: { control: 'text' },
    subtitle: { control: 'text' },
    isLoading: { control: 'boolean' },
    hasError: { control: 'boolean' },
    isDisabled: { control: 'boolean' },
  },
  args: {
    title: 'Receita Total',
    subtitle: 'Faturamento dos últimos 6 meses',
    data: [
      { label: 'Realizado', value: 'R$ 50.000', color: '$green10' },
      { label: 'Meta', value: 'R$ 80.000', color: '$blue10' },
    ],
    rightSlot: <Button>Ver Detalhes</Button>,
    isLoading: false,
    hasError: false,
    isDisabled: false,
  },
}

export default meta
type Story = StoryObj<typeof RadialChartContent>

export const Default: Story = {}

export const Loading: Story = {
  args: {
    isLoading: true,
  },
}

export const Error: Story = {
  args: {
    hasError: true,
  },
}

export const Disabled: Story = {
  args: {
    isDisabled: true,
  },
}

export const PartialData: Story = {
  args: {
    subtitle: undefined,
    rightSlot: undefined,
    data: [{ label: 'Realizado', value: 'R$ 50.000' }],
  },
}

export const CustomDataPointIcon: Story = {
  name: 'Custom Data Point Icon',
  args: {
    data: [
      { label: 'Realizado', value: 'R$ 50.000', color: '$green10', icon: DollarSign },
      { label: 'Meta', value: 'R$ 80.000', color: '$blue10', icon: DollarSign },
    ],
  },
}

export const CustomMainIcon: Story = {
  name: 'Custom Main Icon',
  args: {
    icon: <Activity />,
  },
}

export const ConstrainedWidth: Story = {
  render: (args) => (
    <YStack w="$20">
      <RadialChartContent {...args} />
    </YStack>
  ),
  args: {
    title: 'Receita Total com Título Muito Longo Que Deveria Truncar',
    subtitle: 'Este é um subtítulo igualmente longo para testar o comportamento do componente',
  },
}
