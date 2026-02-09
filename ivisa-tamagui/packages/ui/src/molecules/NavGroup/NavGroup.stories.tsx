import React from 'react';
import { Button } from '../../atoms/Button/Button';
import { NavGroup } from './NavGroup';
import { Settings } from '@tamagui/lucide-icons';
import type { Meta, StoryObj } from '@storybook/react';
import { YStack } from 'tamagui';

const meta: Meta<typeof NavGroup> = {
  title: 'Moléculas/NavGroup',
  component: NavGroup,
  tags: ['autodocs'],
  argTypes: {
    title: { control: 'text' },
    isLoading: { control: 'boolean' },
    hasError: { control: 'boolean' },
    isDisabled: { control: 'boolean' },
  },
};

export default meta;

type Story = StoryObj<typeof NavGroup>;

const defaultItems = [
  { label: 'Painel', href: '#' },
  { label: 'Configurações', href: '#' },
  { label: 'Perfil', href: '#' },
  { label: 'Sair', href: '#' },
];

export const Padrao: Story = {
  args: {
    items: defaultItems,
    title: 'Navegação',
  },
};

export const ComAcoes: Story = {
  name: 'Com Ações',
  args: {
    items: defaultItems,
    title: 'Navegação',
    rightSlot: (      
      <Button backgroundColor="transparent" borderWidth={0} circular size="sm">
        <Settings size={16} />
      </Button>
    ),
  },
};

export const EmContainer: Story = {
  name: 'Em Container',
  args: {
    items: defaultItems,
    title: 'Navegação em um contêiner restrito',
  },
  render: (args) => (
    <YStack maxWidth={320} borderWidth={1} borderColor="$borderColor" padding="$4" borderRadius="$4">
      <NavGroup {...args} />
    </YStack>
  ),
};