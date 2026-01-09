
import type React from 'react';
import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import { YStack } from 'tamagui'

import { MonthsPicker } from './MonthsPicker'


const meta: Meta<React.ComponentProps<typeof MonthsPicker>> = {
  title: 'Moléculas/Seletor de Mês',
  component: MonthsPicker,
  tags: ['autodocs'],
  args: {
    placeholder: 'Selecione o Mês',
    isLoading: false,
    hasError: false,
    isDisabled: false,
  },
  argTypes: {
    onValueChange: { action: 'onValueChange' },
  },
  decorators: [
    (Story) => (
      <YStack width={300} ai="center" jc="center">
        <Story />
      </YStack>
    ),
  ],
  parameters: {
    docs: {
      description: {
        component: 'Um seletor de mês que permite ao usuário escolher um mês do ano.',
      },
    },
  },
}

export default meta
type Story = StoryObj<React.ComponentProps<typeof MonthsPicker>>

const DefaultRender = (args) => {
  const [month, setMonth] = useState<string>('')
  return <MonthsPicker {...args} value={month} onValueChange={setMonth} />
}

export const Padrao: Story = {
  name: 'Padrão',
  render: DefaultRender,
}

export const Carregando: Story = {
  args: {
    isLoading: true,
  },
}

export const ComErro: Story = {
  name: 'Com Erro',
  args: {
    hasError: true,
  },
  render: DefaultRender,
}

export const Desabilitado: Story = {
  args: {
    isDisabled: true,
  },
  render: DefaultRender,
}

export const EmContainerPequeno: Story = {
  name: 'Em Container Pequeno',
  decorators: [
    (Story) => (
      <YStack width={220} ai="center" jc="center">
        <Story />
      </YStack>
    ),
  ],
  render: DefaultRender,
}

export type DefaultRenderProps = React.ComponentProps<typeof DefaultRender>
