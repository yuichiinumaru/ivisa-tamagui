import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import {
  ResizablePanelGroup,
  ResizablePanel,
  ResizableHandle,
} from './Resizable'
import { YStack, Text } from 'tamagui'

const meta: Meta<React.ComponentProps<typeof ResizablePanelGroup>> = {
  title: 'Moléculas/Redimensionável',
  component: ResizablePanelGroup,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    direction: {
      control: { type: 'radio' },
      options: ['horizontal', 'vertical'],
      description: 'A direção do layout do painel.',
    },
    isDisabled: {
      control: { type: 'boolean' },
      description: 'Desativa a funcionalidade de redimensionamento.',
    },
    isLoading: {
        control: { type: 'boolean' },
        description: 'Coloca o componente em estado de carregamento.',
    },
    hasError: {
        control: { type: 'boolean' },
        description: 'Aplica um tema de erro ao componente.',
    },
    keyboardStep: {
        control: { type: 'number' },
        description: 'O incremento (em porcentagem) para redimensionamento via teclado.',
    }
  },
}

export default meta

type Story = StoryObj<React.ComponentProps<typeof meta>>

const renderPanelContent = (text: string) => (
  <YStack flex={1} alignItems="center" justifyContent="center" padding="$4">
    <Text>{text}</Text>
  </YStack>
);

const defaultProps = {
  width: 600,
  height: 300,
  borderWidth: 1,
  borderColor: '$borderColor',
  borderRadius: '$6',
};

export const Horizontal: Story = {
  args: {
    ...defaultProps,
    direction: 'horizontal',
  },
  render: (args) => (
    <ResizablePanelGroup {...args}>
      <ResizablePanel defaultSize={50} minSize={20}>
        {renderPanelContent('Painel Um')}
      </ResizablePanel>
      <ResizableHandle />
      <ResizablePanel defaultSize={50} minSize={20}>
        {renderPanelContent('Painel Dois')}
      </ResizablePanel>
    </ResizablePanelGroup>
  ),
}

export const Vertical: Story = {
  args: {
    ...defaultProps,
    direction: 'vertical',
  },
  render: (args) => (
    <ResizablePanelGroup {...args}>
      <ResizablePanel defaultSize={25} minSize={10}>
        {renderPanelContent('Painel Um')}
      </ResizablePanel>
      <ResizableHandle />
      <ResizablePanel defaultSize={75} minSize={10}>
        {renderPanelContent('Painel Dois')}
      </ResizablePanel>
    </ResizablePanelGroup>
  ),
}

export const ComAlca: Story = {
  name: 'Com Alça Visual',
  args: {
    ...defaultProps,
    direction: 'horizontal',
  },
  render: (args) => (
    <ResizablePanelGroup {...args}>
      <ResizablePanel defaultSize={50} minSize={15}>
        {renderPanelContent('Painel Esquerdo')}
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel defaultSize={50} minSize={15}>
        {renderPanelContent('Painel Direito')}
      </ResizablePanel>
    </ResizablePanelGroup>
  ),
}

export const Acessibilidade: Story = {
    name: 'Acessibilidade (Navegação via Teclado)',
    args: {
      ...defaultProps,
      direction: 'horizontal',
      keyboardStep: 10,
    },
    render: (args) => (
      <YStack gap="$4" alignItems='center'>
        <Text>Foque na alça e use as setas do teclado para redimensionar.</Text>
        <ResizablePanelGroup {...args}>
          <ResizablePanel defaultSize={50} minSize={20}>
            {renderPanelContent('Painel A')}
          </ResizablePanel>
          <ResizableHandle withHandle />
          <ResizablePanel defaultSize={50} minSize={20}>
            {renderPanelContent('Painel B')}
          </ResizablePanel>
        </ResizablePanelGroup>
      </YStack>
    ),
  }

export const EstadoCarregando: Story = {
    name: 'Estado: Carregando',
    args: {
      ...defaultProps,
      direction: 'horizontal',
      isLoading: true,
    },
    render: (args) => (
      <ResizablePanelGroup {...args}>
        <ResizablePanel defaultSize={50}>
          {renderPanelContent('Painel Um')}
        </ResizablePanel>
        <ResizableHandle withHandle />
        <ResizablePanel defaultSize={50}>
          {renderPanelContent('Painel Dois')}
        </ResizablePanel>
      </ResizablePanelGroup>
    ),
}

export const EstadoErro: Story = {
    name: 'Estado: Erro',
    args: {
      ...defaultProps,
      direction: 'horizontal',
      hasError: true,
    },
    render: (args) => (
      <ResizablePanelGroup {...args}>
        <ResizablePanel defaultSize={50}>
          {renderPanelContent('Painel Um')}
        </ResizablePanel>
        <ResizableHandle withHandle />
        <ResizablePanel defaultSize={50}>
          {renderPanelContent('Painel Dois')}
        </ResizablePanel>
      </ResizablePanelGroup>
    ),
  }
