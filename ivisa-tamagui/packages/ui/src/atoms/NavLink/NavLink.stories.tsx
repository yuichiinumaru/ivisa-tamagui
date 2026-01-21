// @ts-nocheck
import type { Meta, StoryObj } from '@storybook/react'
import { NavLink } from './NavLink'
import { Home, ChevronRight } from '@tamagui/lucide-icons'
import { fn, userEvent, within } from '@storybook/test'
import { expect } from '@storybook/test'

const meta: Meta<typeof NavLink> = {
  title: 'Átomos/NavLink',
  component: NavLink,
  tags: ['autodocs'],
  args: {
    children: 'Link de Navegação',
    href: '#',
    target: '_blank',
    onClick: fn(),
  },
  argTypes: {
    children: {
      control: { type: 'text' },
      description: 'O conteúdo de texto principal a ser exibido.',
    },
    leftIcon: {
      control: { type: 'none' },
      description: 'Um ícone a ser exibido à esquerda do texto.',
    },
    rightIcon: {
      control: { type: 'none' },
      description: 'Um ícone a ser exibido à direita do texto.',
    },
    href: {
      control: { type: 'text' },
      description: 'O URL para o qual o link aponta.',
    },
  },
  render: (args) => <NavLink {...args} />,
}

export default meta
type Story = StoryObj<typeof NavLink>

export const Padrao: Story = {
  name: 'Padrão',
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement)
    const link = canvas.getByRole('link')
    await userEvent.click(link)
    if (args.onClick && typeof args.onClick.mock !== 'undefined') {
        expect(args.onClick).toHaveBeenCalled()
    }
  },
}

export const WithLeftIcon: Story = {
  name: 'Com Ícone à Esquerda',
  args: {
    children: 'Início',
    leftIcon: <Home />,
  },
}

export const WithRightIcon: Story = {
  name: 'Com Ícone à Direita',
  args: {
    children: 'Ver Mais',
    rightIcon: <ChevronRight />,
  },
}

export const WithBothIcons: Story = {
  name: 'Com Ambos os Ícones',
  args: {
    children: 'Configurações',
    leftIcon: <Home />,
    rightIcon: <ChevronRight />,
  },
}

export const TextoLongo: Story = {
  name: 'Texto Longo',
  args: {
    children:
      'Este é um link de navegação com um texto muito longo para verificar o comportamento de quebra de linha ou truncamento.',
  },
}

export const RestritoWidth: Story = {
  name: 'Largura Restrita',
  args: {
    children: 'Link Restrito',
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: '150px', border: '1px solid red' }}>
        <Story />
      </div>
    ),
  ],
}

