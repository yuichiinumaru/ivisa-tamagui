import type { Meta, StoryObj } from '@storybook/react';
import { userEvent, within } from '@storybook/test';
import { expect } from '@storybook/test';
import { YStack } from 'tamagui';

import { Avatar } from './Avatar';
import { Button } from './Button';

const meta: Meta<typeof Avatar> = {
  title: 'Atomics/Avatar',
  component: Avatar,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Um componente de imagem que exibe as iniciais do usuário ou uma imagem de perfil.',
      },
      source: {
        code: `
<Avatar size="$10">
  <Avatar.Image src="https://github.com/tamagui.png" />
  <Avatar.Fallback>AV</Avatar.Fallback>
</Avatar>
        `,
        language: 'tsx',
      },
    },
  },
  argTypes: {
    size: {
      name: 'Tamanho',
      control: { type: 'select' },
      options: ['$8', '$10', '$12', '$14', '$16'],
      description: 'Define o tamanho do avatar.',
    },
    imageUrl: {
      name: 'URL da Imagem',
      control: { type: 'text' },
      description: 'URL para a imagem do avatar. Se for inválida ou vazia, o fallback será exibido.',
    },
    fallbackText: {
      name: 'Texto de Fallback',
      control: { type: 'text' },
      description: 'Texto a ser exibido no fallback se a imagem falhar em carregar.',
    },
    accessibilityLabel: {
      name: 'Label de Acessibilidade',
      control: { type: 'text' },
      description: 'Texto descritivo para leitores de tela.',
    },
  },
  render: ({ imageUrl, fallbackText, accessibilityLabel, ...args }) => (
    <Avatar {...args} accessibilityLabel={accessibilityLabel}>
      <Avatar.Image src={imageUrl} alt={accessibilityLabel} />
      <Avatar.Fallback>{fallbackText}</Avatar.Fallback>
    </Avatar>
  ),
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Padrao: Story = {
  name: 'Padrão',
  args: {
    size: '$10',
    imageUrl: 'https://github.com/ivisa.png',
    fallbackText: 'AV',
    accessibilityLabel: 'Avatar de Usuário',
  },
   play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement);
    await step('Verificar a renderização do avatar pela label de acessibilidade', async () => {
        const avatar = canvas.getByLabelText('Avatar de Usuário');
        expect(avatar).toBeInTheDocument();
    });
    await step('Verificar se a imagem do avatar é carregada', async () => {
        const image = canvas.getByAltText('Avatar de Usuário');
        expect(image).toBeInTheDocument();
    });
  },
};

export const ComFallback: Story = {
  name: 'Com Fallback',
  args: {
    ...Padrao.args,
    imageUrl: 'https://url-invalida.png',
    fallbackText: 'AV',
    accessibilityLabel: 'Avatar de Usuário com fallback',
  },
};

export const Pequeno: Story = {
  name: 'Pequeno',
  args: {
    ...Padrao.args,
    size: '$8',
  },
};

export const Grande: Story = {
  name: 'Grande',
  args: {
    ...Padrao.args,
    size: '$12',
  },
};

export const ComTextoDeFallbackLongo: Story = {
  name: 'Com Texto de Fallback Longo',
  args: {
    ...ComFallback.args,
    fallbackText: 'Texto Muito Longo Que Nao Cabe',
  },
  parameters: {
    docs: {
      description: {
        story: 'Testa como o componente lida com texto de fallback que excede o espaço disponível. O texto deve ser cortado ou ajustado.',
      },
    },
  },
};

export const EmContainerPequeno: Story = {
  name: 'Em Contêiner Pequeno',
  args: {
    ...Padrao.args,
    size: '$16',
  },
  render: (args) => (
    <YStack width={100} ai="center" jc="center" bg="$backgroundHover" p="$2" borderRadius="$4">
      <meta.render {...args} />
    </YStack>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Verifica o comportamento do Avatar quando colocado dentro de um contêiner com restrições de tamanho.',
      },
    },
  },
};

export const Interativo: Story = {
  name: 'Interativo (dentro de um botão)',
  render: (args) => (
    <Button>
        <meta.render {...args} />
    </Button>
  ),
  args: {
    ...Padrao.args,
    size: '$8',
  },
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole('button');

    await step('Verifica se o botão é focável', async () => {
      await userEvent.tab();
      expect(button).toHaveFocus();
    });
  },
  parameters: {
    docs: {
      description: {
        story: 'Demonstra o uso do Avatar dentro de um elemento interativo como um `Button`. O Avatar herda os estados de interação (hover, focus).',
      },
    },
  },
};
