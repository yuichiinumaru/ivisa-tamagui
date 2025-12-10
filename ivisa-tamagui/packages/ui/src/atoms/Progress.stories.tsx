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
    size: {
      control: { type: 'radio' },
      options: ['sm', 'md', 'lg'],
      description: 'O tamanho da barra de progresso.',
    },
    status: {
      control: { type: 'radio' },
      options: ['info', 'success', 'warning', 'danger'],
      description: 'O status da barra de progresso, que determina sua cor.',
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
    size: 'md',
    status: 'info',
  },
  name: 'Padrão',
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const progress = await canvas.findByRole('progressbar');
    await userEvent.tab();
    await expect(progress).toHaveFocus();
  },
};

export const Sucesso: Story = {
    args: {
        ...Padrao.args,
        status: 'success',
        label: 'Sucesso'
    },
    name: 'Status: Sucesso'
}

export const Aviso: Story = {
    args: {
        ...Padrao.args,
        status: 'warning',
        label: 'Aviso'
    },
    name: 'Status: Aviso'
}

export const Perigo: Story = {
    args: {
        ...Padrao.args,
        status: 'danger',
        label: 'Perigo'
    },
    name: 'Status: Perigo'
}

export const TamanhoPequeno: Story = {
    args: {
        ...Padrao.args,
        size: 'sm',
        label: 'Tamanho Pequeno'
    },
    name: 'Tamanho: Pequeno'
}

export const TamanhoGrande: Story = {
    args: {
        ...Padrao.args,
        size: 'lg',
        label: 'Tamanho Grande'
    },
    name: 'Tamanho: Grande'
}
