import type { Meta, StoryObj } from '@storybook/react'
import { YStack } from 'tamagui'
import { Input } from '../Input'
import { Label } from './Label'

const meta: Meta<typeof Label> = {
  title: 'Átomos/Label',
  component: Label,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Um rótulo acessível para controles de formulário, com variantes para diferentes estados.',
      },
    },
  },
  argTypes: {
    children: {
      control: 'text',
      description: 'O conteúdo de texto do rótulo.',
    },
    htmlFor: {
      control: 'text',
      description: 'O ID do elemento de formulário ao qual o rótulo está associado.',
    },
    state: {
      control: { type: 'radio' },
      options: ['error'],
      description: 'A variante visual do rótulo para indicar estados como erro.',
    },
    disabled: {
      control: 'boolean',
      description: 'Se verdadeiro, o rótulo será estilizado como desabilitado.',
    },
    required: {
      control: 'boolean',
      description: 'Se verdadeiro, um asterisco será exibido ao lado do texto.',
    },
    asChild: {
      table: {
        disable: true,
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof Label>

export const Padrao: Story = {
  name: 'Padrão',
  args: {
    children: 'Endereço de E-mail',
    htmlFor: 'email-padrao',
    disabled: false,
    required: false,
  },
  render: (args) => (
    <YStack gap="$2" width={300}>
      <Label {...args}>{args.children}</Label>
      <Input id={args.htmlFor} placeholder="seunome@email.com" disabled={args.disabled} />
    </YStack>
  ),
}

export const ComErro: Story = {
  name: 'Com Erro',
  args: {
    ...Padrao.args,
    children: 'Senha',
    htmlFor: 'senha-erro',
    state: 'error',
  },
  render: (args) => (
    <YStack gap="$2" width={300}>
      <Label {...args}>{args.children}</Label>
      <Input id={args.htmlFor} defaultValue="123" />
    </YStack>
  ),
}

export const Desabilitado: Story = {
  name: 'Desabilitado',
  args: {
    ...Padrao.args,
    children: 'Campo Desabilitado',
    htmlFor: 'campo-desabilitado',
    disabled: true,
  },
  render: (args) => (
    <YStack gap="$2" width={300}>
      <Label {...args}>{args.children}</Label>
      <Input id={args.htmlFor} disabled />
    </YStack>
  ),
}

export const Obrigatorio: Story = {
  name: 'Obrigatório',
  args: {
    ...Padrao.args,
    children: 'Nome Completo',
    htmlFor: 'nome-completo',
    required: true,
  },
  render: (args) => (
    <YStack gap="$2" width={300}>
      <Label {...args}>{args.children}</Label>
      <Input id={args.htmlFor} />
    </YStack>
  ),
}

