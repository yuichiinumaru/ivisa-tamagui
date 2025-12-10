import type { Meta, StoryObj } from '@storybook/react'
import { YStack, XStack } from 'tamagui'
import { Skeleton } from './Skeleton'

/**
 * ## Skeleton (Esqueleto)
 *
 * O componente `Skeleton` é usado para exibir uma representação visual do conteúdo
 * antes que ele seja carregado, melhorando a experiência do usuário ao fornecer um feedback
 * de que a página está processando.
 */
const meta: Meta<typeof Skeleton> = {
  title: 'atoms/Skeleton',
  component: Skeleton,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Um placeholder visual para conteúdo em carregamento. Usado para melhorar a percepção de performance.',
      },
    },
  },
  argTypes: {
    width: {
      control: { type: 'number' },
      description: 'Largura do esqueleto.',
    },
    height: {
      control: { type: 'number' },
      description: 'Altura do esqueleto.',
    },
    circular: {
      control: { type: 'boolean' },
      description: 'Define se o esqueleto deve ter um formato circular (usado para avatares).',
    },
    animationType: {
      control: 'select',
      options: ['pulse', 'none'],
      description: 'Controla o tipo de animação do esqueleto.',
    },
  },
}

export default meta

type Story = StoryObj<typeof Skeleton>

/**
 * ### Padrão
 * Exibição básica do esqueleto. Você pode controlar suas dimensões e animação
 * através do painel de "Controls".
 */
export const Padrao: Story = {
  name: 'Padrão',
  args: {
    width: 200,
    height: 20,
    circular: false,
    animationType: 'pulse',
  },
}

/**
 * ### Exemplo de Composição
 * Os esqueletos podem ser combinados para criar layouts complexos que imitam a interface final,
 * como um cartão de perfil de usuário.
 */
export const ExemploDeComposicao: Story = {
  name: 'Exemplo de Composição',
  render: () => (
    <YStack
      space="$3"
      p="$4"
      borderWidth={1}
      borderColor="$borderColor"
      borderRadius="$4"
      width={300}
    >
      <XStack space="$3" alignItems="center">
        <Skeleton circular width={40} height={40} />
        <YStack space="$2">
          <Skeleton width={150} height={16} />
          <Skeleton width={100} height={12} />
        </YStack>
      </XStack>
      <YStack space="$2" mt="$2">
        <Skeleton width="100%" height={12} />
        <Skeleton width="90%" height={12} />
      </YStack>
    </YStack>
  ),
}

/**
 * ### Teste de Contenção
 * Esta história demonstra como o esqueleto se comporta dentro de um contêiner
 * com espaço limitado, garantindo que ele não quebre o layout.
 */
export const TesteDeContencao: Story = {
  name: 'Teste de Contenção',
  render: () => (
    <YStack width={100} padding="$2" borderWidth={1} borderColor="$borderColor" borderRadius="$4">
      <Skeleton width="100%" height={20} />
    </YStack>
  ),
}
