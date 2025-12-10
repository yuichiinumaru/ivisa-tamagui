import type { Meta, StoryObj } from '@storybook/react';
import { userEvent, within } from '@storybook/testing-library';
import { Label, Stack, Text } from 'tamagui';

import { Switch } from './Switch';

// # 1. Meta Configuration
const meta: Meta<typeof Switch> = {
  title: 'Átomos/Switch',
  component: Switch,
  tags: ['autodocs'],
  argTypes: {
    checked: {
      control: 'boolean',
      description: 'Define o estado de ligado/desligado do componente.',
    },
    disabled: {
      control: 'boolean',
      description: 'Desabilita o componente, impedindo interações.',
    },
    size: {
      options: ['small', 'medium', 'large'],
      control: { type: 'radio' },
      description: 'Define o tamanho do componente.',
    },
    loading: {
      control: 'boolean',
      description: 'Mostra um spinner e desabilita o componente.',
    },
    id: {
      control: 'text',
      description: 'ID único para associar com um rótulo.',
    },
  },
  args: {
    checked: false,
    disabled: false,
    loading: false,
    size: 'medium',
    id: 'switch-default',
  },
  render: (args) => <Switch {...args} />,
};

export default meta;

type Story = StoryObj<typeof Switch>;

// # 2. Stories
export const Padrao: Story = {
  name: 'Padrão',
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const switchComponent = canvas.getByRole('switch');
    await userEvent.click(switchComponent);
  },
};

export const ComRotulo: Story = {
  name: 'Com Rótulo',
  render: (args) => (
    <Stack flexDirection="row" alignItems="center" space="$2">
      <Label htmlFor={args.id}>
        <Text>Aceitar termos e condições</Text>
      </Label>
      <Switch {...args} />
    </Stack>
  ),
  args: {
    id: 'switch-com-rotulo',
  },
};

export const Carregando: Story = {
  name: 'Carregando',
  args: {
    loading: true,
    checked: true,
  },
};

export const Desabilitado: Story = {
  name: 'Desabilitado',
  args: {
    disabled: true,
  },
};

// # 3. Stress Tests
export const TextoLong_StressTest: Story = {
  name: 'Estresse: Texto Muito Longo',
  render: (args) => (
    <Stack flexDirection="row" alignItems="center" space="$2" maxWidth={300}>
      <Label htmlFor={args.id}>
        <Text>
          Este é um rótulo excessivamente longo para testar o comportamento de
          quebra de linha e alinhamento do componente Switch.
        </Text>
      </Label>
      <Switch {...args} />
    </Stack>
  ),
  args: {
    id: 'switch-texto-longo',
  },
};

export const Contido_StressTest: Story = {
  name: 'Estresse: Contido em Espaço Pequeno',
  render: (args) => (
    <Stack
      width={100}
      padding="$2"
      backgroundColor="$red5"
      alignItems="center"
    >
      <Text color="white" fontSize={12} marginBottom="$2">
        Container de 100px
      </Text>
      <Switch {...args} />
    </Stack>
  ),
};
