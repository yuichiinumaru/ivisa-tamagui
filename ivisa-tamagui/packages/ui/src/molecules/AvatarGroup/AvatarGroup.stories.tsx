import type { Meta, StoryObj } from '@storybook/react'
import { AvatarGroup, AvatarGroupProps } from './AvatarGroup'

const meta: Meta<typeof AvatarGroup> = {
  title: 'Moléculas/AvatarGroup',
  component: AvatarGroup,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['$4', '$6', '$8', '$10', '$12'],
      description: 'Tamanho dos avatares no grupo.',
    },
    limit: {
      control: { type: 'number' },
      description: 'Número máximo de avatares para exibir antes de agrupar.',
    },
    isLoading: {
      control: 'boolean',
      description: 'Mostra o estado de carregamento com esqueletos.',
    },
    hasError: {
      control: 'boolean',
      description: 'Mostra o estado de erro com uma borda vermelha.',
    },
  },
  args: {
    size: '$10',
    limit: 3,
    isLoading: false,
    hasError: false,
    items: [
      {
        src: 'https://github.com/ivisa-co.png',
        fallback: 'IV',
        alt: 'Avatar da Ivisa',
      },
      {
        src: 'https://github.com/tamagui.png',
        fallback: 'TM',
        alt: 'Avatar do Tamagui',
      },
      {
        src: 'https://github.com/shadcn.png',
        fallback: 'CN',
        alt: 'Avatar do Shadcn',
      },
      {
        fallback: 'ML',
        alt: 'Avatar de ML',
      },
      {
        fallback: 'GG',
        alt: 'Avatar de GG',
      },
    ],
  },
  render: (args: AvatarGroupProps) => (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '2rem',
      }}
    >
      <AvatarGroup {...args} />
    </div>
  ),
}

export default meta

type Story = StoryObj<typeof meta>

export const Padrao: Story = {
  name: 'Padrão',
  args: {},
}

export const Carregando: Story = {
  name: 'Carregando',
  args: {
    isLoading: true,
  },
}

export const ComLimite: Story = {
  name: 'Com Limite',
  args: {
    limit: 2,
  },
}

export const EstadoDeErro: Story = {
  name: 'Estado de Erro',
  args: {
    hasError: true,
  },
}

export const Vazio: Story = {
  name: 'Vazio',
  args: {
    items: [],
  },
}

export const DadosParciais: Story = {
  name: 'Dados Parciais',
  args: {
    items: [
      {
        src: 'https://github.com/ivisa-co.png',
        fallback: 'IV',
        alt: 'Avatar da Ivisa',
      },
      {
        fallback: 'TM',
        alt: 'Avatar do Tamagui',
      },
      {
        fallback: 'CN',
        alt: 'Avatar do Shadcn',
      },
    ],
  },
}
