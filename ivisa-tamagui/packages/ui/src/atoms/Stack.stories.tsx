// @ts-nocheck
import type { Meta, StoryObj } from '@storybook/react'
import { Stack, HStack, VStack } from './Stack'
import { Text, View } from 'tamagui'
import { userEvent, within } from '@storybook/test'

const meta: Meta<typeof Stack> = {
  title: 'Átomos/Stack',
  component: Stack,
  tags: ['autodocs'],
  argTypes: {
    gap: {
      control: { type: 'select' },
      options: ['$2', '$4', '$6', '$true'],
      description: 'Define o espaçamento entre os elementos filhos.',
    },
    p: {
      control: { type: 'select' },
      options: ['$2', '$4', '$6', '$true'],
      description: 'Define o preenchimento interno do container.',
    },
    flexDirection: {
        control: { type: 'select' },
        options: ['row', 'column', 'row-reverse', 'column-reverse'],
        description: 'Controla a direção em que os filhos são dispostos.',
    },
    alignItems: {
        control: { type: 'select' },
        options: ['flex-start', 'center', 'flex-end', 'stretch', 'baseline'],
        description: 'Alinha os filhos no eixo transversal.',
    },
    justifyContent: {
        control: { type: 'select' },
        options: ['flex-start', 'center', 'flex-end', 'space-between', 'space-around', 'space-evenly'],
        description: 'Alinha os filhos no eixo principal.',
    },
    space: {
        control: { type: 'select' },
        options: ['$2', '$4', '$6', '$true'],
        description: 'Aplica um espaçamento uniforme entre os filhos (alternativa ao gap).',
    },
    onClick: { action: 'clicked' }
  },
  args: {
    p: '$4',
    gap: '$4',
    bc: '$background',
    borderWidth: 1,
    borderColor: '$borderColor',
    borderRadius: '$4'
  },
  render: (args) => (
    <Stack {...args}>
        <View p="$4" bc="$primary" borderRadius="$3"><Text color="$primaryForeground">Item 1</Text></View>
        <View p="$4" bc="$secondary" borderRadius="$3"><Text color="$secondaryForeground">Item 2</Text></View>
        <View p="$4" bc="$accent" borderRadius="$3"><Text color="$accentForeground">Item 3</Text></View>
    </Stack>
  )
}

export default meta

type Story = StoryObj<typeof Stack>

export const Padrao: Story = {
    name: "Padrão",
    args: {}
}

export const Horizontal: Story = {
    name: "Horizontal (HStack)",
    render: (args) => (
        <HStack {...args}>
            <View p="$4" bc="$primary" borderRadius="$3"><Text color="$primaryForeground">Item 1</Text></View>
            <View p="$4" bc="$secondary" borderRadius="$3"><Text color="$secondaryForeground">Item 2</Text></View>
            <View p="$4" bc="$accent" borderRadius="$3"><Text color="$accentForeground">Item 3</Text></View>
        </HStack>
    )
}

export const Vertical: Story = {
    name: "Vertical (VStack)",
    render: (args) => (
        <VStack {...args}>
            <View p="$4" bc="$primary" borderRadius="$3"><Text color="$primaryForeground">Item 1</Text></View>
            <View p="$4" bc="$secondary" borderRadius="$3"><Text color="$secondaryForeground">Item 2</Text></View>
            <View p="$4" bc="$accent" borderRadius="$3"><Text color="$accentForeground">Item 3</Text></View>
        </VStack>
      )
}

export const AsChild: Story = {
    name: "Composição (asChild)",
    args: {
        asChild: true,
        // Remove ALL layout props that might be passed as style arrays to the native button
        // by Tamagui when extracting styles fails or when doing client-side expansion.
        gap: undefined,
        p: undefined,
        bc: undefined,
        borderWidth: undefined,
        borderColor: undefined,
        borderRadius: undefined,
        hoverStyle: undefined,
        pressStyle: undefined,
        focusStyle: undefined,
        animation: undefined
    },
    render: (args) => (
        <Stack asChild>
            <button data-testid="aschild-button" onClick={args.onClick} style={{ all: 'unset', cursor: 'pointer', display: 'flex', alignItems: 'center' }}>
                <Text>Eu sou um botão</Text>
            </button>
        </Stack>
    ),
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement);
        const button = await canvas.getByTestId('aschild-button');
        await userEvent.click(button);
    },
}

export const TextoLongo: Story = {
    name: 'Teste de Estresse: Texto Longo',
    render: (args) => (
        <VStack {...args}>
            <View bc="$primary" borderRadius="$3" p="$2">
                <Text color="$primaryForeground">Texto Normal</Text>
            </View>
            <View bc="$secondary" borderRadius="$3" p="$2">
                <Text color="$secondaryForeground">
                    Esteéumtextomuitolongosemespaçosparadesafiarocomportamentodequebradelinhadoleiauteeassegurarcorespostavisualadequada.
                </Text>
            </View>
        </VStack>
    )
};

export const RestritoContainer: Story = {
    name: 'Teste de Estresse: Container Restrito',
    decorators: [
      (Story) => (
        <View width={200} bc="$backgroundStrong" p="$4" borderRadius="$4">
          <Story />
        </View>
      ),
    ],
    render: (args) => (
        <VStack {...args}>
            <View bc="$primary" borderRadius="$3" p="$2">
                <Text fontSize={12} color="$primaryForeground">Item 1</Text>
            </View>
            <View bc="$secondary" borderRadius="$3" p="$2">
                <Text fontSize={12} color="$secondaryForeground">Item 2 com texto um pouco maior</Text>
            </View>
        </VStack>
    )
};
