import type React from 'react';
import type { Meta, StoryObj } from '@storybook/react'
import { InputGroup } from './InputGroup'
import { Input } from '../../atoms/Input'
import { Button } from '../../atoms/Button'
import { Search } from '@tamagui/lucide-icons'
import { YStack, Text } from 'tamagui'

// Extraímos as props reais do componente para garantir que o Storybook não invente nomes
type InputGroupProps = React.ComponentProps<typeof InputGroup>;

const meta: Meta<InputGroupProps> = {
  title: 'Moléculas/InputGroup',
  component: InputGroup,
  tags: ['autodocs'],
  argTypes: {
    // Usamos os nomes exatos que o seu componente espera
    disabled: {
      control: 'boolean',
      description: 'Desabilita o grupo de input.',
    },
    isLoading: {
      control: 'boolean',
      description: 'Mostra um spinner e desabilita ações.',
    },
  },
}

export default meta
type Story = StoryObj<InputGroupProps>

export const Padrao: Story = {
  args: {
    disabled: false,
    isLoading: false,
  } as InputGroupProps,
  render: (args) => (
    <InputGroup {...args}>
      <Input placeholder="Pesquisar..." />
      <Button size="sm" circular>
        <Search size={18} />
      </Button>
    </InputGroup>
  ),
}

export const ComBotaoDeTexto: Story = {
  name: 'Com Botão de Texto',
  render: (args) => (
    <InputGroup {...args}>
      <Input placeholder="Seu melhor e-mail..." />
      <Button>Inscrever-se</Button>
    </InputGroup>
  ),
}

export const Desabilitado: Story = {
  name: 'Estado: Desabilitado',
  render: () => (
    <InputGroup disabled>
      <Input placeholder="Pesquisar..." />
      <Button size="sm" circular>
        <Search size={18} />
      </Button>
    </InputGroup>
  ),
}

export const Carregando: Story = {
  name: 'Estado: Carregando',
  render: () => (
    <InputGroup isLoading>
      <Input placeholder="Pesquisar..." />
      <Button size="sm" circular>
        <Search size={18} />
      </Button>
    </InputGroup>
  ),
}

export const TesteDeEstresse: Story = {
  name: 'Teste de Estresse: Container Estreito',
  render: () => (
    <YStack width={250} gap="$4">
      <InputGroup>
        <Input placeholder="Email..." />
        <Button>Ir</Button>
      </InputGroup>
    </YStack>
  ),
}

export const ComErro: Story = {
  name: 'Estado: Com Erro',
  render: () => (
    <YStack width={300} gap="$4">
      <InputGroup>
        <Input state="error" placeholder="Email inválido..." defaultValue="abc" />
        <Button>Enviar</Button>
      </InputGroup>
      <Text fontSize="$2" color="$destructive">
        O e-mail inserido não é válido.
      </Text>
    </YStack>
  ),
}