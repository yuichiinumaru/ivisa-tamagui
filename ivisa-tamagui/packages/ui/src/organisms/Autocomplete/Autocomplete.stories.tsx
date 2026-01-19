
// import type React from 'react';
import type { Meta, StoryObj } from '@storybook/react'
import React, { useState } from 'react'
import { YStack } from 'tamagui'
import { Autocomplete, AutocompleteOption } from './Autocomplete'
import { mockOptions } from './mock'


const meta: Meta<React.ComponentProps<typeof Autocomplete>> = {
  title: 'Organismos/Autocomplete',
  component: Autocomplete,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <YStack padding="$4" alignItems="center" flex={1}>
        <Story />
      </YStack>
    ),
  ],
  parameters: {
    docs: {
      description: {
        component:
          'Um campo de entrada que permite aos usuários pesquisar e selecionar uma opção de uma lista.',
      },
    },
  },
}

export default meta
type Story = StoryObj<React.ComponentProps<typeof Autocomplete>>

const AutocompleteWithState = (args: Story['args']) => {
  const [value, setValue] = useState<AutocompleteOption | null>(null)
  return <Autocomplete {...args} value={value} onValueChange={setValue} />
}

export const Padrao: Story = {
  name: 'Padrão',
  args: {
    options: mockOptions,
    placeholder: 'Selecione uma fruta...',
  },
  render: AutocompleteWithState,
}

export const Carregando: Story = {
  name: 'Carregando',
  args: {
    isLoading: true,
  },
}

export const Vazio: Story = {
  name: 'Vazio',
  args: {
    options: [],
    emptyMessage: 'Nenhuma fruta encontrada com esse nome.',
  },
  render: AutocompleteWithState,
}

export const ComErro: Story = {
  name: 'Com Erro',
  args: {
    hasError: true,
    errorMessage: 'Falha ao carregar as opções. Tente novamente.',
  },
}

export const EstresseDeLayout: Story = {
  name: 'Estresse de Layout',
  args: {
    ...Padrao.args,
    value: mockOptions.find((opt) => opt.value === 'jabuticaba'),
  },
  decorators: [
    (Story) => (
      <YStack width={250} padding="$4" alignItems="center" flex={1}>
        <Story />
      </YStack>
    ),
  ],
  render: AutocompleteWithState,
}

export type AutocompleteWithStateProps = React.ComponentProps<typeof AutocompleteWithState>

