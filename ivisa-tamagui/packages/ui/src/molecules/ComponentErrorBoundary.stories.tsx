import type { Meta, StoryObj } from '@storybook/react'
import { useArgs } from '@storybook/preview-api'
import React, { useState, ReactNode } from 'react'
import { Button, Paragraph, Text, XStack, YStack } from 'tamagui'
import { ComponentErrorBoundary } from './ComponentErrorBoundary'

const meta: Meta<typeof ComponentErrorBoundary> = {
  title: 'Moléculas/ComponentErrorBoundary',
  component: ComponentErrorBoundary,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
### Uso
Captura erros de JavaScript na árvore de componentes filhos, registra-os e exibe uma interface de fallback com opções de recuperação.
Impede que a aplicação inteira trave.

### Props
- **componentName**: Nome do componente envelopado para logs.
- **fallback**: UI customizada para erro (opcional).
- **onReset**: Callback executado ao tentar recuperar.
`,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    componentName: {
      control: { type: 'text' },
      description: 'Nome do componente sendo envolvido, usado para fins de log.',
    },
    onReset: {
      action: 'reset',
      description: 'Função de callback para resetar o estado do componente e re-renderizar os filhos.',
    },
    fallback: {
      control: { type: 'object' },
      description: 'Um ReactNode personalizado para exibir como UI de fallback em vez do padrão.',
    },
    children: {
      control: { disable: true },
      description: 'Os componentes filhos a serem renderizados dentro do limite de erro.',
    },
  },
}

export default meta

type Story = StoryObj<typeof ComponentErrorBoundary>

const BuggyComponent = ({ shouldThrow }: { shouldThrow: boolean }) => {
  if (shouldThrow) {
    throw new Error('O componente falhou intencionalmente para o story!')
  }
  return (
    <YStack p="$4" backgroundColor="$green4" borderRadius="$4">
      <Paragraph color="$color">Eu sou um componente seguro. Sem erros aqui!</Paragraph>
    </YStack>
  )
}

const InteractiveStory = ({
  children,
  ...args
}: {
  children: ReactNode
  args: Story['args']
}) => {
  const [key, setKey] = useState(0)
  const [{ shouldThrow }, updateArgs] = useArgs()

  const handleReset = () => {
    args.onReset?.()
    setKey((prev) => prev + 1)
    updateArgs({ shouldThrow: false })
  }

  return (
    <YStack gap="$4" width={400} alignItems="center">
      <ComponentErrorBoundary {...args} key={key} onReset={handleReset}>
        <BuggyComponent shouldThrow={shouldThrow} />
      </ComponentErrorBoundary>
      <Button onPress={() => updateArgs({ shouldThrow: true })} disabled={shouldThrow}>
        Disparar Erro
      </Button>
    </YStack>
  )
}

export const Padrao: Story = {
  render: (args) => <InteractiveStory args={args}> </InteractiveStory>,
  args: {
    componentName: 'DefaultStory',
    shouldThrow: false,
  },
  parameters: {
    docs: {
      description: {
        story:
          'Este é o estado padrão. O componente filho renderiza normalmente. Clique em "Disparar Erro" para ver a UI de fallback.',
      },
    },
  },
}

export const WithErrorAndRecovery: Story = {
  render: (args) => <InteractiveStory args={args}> </InteractiveStory>,
  args: {
    componentName: 'RecoveryStory',
    shouldThrow: true,
  },
  parameters: {
    docs: {
      description: {
        story:
          'Este story mostra a UI de fallback padrão com um botão "Tentar Novamente". Clicar nele resetará o estado de erro e re-renderizará o componente filho.',
      },
    },
  },
}

export const StressTestNarrowContainer: Story = {
  render: (args) => (
    <YStack width={250}>
      <ComponentErrorBoundary {...args}>
        <BuggyComponent shouldThrow={true} />
      </ComponentErrorBoundary>
    </YStack>
  ),
  args: {
    componentName: 'NarrowContainerStory',
    onReset: () => {},
  },
  parameters: {
    docs: {
      description: {
        story: 'Este story demonstra como a UI de fallback se adapta a um contêiner estreito.',
      },
    },
  },
}

const CustomFallback = () => (
  <XStack
    gap="$4"
    p="$4"
    backgroundColor="$blue4"
    borderRadius="$6"
    alignItems="center"
    borderColor="$blue7"
    borderWidth={2}
    borderStyle="dashed"
  >
    <Text fontSize="$8">🤔</Text>
    <YStack>
      <Paragraph fontWeight="bold">Oops, fallback personalizado!</Paragraph>
      <Paragraph fontSize="$2">Algo deu errado, mas temos uma UI personalizada para isso.</Paragraph>
    </YStack>
  </XStack>
)

export const WithCustomFallback: Story = {
  args: {
    componentName: 'CustomFallbackStory',
    fallback: <CustomFallback />,
    children: <BuggyComponent shouldThrow={true} />,
  },
  parameters: {
    docs: {
      description: {
        story:
          'Este story mostra como você pode fornecer um componente `fallback` personalizado para ser renderizado em caso de erro.',
      },
    },
  },
}
