import type { Meta, StoryObj } from '@storybook/react'
import { SearchBar, SearchBarProps } from './SearchBar'
import { YStack } from 'tamagui'

const meta: Meta<SearchBarProps> = {
  title: 'Moléculas/SearchBar',
  component: SearchBar,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
    placeholder: { control: 'text' },
    shortcut: { control: 'text' },
    error: { control: 'text' },
  },
}

export default meta
type Story = StoryObj<SearchBarProps>

export const Padrao: Story = {
  name: 'Padrão',
  args: {
    placeholder: 'Buscar no sistema...',
    shortcut: 'Buscar',
    size: 'md',
  },
  render: (args) => (
    <YStack width={400}>
      <SearchBar {...args} />
    </YStack>
  ),
}

export const ComErro: Story = {
  name: 'Com Erro',
  args: {
    placeholder: 'Buscar...',
    error: 'Termo de busca muito curto',
  },
  render: (args) => (
    <YStack width={400}>
      <SearchBar {...args} />
    </YStack>
  ),
}

export const Pequeno: Story = {
  name: 'Pequeno',
  args: {
    placeholder: 'Buscar...',
    size: 'sm',
    shortcut: 'Buscar',
  },
  render: (args) => (
    <YStack width={300}>
      <SearchBar {...args} />
    </YStack>
  ),
}

export const Grande: Story = {
  name: 'Grande',
  args: {
    placeholder: 'Buscar em toda a aplicação...',
    size: 'lg',
    shortcut: 'Buscar',
  },
  render: (args) => (
    <YStack width={500}>
      <SearchBar {...args} />
    </YStack>
  ),
}

export const SemShortcut: Story = {
  name: 'Sem Atalho',
  args: {
    placeholder: 'Buscar produtos...',
    size: 'md',
  },
  render: (args) => (
    <YStack width={400}>
      <SearchBar {...args} />
    </YStack>
  ),
}
