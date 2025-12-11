import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Toaster, toast } from './Sonner';
import { Button } from '../../atoms/Button';
import { H4 } from '../../atoms/Typography';
import { VStack } from '../../atoms/Stack';
import { TamaguiProvider } from 'tamagui';
import tamaguiConfig from '../../tamagui.config';

const meta: Meta<typeof Toaster> = {
  title: 'Molecules/Sonner',
  component: Toaster,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <TamaguiProvider config={tamaguiConfig}>
        <Story />
      </TamaguiProvider>
    ),
  ],
  parameters: {
    docs: {
      description: {
        component: 'Um componente de toast baseado no Sonner que fornece notificações não intrusivas.',
      },
    },
  },
  argTypes: {
    position: {
      control: 'select',
      options: ['top-left', 'top-center', 'top-right', 'bottom-left', 'bottom-center', 'bottom-right'],
      description: 'A posição das notificações de toast na tela.',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Toaster>;

export const Playground: Story = {
  render: (args) => (
    <VStack gap="$2">
      <Toaster {...args} />
      <H4>Clique nos botões para ver os diferentes tipos de toast</H4>
      <Button onPress={() => toast('Um toast de notificação padrão.')}>Padrão</Button>
      <Button onPress={() => toast.success('Sucesso!', { description: 'A operação foi bem-sucedida.' })}>
        Sucesso
      </Button>
      <Button onPress={() => toast.error('Erro!', { description: 'Algo deu errado.' })}>
        Erro
      </Button>
      <Button onPress={() => toast.warning('Aviso!', { description: 'Por favor, seja cauteloso.' })}>
        Aviso
      </Button>
      <Button onPress={() => toast.info('Informação', { description: 'Aqui estão algumas informações.' })}>
        Informação
      </Button>
      <Button
        onPress={() =>
          toast('O evento foi criado', {
            action: {
              label: 'Desfazer',
              onClick: () => console.log('Desfazer'),
            },
          })
        }
      >
        Com Ação
      </Button>
    </VStack>
  ),
  args: {
    position: 'bottom-right',
  },
};

export const StressTestTruncation: Story = {
  render: (args) => (
    <VStack gap="$2">
      <Toaster {...args} />
      <H4>Toast com texto longo</H4>
      <Button
        onPress={() =>
          toast.info('Título da Notificação', {
            description:
              'Esta é uma descrição muito longa que deve ser truncada para evitar que o componente de toast se torne muito grande e ilegível na tela.',
          })
        }
      >
        Mostrar Toast com Texto Longo
      </Button>
    </VStack>
  ),
  args: {
    position: 'bottom-right',
  },
};

export const StressTestPartialData: Story = {
  render: (args) => (
    <VStack gap="$2">
      <Toaster {...args} />
      <H4>Toast com dados parciais</H4>
      <Button onPress={() => toast.success('Apenas um título')}>
        Mostrar Toast Apenas com Título
      </Button>
    </VStack>
  ),
  args: {
    position: 'bottom-right',
  },
};

export const StressTestLoading: Story = {
  render: (args) => (
    <VStack gap="$2">
      <Toaster {...args} />
      <H4>Toast com estado de carregamento</H4>
      <Button
        onPress={() => {
          const toastId = toast.loading('Carregando...', { description: 'Por favor, aguarde.' });
          setTimeout(() => {
            toast.success('Sucesso!', { description: 'Os dados foram carregados.', id: toastId });
          }, 2000);
        }}
      >
        Mostrar Toast de Carregamento
      </Button>
    </VStack>
  ),
  args: {
    position: 'bottom-right',
  },
};
