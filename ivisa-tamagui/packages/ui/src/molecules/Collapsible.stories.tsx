
import type { Meta, StoryObj } from '@storybook/react'
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleRoot,
  CollapsibleTrigger,
} from './Collapsible'
import { Badge, Button, Text, XStack, YStack } from 'tamagui'
import { ChevronsUpDown } from '@tamagui/lucide-icons'
import React from 'react'

const meta: Meta<typeof Collapsible> = {
  title: 'Molecules/Collapsible',
  component: Collapsible,
  tags: ['autodocs'],
  argTypes: {
    title: {
      control: 'text',
      description: 'The title displayed in the collapsible trigger.',
    },
    isLoading: {
      control: 'boolean',
      description: 'If true, the content will be replaced by skeletons.',
    },
    hasError: {
      control: 'boolean',
      description: 'If true, the trigger will have a destructive appearance.',
    },
    isDisabled: {
      control: 'boolean',
      description: 'If true, the trigger will be disabled.',
    },
    rightSlot: {
      control: false,
      description: 'A slot for custom React nodes to the right of the title.',
    },
    animationDuration: {
      control: 'number',
      description: 'The duration of the animation in milliseconds.',
    },
    animationEasing: {
      control: 'text',
      description: 'The easing function for the animation.',
    },
  },
}

export default meta

type Story = StoryObj<typeof Collapsible>

const renderContent = () => (
  <YStack space="$2">
    <Text padding="$2" borderWidth={1} borderColor="$borderColor" borderRadius="$4">
      @radix-ui/colors
    </Text>
    <Text padding="$2" borderWidth={1} borderColor="$borderColor" borderRadius="$4">
      @stitches/react
    </Text>
  </YStack>
)

export const Padrao: Story = {
  name: 'Padrão',
  args: {
    title: '3 repositórios favoritados',
    children: renderContent(),
  },
}

export const Carregando: Story = {
  name: 'Carregando (Loading)',
  args: {
    ...Padrao.args,
    isLoading: true,
  },
}

export const ComErro: Story = {
  name: 'Com Erro (Error)',
  args: {
    ...Padrao.args,
    hasError: true,
  },
}

export const Desabilitado: Story = {
  name: 'Desabilitado (Disabled)',
  args: {
    ...Padrao.args,
    isDisabled: true,
  },
}

export const ComAcaoPersonalizada: Story = {
  name: 'Com Ação Personalizada (Right Slot)',
  args: {
    ...Padrao.args,
    rightSlot: <Badge>Novo</Badge>,
  },
}

export const TesteDeEstresse: Story = {
  name: 'Teste de Estresse (Stress Test)',
  args: {
    ...Padrao.args,
    title:
      'Este é um título muito longo para testar o comportamento de truncamento de texto em contêineres estreitos.',
  },
  decorators: [
    (Story) => (
      <YStack width={300}>
        <Story />
      </YStack>
    ),
  ],
}

export const Composicao: Story = {
  name: 'Composição (Compound Pattern)',
  render: () => (
    <CollapsibleRoot>
      <CollapsibleTrigger>
        <Text fontSize="$4" fontWeight="bold">
          Título Personalizado
        </Text>
        <Button size="$3" chromeless icon={ChevronsUpDown} />
      </CollapsibleTrigger>
      <CollapsibleContent>{renderContent()}</CollapsibleContent>
    </CollapsibleRoot>
  ),
}

export const AnimacaoPersonalizada: Story = {
  name: 'Animação Personalizada',
  args: {
    ...Padrao.args,
    animationDuration: 1000,
    animationEasing: 'ease-out',
  },
}
