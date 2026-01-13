// @ts-nocheck

// import type React from 'react';
import type { Meta, StoryObj } from '@storybook/react'
import { SchemaForm } from './SchemaForm'
import { FieldSchema } from './types'


const meta: Meta<React.ComponentProps<typeof SchemaForm>> = {
  title: 'Organismos/SchemaForm',
  component: SchemaForm,
  tags: ['autodocs'],
  argTypes: {
    onSubmit: { action: 'onSubmit' },
  },
}

export default meta
type Story = StoryObj<React.ComponentProps<typeof SchemaForm>>

const schema: FieldSchema<any>[] = [
  {
    name: 'name',
    type: 'text',
    label: 'Nome Completo',
    placeholder: 'Digite seu nome',
    required: true,
  },
  {
    name: 'email',
    type: 'email',
    label: 'Email',
    placeholder: 'nome@exemplo.com',
    required: true,
  },
  {
    name: 'country',
    type: 'select',
    label: 'País de Destino',
    placeholder: 'Selecione um país',
    options: [
      { label: 'Brasil', value: 'br' },
      { label: 'Estados Unidos', value: 'us' },
      { label: 'Canadá', value: 'ca' },
    ],
  },
  {
    name: 'travelDate',
    type: 'date',
    label: 'Data da Viagem',
  },
  {
    name: 'notifications',
    type: 'switch',
    label: 'Receber notificações',
  },
  {
    name: 'bio',
    type: 'textarea',
    label: 'Observações',
    placeholder: 'Informações adicionais...',
  },
  {
    name: 'terms',
    type: 'checkbox',
    label: 'Aceito os termos e condições',
    required: true,
  },
]

export const Padrao: Story = {
  name: 'Padrão',
  args: {
    schema,
    submitText: 'Solicitar Visto',
  },
}

export const ComValidacao: Story = {
  name: 'Com Validação',
  args: {
    schema,
    defaultValues: {
      name: '',
      email: '',
    },
  },
}
