import type { Meta, StoryObj } from '@storybook/react'
import { InputGroup } from './InputGroup'
import { Input } from '../../atoms/Input'
import { Button } from '../../atoms/Button'
import { Search } from '@tamagui/lucide-icons'
import { YStack } from 'tamagui'

const meta: Meta<typeof InputGroup> = {
  title: 'Moléculas/InputGroup',
  component: InputGroup,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Um InputGroup é um componente que agrupa um input e um botão, gerenciando seus estados de forma unificada.',
      },
    },
  },
  argTypes: {
    children: {
      control: { disable: true },
    },
    isDisabled: {
      control: 'boolean',
      description: 'Desabilita o grupo de input.',
    },
    hasError: {
      control: 'boolean',
      description: 'Aplica o estilo de erro ao grupo de input.',
    },
    isLoading: {
      control: 'boolean',
      description: 'Mostra um spinner e desabilita ações.',
    },
  },
}

export default meta
type Story = StoryObj<typeof InputGroup>

export const Default: Story = {
  args: {
    isDisabled: false,
    hasError: false,
    isLoading: false,
  },
  render: (args) => (
    <InputGroup {...args}>
      <Input placeholder="Pesquisar..." />
      <Button icon={Search} />
    </InputGroup>
  ),
}

export const ComBotaoDeTexto: Story = {
  name: 'Com Botão de Texto',
  render: () => (
    <InputGroup>
      <Input placeholder="Seu melhor e-mail..." />
      <Button>Inscrever-se</Button>
    </InputGroup>
  ),
}

export const Desabilitado: Story = {
  name: 'Estado: Desabilitado',
  render: () => (
    <InputGroup isDisabled>
      <Input placeholder="Pesquisar..." />
      <Button icon={Search} />
    </InputGroup>
  ),
}

export const ComErro: Story = {
  name: 'Estado: Com Erro',
  render: () => (
    <InputGroup hasError>
      <Input placeholder="Pesquisar..." />
      <Button icon={Search} />
    </InputGroup>
  ),
}

export const Carregando: Story = {
  name: 'Estado: Carregando',
  render: () => (
    <InputGroup isLoading>
      <Input placeholder="Pesquisar..." />
      <Button icon={Search} />
    </InputGroup>
  ),
}

export const TesteDeEstresse: Story = {
  name: 'Teste de Estresse: Container Estreito',
  render: () => (
    <YStack width={250} space>
      <InputGroup>
        <Input placeholder="Email para novidades..." />
        <Button>Inscrever</Button>
      </InputGroup>
    </YStack>
  ),
}
