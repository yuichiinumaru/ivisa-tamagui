import type { Meta, StoryObj } from '@storybook/react';
import { Progress } from './Progress';
import { YStack } from 'tamagui';
import { userEvent, within } from '@storybook/testing-library';

const meta: Meta<typeof Progress> = {
  title: 'atoms/Progresso',
  component: Progress,
  tags: ['autodocs'],
  argTypes: {
    value: {
      control: { type: 'range', min: 0, max: 100, step: 1 },
      description: 'O valor atual da barra de progresso.',
    },
    label: {
      control: 'text',
      description: 'O rótulo a ser exibido junto à barra de progresso.',
    },
    state: {
      control: { type: 'radio' },
      options: ['determinate', 'indeterminate'],
      description: 'O estado da barra de progresso.',
    },
  },
};

export default meta;

type Story = StoryObj<typeof Progress>;

export const Padrao: Story = {
  args: {
    value: 50,
    label: 'Progresso',
    state: 'determinate',
  },
  name: 'Padrão',
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const progress = await canvas.findByRole('progressbar');
    await userEvent.tab();
    await expect(progress).toHaveFocus();
  },
};

export const Vazio: Story = {
  args: {
    value: 0,
    label: 'Vazio',
    state: 'determinate',
  },
};

export const Cheio: Story = {
  args: {
    value: 100,
    label: 'Completo',
    state: 'determinate',
  },
};

export const Indeterminado: Story = {
    args: {
      value: 40,
      label: 'Carregando...',
      state: 'indeterminate',
    },
    name: 'Indeterminado (Carregando)',
};

export const TextoExtenso: Story = {
  args: {
    value: 75,
    label: 'Este é um texto muito longo para verificar como o componente se comporta com excesso de conteúdo no rótulo.',
    state: 'determinate',
  },
  name: 'Com Texto Longo',
};

export const ContainerPequeno: Story = {
  render: (args) => (
    <YStack style={{ maxWidth: 150, borderWidth: 1, borderColor: 'red', padding: 8 }}>
      <Progress {...args} />
    </YStack>
  ),
  args: {
    value: 60,
    label: 'Dentro de um contêiner pequeno',
    state: 'determinate',
  },
  name: 'Em Contêiner Pequeno',
};
