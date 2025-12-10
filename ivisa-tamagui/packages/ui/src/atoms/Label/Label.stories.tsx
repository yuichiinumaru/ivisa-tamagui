import type { Meta, StoryObj } from '@storybook/react'
import { YStack } from 'tamagui'
import { Input } from '../Input'
import { Label } from './Label'

const meta: Meta<typeof Label> = {
  title: 'Atoms/Label',
  component: Label,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Um rótulo acessível para controles de formulário, estilizado para consistência visual.',
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
  },
  render: (args) => (
    <YStack gap="$2" width={300}>
      <Label htmlFor={args.htmlFor}>{args.children}</Label>
      <Input id={args.htmlFor} placeholder="seunome@email.com" />
    </YStack>
  ),
}

export const TextoLong: Story = {
  name: 'Texto Longo',
  args: {
    ...Padrao.args,
    children:
      'Este é um rótulo de exemplo com texto excessivamente longo para demonstrar como o componente lida com o encapsulamento e o estouro de texto.',
    htmlFor: 'email-longo',
  },
  render: (args) => (
    <YStack gap="$2" width={300}>
      <Label htmlFor={args.htmlFor}>{args.children}</Label>
      <Input id={args.htmlFor} />
    </YStack>
  ),
}

export const LarguraRestrita: Story = {
  name: 'Largura Restrita',
  args: {
    ...Padrao.args,
    children: 'Rótulo em Contêiner Pequeno',
    htmlFor: 'email-restrito',
  },
  render: (args) => (
    <YStack gap="$2" width={150} padding="$2" backgroundColor="$backgroundFocus">
      <Label htmlFor={args.htmlFor}>{args.children}</Label>
      <Input id={args.htmlFor} />
    </YStack>
  ),
}
