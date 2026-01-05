import type { Meta, StoryObj } from '@storybook/react'

import { RadioGroup } from './RadioGroup'

const meta: Meta<typeof RadioGroup> = {
  title: 'Moléculas/RadioGroup',
  component: RadioGroup,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    orientation: {
      control: { type: 'radio' },
      options: ['vertical', 'horizontal'],
    },
    defaultValue: {
      control: { type: 'text' },
    },
    disabled: {
      control: { type: 'boolean' },
    },
    isLoading: {
      control: { type: 'boolean' },
    },
    hasError: {
      control: { type: 'boolean' },
    },
    errorMessage: {
      control: { type: 'text' },
    },
  },
}

export default meta

type Story = StoryObj<typeof meta>

const OPTIONS = [
  { value: 'default', label: 'Padrão' },
  { value: 'comfortable', label: 'Confortável' },
  { value: 'compact', label: 'Compacto' },
  { value: 'disabled-option', label: 'Desativado', disabled: true },
]

export const Padrao: Story = {
  args: {
    options: OPTIONS,
    defaultValue: 'comfortable',
    orientation: 'vertical',
  },
  render: (args) => <RadioGroup {...args} />,
}

export const Horizontal: Story = {
  args: {
    ...Padrao.args,
    orientation: 'horizontal',
  },
  render: (args) => <RadioGroup {...args} />,
}

export const Disabled: Story = {
  args: {
    ...Padrao.args,
    disabled: true,
  },
  render: (args) => <RadioGroup {...args} />,
}

export const Error: Story = {
  args: {
    ...Padrao.args,
    hasError: true,
  },
  render: (args) => <RadioGroup {...args} />,
}

export const ErrorWithMessage: Story = {
  args: {
    ...Padrao.args,
    hasError: true,
    errorMessage: 'Este campo é obrigatório.',
  },
  render: (args) => <RadioGroup {...args} />,
}

export const Carregando: Story = {
  args: {
    ...Padrao.args,
    isLoading: true,
  },
  render: (args) => <RadioGroup {...args} />,
}

export const NarrowContainer: Story = {
  parameters: {
    layout: 'padded',
  },
  args: {
    ...Padrao.args,
    options: [
      {
        value: 'long-1',
        label: 'Este é um texto muito longo que deve ser truncado.',
      },
      {
        value: 'long-2',
        label: 'Outro exemplo de texto longo para verificar o comportamento.',
      },
    ],
  },
  render: (args) => (
    <div style={{ width: 200, border: '1px solid #ccc', padding: '10px' }}>
      <RadioGroup {...args} />
    </div>
  ),
}
