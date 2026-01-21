// @ts-nocheck
import { action } from '@storybook/addon-actions'
import type { Meta, StoryObj } from '@storybook/react'
import { userEvent, within } from '@storybook/test'
import { Button, Stack, Text, XStack } from 'tamagui'
import { Dot } from './Dot'

const meta: Meta<typeof Dot> = {
  title: 'Átomos/Ponto',
  component: Dot,
  tags: ['autodocs'],
  argTypes: {
    status: {
      name: 'Status',
      control: 'select',
      options: ['success', 'warning', 'error', 'neutral'],
      description: 'O status do ponto, que determina sua cor a partir do tema.',
    },
    color: {
      name: 'Cor Customizada',
      control: 'color',
      description:
        'Uma cor específica (ex: "$blue10") ou cor CSS para aplicar ao ponto, que sobrepõe a cor definida pelo "status".',
    },
    size: {
      name: 'Tamanho',
      control: { type: 'number', min: 4, max: 40, step: 2 },
      description: 'O tamanho (diâmetro) do ponto em pixels.',
    },
  },
  parameters: {
    docs: {
      description: {
        component:
          'Um componente `Dot` (Ponto) usado para indicar status ou notificações. É um elemento visual simples e não interativo.',
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof Dot>

export const Padrao: Story = {
  name: 'Padrão',
  args: {
    status: 'success',
    size: 10,
  },
  parameters: {
    docs: {
      description: {
        story: 'Exibição padrão do ponto com o status "success".',
      },
    },
  },
}

export const Composicao: Story = {
  name: 'Composição em Botão',
  args: {
    status: 'error',
    size: 8,
  },
  render: (args) => (
    <Button
      onClick={action('button-click')}
      iconAfter={
        <Stack>
          <Dot {...args} />
          <Text
            fontSize={10}
            color="$color"
            position="absolute"
            top="-12px"
            right="-10px"
            backgroundColor="$background"
            borderRadius="$round"
            paddingHorizontal={4}
          >
            3
          </Text>
        </Stack>
      }
    >
      Notificações
    </Button>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const button = canvas.getByRole('button', { name: /Notificações/i })
    await userEvent.click(button)
  },
  parameters: {
    docs: {
      description: {
        story:
          'O `Dot` pode ser facilmente composto dentro de outros componentes, como um `Button`, para criar um indicador de notificação.',
      },
    },
  },
}

export const Acessibilidade: Story = {
  name: 'Uso Acessível',
  args: {
    status: 'warning',
    size: 10,
  },
  render: (args) => (
    <XStack ai="center" gap="$2">
      <Dot {...args} />
      <Text>Status do Serviço</Text>
      <Text srOnly>Atenção</Text>
    </XStack>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'Quando um `Dot` é usado para transmitir significado (como um status), o texto alternativo deve ser fornecido para leitores de tela usando um elemento `srOnly` (somente para leitor de tela).',
      },
    },
  },
}

export const EmContainer: Story = {
  name: 'Em Container Pequeno',
  args: {
    size: 20,
    status: 'neutral',
  },
  render: (args) => (
    <Stack width={50} height={50} jc="center" ai="center" backgroundColor="$gray5">
      <Dot {...args} />
    </Stack>
  ),
  parameters: {
    docs: {
      description: {
        story: 'O ponto se centraliza corretamente dentro de um container com dimensões restritas.',
      },
    },
  },
}

