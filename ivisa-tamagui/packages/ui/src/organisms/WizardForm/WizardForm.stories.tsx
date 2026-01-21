// @ts-nocheck
import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { WizardForm } from './WizardForm'
import { z } from 'zod'

const meta: Meta<React.ComponentProps<typeof WizardForm>> = {
  title: 'Organismos/WizardForm',
  component: WizardForm,
  parameters: {
    layout: 'centered',
  },
}

export default meta
type Story = StoryObj<React.ComponentProps<typeof WizardForm>>

const schemaStep1 = z.object({
  firstName: z.string().min(1, 'Primeiro nome é obrigatório'),
  lastName: z.string().min(1, 'Sobrenome é obrigatório'),
})

const schemaStep2 = z.object({
  email: z.string().email('Email inválido'),
  phone: z.string().min(10, 'Telefone inválido'),
})

const schemaStep3 = z.object({
  address: z.string().min(5, 'Endereço muito curto'),
  city: z.string().min(2, 'Cidade inválida'),
})

const steps = [
  {
    title: 'Informações Pessoais',
    schema: schemaStep1,
    fields: [
      { name: 'firstName', label: 'Primeiro Nome', type: 'text' as const, placeholder: 'Digite seu nome' },
      { name: 'lastName', label: 'Sobrenome', type: 'text' as const, placeholder: 'Digite seu sobrenome' },
    ],
  },
  {
    title: 'Contato',
    schema: schemaStep2,
    fields: [
      { name: 'email', label: 'Email', type: 'email' as const, placeholder: 'exemplo@email.com' },
      { name: 'phone', label: 'Telefone', type: 'text' as const, placeholder: '(00) 00000-0000' },
    ],
  },
  {
    title: 'Endereço',
    schema: schemaStep3,
    fields: [
      { name: 'address', label: 'Endereço', type: 'text' as const, placeholder: 'Rua, Número, Bairro' },
      { name: 'city', label: 'Cidade', type: 'text' as const, placeholder: 'Cidade' },
    ],
  },
]

export const Padrao: Story = {
  args: {
    steps: steps,
    onSubmit: (data) => console.log('Form Submitted:', data),
  },
}

export const WithLoading: Story = {
  args: {
    steps: steps,
    onSubmit: (data) => console.log('Form Submitted:', data),
    isLoading: true,
  },
}

