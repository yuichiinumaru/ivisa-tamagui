import type { Meta, StoryObj } from '@storybook/react';
import { userEvent, within } from '@storybook/test';
import { expect } from '@storybook/test';
import { YStack } from 'tamagui';

import { Avatar } from './Avatar';

const meta: Meta<typeof Avatar> = {
  title: 'Átomos/Avatar',
  component: Avatar,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Um componente de imagem que exibe as iniciais do usuário ou uma imagem de perfil.',
      },
      source: {
        code: `
<Avatar size="$10" shape="circle">
  <Avatar.Image src="https://github.com/tamagui.png" accessibilityLabel="Avatar de Usuário" />
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
    shape: {
      name: 'Forma',
      control: { type: 'radio' },
      options: ['circle', 'square', 'rounded'],
      description: 'Define a forma do avatar.',
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
      <Avatar.Image src={imageUrl} accessibilityLabel={accessibilityLabel || fallbackText} />
      <Avatar.Fallback>{fallbackText}</Avatar.Fallback>
    </Avatar>
  ),
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Padrao: Story = {
  name: 'Padrão (Círculo)',
  args: {
    size: '$10',
    shape: 'circle',
    imageUrl: 'https://github.com/tamagui.png',
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

export const Quadrado: Story = {
  name: 'Forma: Quadrado',
  args: {
    ...Padrao.args,
    shape: 'square',
  },
};

export const Arredondado: Story = {
  name: 'Forma: Arredondado',
  args: {
    ...Padrao.args,
    shape: 'rounded',
  },
};

export const ComFallbackDinamico: Story = {
  name: 'Com Fallback (Cor Dinâmica)',
  args: {
    ...Padrao.args,
    imageUrl: 'https://url-invalida.png',
    fallbackText: 'Jules',
    accessibilityLabel: 'Avatar com fallback dinâmico',
  },
};

export const ComIndicadorDeStatus: Story = {
  name: 'Com Indicador de Status',
  args: {
    ...Padrao.args,
  },
  render: (args) => (
    <div style={{ position: 'relative', display: 'inline-block' }}>
      <meta.render {...args} />
      <Avatar.Indicator />
    </div>
  ),
};

export const Carregando: Story = {
  name: 'Carregando (com Skeleton)',
  args: {
    ...Padrao.args,
    imageUrl: 'https://i.pravatar.cc/150?u=a042581f4e29026704d',
  },
};

export const ComTextoDeFallbackLongo: Story = {
  name: 'Com Texto de Fallback Longo',
  args: {
    ...ComFallbackDinamico.args,
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
