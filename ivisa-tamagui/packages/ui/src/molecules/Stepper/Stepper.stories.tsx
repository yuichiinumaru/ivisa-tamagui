import type { Meta, StoryObj } from '@storybook/react'
import { Stepper } from './Stepper'
import { Text, YStack, XStack } from 'tamagui'
import { Button } from '../../atoms/Button'
import { Minus, Plus } from '@tamagui/lucide-icons'

const steps = [
  {
    title: 'Passo 1: Detalhes Pessoais',
    content: <Text>Conteúdo dos detalhes pessoais aqui.</Text>,
  },
  {
    title: 'Passo 2: Endereço',
    content: <Text>Conteúdo do endereço aqui.</Text>,
  },
  {
    title: 'Passo 3: Revisão e Envio',
    content: <Text>Revise suas informações e envie.</Text>,
  },
]

const meta: Meta<typeof Stepper> = {
  title: 'Molecules/Stepper',
  component: Stepper,
  tags: ['autodocs'],
  args: {
    steps: steps,
    actions: (nextStep, prevStep, isFirstStep, isLastStep, isDisabled) => (
      <XStack justifyContent="space-between" width="100%">
        <Button
          onPress={prevStep}
          disabled={isFirstStep || isDisabled}
          icon={Minus}
        >
          Anterior
        </Button>
        <Button
          onPress={nextStep}
          disabled={isLastStep || isDisabled}
          iconAfter={Plus}
        >
          Próximo
        </Button>
      </XStack>
    ),
  },
  render: (args) => (
    <YStack width={400} space="$4">
      <Stepper {...args} />
    </YStack>
  ),
}

export default meta

type Story = StoryObj<typeof Stepper>

export const Padrao: Story = {
  args: {},
}

export const Carregando: Story = {
  name: 'Estado de Carregamento (Loading)',
  args: {
    isLoading: true,
  },
}

export const Erro: Story = {
  name: 'Estado de Erro',
  args: {
    hasError: true,
  },
}

export const Desabilitado: Story = {
  name: 'Estado Desabilitado',
  args: {
    isDisabled: true,
  },
}

export const TesteDeEstresse: Story = {
  name: 'Teste de Estresse (Container Estreito)',
  render: (args) => (
    <YStack width={250} space="$4">
      <Stepper {...args} />
    </YStack>
  ),
  args: {
    steps: [
      {
        title: 'Passo 1: Informações Pessoais Detalhadas',
        content: <Text>Este é um texto longo para verificar o comportamento do componente em um container estreito.</Text>,
      },
      ...steps.slice(1),
    ],
  },
}

export const AcoesCustomizadas: Story = {
  name: 'Ações Customizadas',
  args: {
    actions: (nextStep, prevStep, isFirstStep, isLastStep, isDisabled) => (
      <XStack justifyContent="flex-end" width="100%">
        {isLastStep ? (
          <Button theme="active" disabled={isDisabled}>
            Finalizar
          </Button>
        ) : (
          <Button
            onPress={nextStep}
            iconAfter={Plus}
            disabled={isDisabled}
          >
            Próximo Passo
          </Button>
        )}
      </XStack>
    ),
  },
}

export const SemPassos: Story = {
  name: 'Estado Vazio (Sem Passos)',
  args: {
    steps: [],
  },
}
