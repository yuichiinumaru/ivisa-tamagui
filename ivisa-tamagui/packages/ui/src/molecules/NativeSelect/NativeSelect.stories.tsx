
// import type React from 'react';
import type { Meta, StoryObj } from '@storybook/react'
import { YStack } from 'tamagui'
import { NativeSelect } from './NativeSelect'


const meta: Meta<React.ComponentProps<typeof NativeSelect>> = {
  title: 'Moléculas/NativeSelect',
  component: NativeSelect,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Um seletor nativo que utiliza o elemento select do navegador.',
      },
    },
  },
  argTypes: {
    label: {
      control: 'text',
      description: 'O rótulo exibido acima do seletor.',
    },
    disabled: {
      control: 'boolean',
      description: 'Desabilita o seletor.',
    },
    hasError: {
      control: 'boolean',
      description: 'Exibe o estado de erro.',
    },
    isLoading: {
      control: 'boolean',
      description: 'Exibe o estado de carregamento (skeleton).',
    },
    children: {
      control: 'none',
      description: 'As opções do seletor (elementos `<option>`).',
    },
  },
}

export default meta
type Story = StoryObj<React.ComponentProps<typeof NativeSelect>>

const defaultOptions = (
  <>
    <option value="">-- Selecione uma opção --</option>
    <option value="1">Opção 1 com texto bem longo para testar o componente</option>
    <option value="2">Opção 2</option>
    <option value="3">Opção 3</option>
  </>
)

export const Padrao: Story = {
  name: 'Padrão',
  args: {
    label: 'Seletor Padrão',
    children: defaultOptions,
    disabled: false,
    hasError: false,
    isLoading: false,
  },
}

export const Desabilitado: Story = {
  name: 'Desabilitado',
  args: {
    ...Padrao.args,
    label: 'Seletor Desabilitado',
    disabled: true,
  },
}

export const ComErro: Story = {
  name: 'Com Erro',
  args: {
    ...Padrao.args,
    label: 'Seletor com Erro',
    hasError: true,
  },
}

export const Carregando: Story = {
  name: 'Carregando',
  args: {
    ...Padrao.args,
    label: 'Carregando Seletor',
    isLoading: true,
  },
}

export const TesteDeEstresse: Story = {
  name: 'Teste de Estresse (Container Estreito)',
  render: (args) => (
    <YStack width={200} gap="$4">
      <NativeSelect {...args} />
      <NativeSelect {...args} hasError />
    </YStack>
  ),
  args: {
    ...Padrao.args,
    label: 'Seletor em Container Estreito',
  },
}

