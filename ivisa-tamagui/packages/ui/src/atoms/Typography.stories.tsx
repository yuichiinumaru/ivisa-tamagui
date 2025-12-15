import type { Meta, StoryObj } from '@storybook/react';
import { YStack } from 'tamagui';
import { userEvent, within } from '@storybook/test';
import { expect } from '@storybook/test';
import { AlarmClock } from '@tamagui/lucide-icons';
import {
  H1,
  H2,
  H3,
  H4,
  H5,
  H6,
  Paragraph,
  MutedText,
  LeadText,
  Blockquote,
} from './Typography';

const meta: Meta = {
  title: 'Átomos/Typography',
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <YStack gap="$4" p="$4" width={500}>
        <Story />
      </YStack>
    ),
  ],
  argTypes: {
    children: {
      control: 'text',
      description: 'O conteúdo do texto a ser exibido.',
    },
    variant: {
      control: {
        type: 'select',
        options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'span'],
      },
      description: 'A tag HTML semântica e o estilo a ser aplicado.',
    },
    loading: {
      control: 'boolean',
      description: 'Se verdadeiro, o componente renderizará um carregador de esqueleto.',
    },
    uppercase: {
      control: 'boolean',
      description: 'Se verdadeiro, o texto será transformado em maiúsculas.',
    },
    asChild: {
      control: 'boolean',
      description: 'Se verdadeiro, o componente renderizará seus filhos como um slot.',
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

const renderStory = (args) => {
  const components = {
    h1: H1,
    h2: H2,
    h3: H3,
    h4: H4,
    h5: H5,
    h6: H6,
    p: Paragraph,
    span: MutedText,
  };
  const Component = components[args.variant] || Paragraph;
  return <Component {...args} />;
};

export const Padrao: Story = {
  args: {
    children: 'Este é um texto padrão.',
    variant: 'p',
    loading: false,
    uppercase: false,
  },
  render: renderStory,
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement);
    const textElement = canvas.getByText(args.children);
    await userEvent.click(textElement);
    expect(textElement).toBeInTheDocument();
    // A more robust test would be to check for an action in the actions panel
  },
};

export const TextoLongo: Story = {
  args: {
    children: 'Este é um texto muito longo para testar o comportamento de quebra de linha e truncamento. O pedido do rei, no entanto, não foi tão facilmente atendido. Era um pedido que testaria os limites de seu poder e a leialdade de seus súditos.',
    variant: 'p',
  },
  render: renderStory,
};

export const Restrito: Story = {
  args: {
    children: 'Este texto está dentro de um contêiner com uma largura máxima de 100px.',
    variant: 'p',
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: '100px', border: '1px solid red' }}>
        <Story />
      </div>
    ),
  ],
  render: renderStory,
};

export const Carregando: Story = {
  args: {
    children: 'Este texto não deve ser visível.',
    variant: 'p',
    loading: true,
  },
  render: renderStory,
};

export const ComIcones: Story = {
  args: {
    children: 'Texto com ícones',
    variant: 'p',
    leftIcon: <AlarmClock />,
    rightIcon: <AlarmClock />,
  },
  render: renderStory,
};

export const AsChild: Story = {
  args: {
    children: <a href="#">Este é um link renderizado como filho.</a>,
    variant: 'p',
    asChild: true,
  },
  render: renderStory,
};

export const All: Story = {
  render: () => (
    <>
      <H1>Cabeçalho 1</H1>
      <H2>Cabeçalho 2</H2>
      <H3>Cabeçalho 3</H3>
      <H4>Cabeçalho 4</H4>
      <H5>Cabeçalho 5</H5>
      <H6>Cabeçalho 6</H6>
      <Paragraph>
        Este é um parágrafo padrão. O pedido do rei, no entanto, não foi tão facilmente atendido. Era um pedido que testaria os limites de seu poder e a lealdade de seus súditos.
      </Paragraph>
      <LeadText>
        Este é um parágrafo principal. Ele se destaca do resto. Um parágrafo principal é um único parágrafo que precede o corpo de um texto.
      </LeadText>
      <MutedText>
        Este é um texto esmaecido. É para informações suplementares.
      </MutedText>
      <Blockquote>
        "Esta é uma citação em bloco. É para citar texto de outra fonte."
      </Blockquote>
    </>
  ),
};
