
import type React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { Badge } from './Badge';
import { userEvent, within } from '@storybook/test';
import { expect } from '@storybook/test';
import { AlarmClock, Rocket } from '@tamagui/lucide-icons';
import { View } from 'tamagui';

const meta: Meta<React.ComponentProps<typeof Badge>> = {
  title: 'Átomos/Badge',
  component: Badge,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['default', 'secondary', 'destructive', 'outline'],
      description: 'O estilo visual do badge.',
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
      description: 'O tamanho do badge.',
    },
    children: {
      control: 'text',
      description: 'O conteúdo de texto a ser exibido dentro do badge.',
    },
    leftIcon: {
      control: false, // Ícones não são controláveis diretamente no Storybook UI
      description: 'Ícone a ser exibido à esquerda do texto.',
    },
    rightIcon: {
      control: false,
      description: 'Ícone a ser exibido à direita do texto.',
    },
    asChild: {
      control: false,
      description: 'Renderiza o componente como um filho do elemento anterior.',
    },
  },
  parameters: {
    docs: {
      description: {
        component:
          'Um componente de Badge que exibe um status ou rótulo de forma destacada. Suporta diferentes variantes visuais, ícones e polimorfismo através da propriedade `asChild`.',
      },
    },
  },
  args: {
    children: 'Badge',
    variant: 'default',
  },
};

export default meta;

type Story = StoryObj<React.ComponentProps<typeof Badge>>;

export const Padrao: Story = {
  name: 'Padrão',
  args: {
    children: 'Padrão',
  },
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement);
    const badge = canvas.getByText(args.children as string);
    await userEvent.click(badge);
    await expect(badge).toBeInTheDocument();
  },
};

export const Secundario: Story = {
  name: 'Secundário',
  args: {
    children: 'Secundário',
    variant: 'secondary',
  },
};

export const Destrutivo: Story = {
  name: 'Destrutivo',
  args: {
    children: 'Destrutivo',
    variant: 'destructive',
  },
};

export const Contorno: Story = {
  name: 'Contorno',
  args: {
    children: 'Contorno',
    variant: 'outline',
  },
};

export const ComIcones: Story = {
  name: 'Com Ícones',
  args: {
    children: 'Disponível',
    leftIcon: <AlarmClock />,
    rightIcon: <Rocket />,
  },
  render: (args) => <Badge {...args} />,
};

export const TextoLongo: Story = {
  name: 'Texto Longo',
  args: {
    children:
      'Este é um texto muito longo para um badge, para verificar como o componente se comporta com quebra de linha ou truncamento.',
  },
  render: (args) => (
    <View style={{ width: 200 }}>
      <Badge {...args} />
    </View>
  ),
};

export const TamanhoPequeno: Story = {
    name: 'Tamanho Pequeno',
    args: {
        children: 'Pequeno',
        size: 'sm',
    },
};

export const TamanhoMedio: Story = {
    name: 'Tamanho Médio',
    args: {
        children: 'Médio',
        size: 'md',
    },
};

export const TamanhoGrande: Story = {
    name: 'Tamanho Grande',
    args: {
        children: 'Grande',
        size: 'lg',
    },
};

export const ComoLinkComIcones: Story = {
    name: 'Como Link com Ícones',
    args: {
        asChild: true,
        children: <a href="https://tamagui.dev">Link</a>,
        leftIcon: <Rocket />,
        variant: 'secondary',
    },
    render: (args) => <Badge {...args} />,
};

export const LarguraRestrita: Story = {
  name: 'Largura Restrita',
  args: {
    children: 'Badge Restrito',
  },
  render: (args) => (
    <View style={{ maxWidth: 100 }}>
      <Badge {...args} />
    </View>
  ),
};
