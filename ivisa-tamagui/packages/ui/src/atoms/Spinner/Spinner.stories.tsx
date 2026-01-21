
import type React from 'react';
import { expect } from '@storybook/test';
import type { Meta, StoryObj } from '@storybook/react';

import { within } from '@testing-library/react';
import { Spinner } from './Spinner';

const meta: Meta<React.ComponentProps<typeof Spinner>> = {
  title: 'Átomos/Spinner',
  component: Spinner,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Um componente para exibir um indicador de carregamento animado.',
      },
    },
  },
  argTypes: {
    size: {
      control: 'radio',
      options: ['small', 'large'],
      description: 'Define o tamanho do spinner.',
    },
    color: {
      control: 'color',
      description: 'Define a cor do spinner. Aceita tokens de cor do Tamagui.',
    },
    'aria-label': {
      control: 'text',
      description: 'Rótulo de acessibilidade para o spinner.',
    },
  },
};

export default meta;

type Story = StoryObj<React.ComponentProps<typeof Spinner>>;

import { YStack } from 'tamagui';

export const Primario: Story = {
  name: 'Primário',
  args: {
    size: 'small',
    color: '$primary',
    'aria-label': 'Carregando...',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const spinner = canvas.getByLabelText('Carregando...');
    expect(spinner).toBeInTheDocument();
  },
};

export const DentroDeUmContainer: Story = {
  name: 'Dentro de um Contêiner',
  args: {
    ...Primario.args,
  },
  render: (args) => (
    <YStack width={24} height={24} alignItems="center" justifyContent="center" backgroundColor="$background">
      <Spinner {...args} />
    </YStack>
  ),
};

