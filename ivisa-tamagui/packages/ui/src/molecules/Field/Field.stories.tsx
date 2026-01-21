
import type React from 'react';
import { Pencil } from '@tamagui/lucide-icons'
import type { Meta, StoryObj } from '@storybook/react'

import { Button } from '../../atoms/Button'
import { Input } from '../../atoms/Input'
import { Field } from './Field'


const meta: Meta<React.ComponentProps<typeof Field>> = {
  title: 'Moléculas/Field',
  component: Field,
  tags: ['autodocs'],
  argTypes: {
    // Disabling controls for props that are managed by the story's render function
    children: { control: { disable: true } },
    rightSlot: { control: { disable: true } },
  },
  parameters: {
    docs: {
      description: {
        component:
          'O componente Field orquestra um rótulo (Label), um controle de entrada (Control), e uma mensagem de erro (Error), gerenciando estados como `isLoading`, `hasError`, e `isDisabled` de forma centralizada.',
      },
    },
  },
}

export default meta
type Story = StoryObj<React.ComponentProps<typeof Field>>

const renderDefaultField = (args) => (
  <Field {...args} width={300}>
    <Field.Label htmlFor="email">Seu melhor e-mail</Field.Label>
    <Field.Control>
      <Input id="email" placeholder="nome@empresa.com" />
    </Field.Control>
    {args.hasError && <Field.Error>Por favor, insira um e-mail válido.</Field.Error>}
  </Field>
)

export const Padrao: Story = {
  name: 'Padrão',
  args: {
    isLoading: false,
    hasError: false,
    isDisabled: false,
  },
  render: renderDefaultField,
}

export const ComErro: Story = {
  name: 'Com Erro',
  args: {
    ...Padrao.args,
    hasError: true,
  },
  render: renderDefaultField,
}

export const Disabled: Story = {
  name: 'Desabilitado',
  args: {
    ...Padrao.args,
    isDisabled: true,
  },
  render: renderDefaultField,
}

export const Carregando: Story = {
  name: 'Carregando (Skeleton)',
  args: {
    ...Padrao.args,
    isLoading: true,
  },
  render: renderDefaultField,
}

export const WithRightSlot: Story = {
  name: 'Com Ação à Direita',
  args: {
    ...Padrao.args,
    rightSlot: <Button icon={<Pencil size="$1" />} />,
  },
  render: (args) => (
    <Field {...args} width={350}>
      <Field.Label htmlFor="username">Nome de Usuário</Field.Label>
      <Field.Control>
        <Input id="username" placeholder="seu.usuario" defaultValue="johndoe" />
      </Field.Control>
    </Field>
  ),
}

export const RestritoWidth: Story = {
  name: 'Largura Restrita',
  parameters: {
    docs: {
      description: {
        story:
          'Este teste verifica como o componente se comporta em um contêiner estreito. O texto do rótulo e do erro deve ser truncado com reticências (`...`) se não couber.',
      },
    },
  },
  render: () => (
    <Field hasError width={200}>
      <Field.Label htmlFor="long-label" ellipsize>
        Rótulo com texto muito longo que deveria ser cortado
      </Field.Label>
      <Field.Control>
        <Input id="long-label" placeholder="Placeholder" />
      </Field.Control>
      <Field.Error ellipsize>
        Mensagem de erro com texto muito, muito, muito longo que também precisa ser cortado
      </Field.Error>
    </Field>
  ),
}

