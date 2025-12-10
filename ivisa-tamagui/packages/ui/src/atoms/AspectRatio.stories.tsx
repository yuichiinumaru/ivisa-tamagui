import { expect, userEvent, within } from '@storybook/test'
import type { Meta, StoryObj } from '@storybook/react'
import { AspectRatio } from './AspectRatio'
import { Image, Paragraph, YStack } from 'tamagui'

const meta: Meta<typeof AspectRatio> = {
  title: 'Atomos/ProporcaoDaTela',
  component: AspectRatio,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Exibe o conteúdo dentro da proporção desejada.',
      },
    },
  },
  argTypes: {
    ratio: {
      control: 'select',
      options: ['16:9', '4:3', '1:1', '21:9'],
      mapping: {
        '16:9': 16 / 9,
        '4:3': 4 / 3,
        '1:1': 1,
        '21:9': 21 / 9,
      },
      description: 'A proporção da largura do componente em relação à sua altura.',
    },
    children: {
      control: {
        disable: true,
      },
      description: 'O conteúdo a ser renderizado dentro do componente.',
    },
  },
}

export default meta

type Story = StoryObj<typeof AspectRatio>

export const Padrao: Story = {
  args: {
    'data-testid': 'aspect-ratio',
    ratio: 16 / 9,
    width: 300,
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
    tabIndex: 0,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const aspectRatio = canvas.getByTestId('aspect-ratio')
    await userEvent.tab()
    await expect(aspectRatio).toHaveFocus()
  },
}

export const ComTextoLongo: Story = {
  args: {
    ratio: 16 / 9,
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
    ratio: 1,
  },
}
