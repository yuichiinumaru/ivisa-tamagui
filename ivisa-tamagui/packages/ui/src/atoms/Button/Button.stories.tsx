import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import { Button, ButtonProps } from './Button'
import { Text } from 'tamagui'

const meta: Meta<ButtonProps> = {
  title: 'Átomos/Button',
  component: Button,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
### Uso
Botões são usados para disparar ações ou navegação. Eles devem ser usados para ações primárias (Salvar, Enviar) e ações secundárias (Cancelar, Voltar).
`,
      },
    },
  },
  argTypes: {    
    variant: {
      control: { type: 'select' },
      options: ['default', 'secondary', 'destructive', 'outline', 'ghost'],
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'default', 'lg'],
    },
    loading: { control: 'boolean' },
    disabled: { control: 'boolean' },
    onPress: { action: 'pressed' },
  },
}

export default meta

type Story = StoryObj<ButtonProps>

export const Primario: Story = {
  args: {
    children: 'Enviar',
    variant: 'default',
    size: 'default',
    loading: false,
    disabled: false,
  },
}

export const Secundario: Story = {
  args: {
    ...Primario.args,
    children: 'Cancelar',
    variant: 'secondary',
  },
}

export const Destrutivo: Story = {
  args: {
    ...Primario.args,
    children: 'Excluir',
    variant: 'destructive',
  },
}

export const ComIcone: Story = {
  args: {
    ...Primario.args,
    children: 'Salvar',
  },
  render: (args) => (
    <Button {...args} leftIcon={<Text style={{ color: 'white' }}>✅</Text>} />
  ),
}

export const Carregando: Story = {
  args: {
    ...Primario.args,
    loading: true,
  },
}