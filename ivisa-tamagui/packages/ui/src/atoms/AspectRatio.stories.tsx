import { expect, userEvent, within } from '@storybook/test'
import type { Meta, StoryObj } from '@storybook/react'
import { AspectRatio } from './AspectRatio'
import { H4, Image, Paragraph, YStack } from 'tamagui'
import { Card } from '../molecules/Card'

const meta: Meta<any> = {
  title: 'Átomos/ProporcaoDaTela',
  component: AspectRatio,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Exibe o conteúdo dentro da proporção desejada, com variantes pré-definidas e estado de carregamento.',
      },
    },
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['square', 'video', 'photo'],
      description: 'Variantes de proporção pré-definidas.',
    },
    ratio: {
      control: 'number',
      description: 'Uma proporção numérica customizada que sobrepõe a variante.',
    },
    loading: {
      control: 'boolean',
      description: 'Se verdadeiro, exibe um esqueleto de carregamento.',
    },
    children: {
      control: {
        disable: true,
      },
      description: 'O conteúdo a ser renderizado dentro do componente.',
    },
    asChild: {
      control: {
        disable: true,
      },
      description: 'Permite que o componente se funda com seu único filho.',
    },
  },
}

export default meta

type Story = StoryObj<any>

export const Padrao: Story = {
  args: {
    variant: 'video',
    width: 400,
    overflow: 'hidden',
    backgroundColor: '$gray5',
    children: (
      <Image
        source={{
          uri: 'https://images.unsplash.com/photo-1535025183041-0991a977e25b?w=300&dpr=2&q=80',
        }}
        width="100%"
        height="100%"
        objectFit="cover"
      />
    ),
  },
}

export const ComEstadoDeCarregamento: Story = {
  name: 'Com Estado de Carregamento',
  args: {
    ...Padrao.args,
    loading: true,
    children: undefined,
  },
}

export const PolimorficoComCard: Story = {
  name: 'Polimórfico com Card (asChild)',
  render: (args) => (
    <AspectRatio {...args}>
      <Card
        width="100%"
        height="100%"
        alignItems="center"
        justifyContent="center"
      >
        <H4>Card com Proporção</H4>
        <Paragraph>Este card mantém a proporção de 16:9.</Paragraph>
      </Card>
    </AspectRatio>
  ),
  args: {
    variant: 'video',
    width: 400,
    asChild: true,
  },
}

export const ComFocoVisivel: Story = {
  name: 'Com Foco Visível',
  args: {
    ...Padrao.args,
    'data-testid': 'focusable-aspect-ratio',
    tabIndex: 0,
    focusStyle: {
      outlineStyle: 'solid',
      outlineWidth: 2,
      outlineColor: '$blue10',
    },
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const aspectRatio = canvas.getByTestId('focusable-aspect-ratio')
    await userEvent.tab()
    await expect(aspectRatio).toHaveFocus()
  },
}

export const ComTextoLongo: Story = {
  args: {
    variant: 'video',
    width: 300,
    overflow: 'hidden',
    backgroundColor: '$gray5',
    padding: '$4',
    children: (
      <Paragraph data-testid="long-text">
        Este é um exemplo de texto longo para verificar como o componente se comporta. O conteúdo deve ser
        cortado ou ajustado para caber no contêiner, garantindo que o layout não quebre.
      </Paragraph>
    ),
  },
}

export const EmContainerPequeno: Story = {
  render: (args) => (
    <YStack width={200}>
      <AspectRatio
        {...args}
        overflow="hidden"
        backgroundColor="$gray5"
      >
        <Image
          source={{
            uri: 'https://images.unsplash.com/photo-1535025183041-0991a977e25b?w=300&dpr=2&q=80',
          }}
          width="100%"
          height="100%"
          objectFit="cover"
        />
      </AspectRatio>
    </YStack>
  ),
  args: {
    variant: 'square',
  },
}

