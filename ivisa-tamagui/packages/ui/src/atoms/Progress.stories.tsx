import type { Meta, StoryObj } from '@storybook/react';
import { Progress } from './Progress';
import { YStack, Text } from 'tamagui';
import { userEvent, within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<typeof Progress.Root> = {
  title: 'atoms/Progresso',
  component: Progress.Root,
  tags: ['autodocs'],
  argTypes: {
    value: {
      control: { type: 'range', min: 0, max: 100, step: 1 },
      description: 'O valor atual da barra de progresso.',
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
    showValue: {
        control: 'boolean',
        description: 'Exibir o valor percentual.',
    },
    'aria-valuetext': {
        control: 'text',
        description: 'Texto para leitores de tela.',
    },
  },
};

export default meta;

type Story = StoryObj<typeof Progress.Root>;

export const Padrao: Story = {
  args: {
    value: 50,
    state: 'determinate',
    size: 'md',
    status: 'info',
    showValue: true,
  },
  name: 'Padrão',
  render: (args) => (
    <Progress.Root {...args}>
        <Progress.Label>Progresso</Progress.Label>
        <Progress.Indicator />
    </Progress.Root>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const progress = await canvas.findByRole('progressbar');
    await userEvent.tab();
    await expect(progress).toHaveFocus();
  },
};

export const LabelDentro: Story = {
    args: {
        ...Padrao.args,
        showValue: false,
    },
    name: "Composição: Rótulo Interno",
    render: (args) => (
        <Progress.Root {...args}>
             <YStack flex={1} justifyContent='center' alignItems='center'>
                <Progress.Label asChild>
                    <Text color="white" fontSize={12}>Carregando...</Text>
                </Progress.Label>
            </YStack>
            <Progress.Indicator />
        </Progress.Root>
    )
}
