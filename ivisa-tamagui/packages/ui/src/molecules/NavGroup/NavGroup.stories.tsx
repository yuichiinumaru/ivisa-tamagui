// @ts-nocheck

// import type React from 'react';
import { Button } from '../../atoms/Button/Button';
import { NavGroup } from './NavGroup';
import { Settings } from '@tamagui/lucide-icons';
import type { Meta, StoryObj } from '@storybook/react';


const meta: Meta<React.ComponentProps<typeof NavGroup>> = {
  title: 'Moléculas/NavGroup',
  component: NavGroup,
  tags: ['autodocs'],
  argTypes: {
    title: {
      control: 'text',
      description: 'Título do grupo de navegação.',
    },
    isLoading: {
      control: 'boolean',
      description: 'Mostra o estado de carregamento com esqueletos.',
    },
    hasError: {
      control: 'boolean',
      description: 'Mostra o estado de erro.',
    },
    isDisabled: {
      control: 'boolean',
      description: 'Desabilita o grupo de navegação.',
    },
    rightSlot: {
      control: 'object',
      description: 'Permite adicionar conteúdo à direita do título.',
    },
  },
};

export default meta;

type Story = StoryObj<React.ComponentProps<typeof NavGroup>>;

const defaultItems = [
  { label: 'Painel', href: '#' },
  { label: 'Configurações', href: '#' },
  { label: 'Perfil', href: '#' },
  { label: 'Sair', href: '#' },
];

export const Padrao: Story = {
  name: 'Padrão',
  args: {
    items: defaultItems,
    title: 'Navegação',
  },
};

export const Carregando: Story = {
  name: 'Carregando',
  args: {
    items: [],
    title: 'Navegação',
    isLoading: true,
  },
};

export const ComErro: Story = {
  name: 'Com Erro',
  args: {
    items: [],
    title: 'Navegação',
    hasError: true,
  },
};

export const Desabilitado: Story = {
  name: 'Desabilitado',
  args: {
    items: defaultItems,
    title: 'Navegação',
    isDisabled: true,
  },
};

export const ComAcoes: Story = {
  name: 'Com Ações',
  args: {
    items: defaultItems,
    title: 'Navegação',
    rightSlot: (
      <Button variant="icon" icon={<Settings size="$1" />} />
    ),
  },
};

export const EmContainer: Story = {
  name: 'Em Container',
  args: {
    items: defaultItems,
    title: 'Navegação em um contêiner muito, muito, muito comprido',
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: '320px', border: '1px solid #ccc', padding: '1rem', borderRadius: '8px' }}>
        <Story />
      </div>
    ),
  ],
};
