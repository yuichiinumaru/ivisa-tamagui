
import type React from 'react';
import type { Meta, StoryObj } from '@storybook/react'
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverClose,
  usePopoverContext,
} from './Popover'
import { Button } from '../../atoms/Button'
import { Input } from '../../atoms/Input'
import { Text, Label, XStack, YStack } from 'tamagui'
import { Skeleton } from '../../atoms/Skeleton'


const meta: Meta<React.ComponentProps<typeof Popover>> = {
  title: 'Moléculas/Popover',
  component: Popover,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    isLoading: {
      control: 'boolean',
      description: 'Ativa o estado de carregamento do popover.',
    },
    hasError: {
      control: 'boolean',
      description: 'Ativa o estado de erro do popover.',
    },
    isDisabled: {
      control: 'boolean',
      description: 'Desativa o gatilho do popover.',
    },
  },
}

export default meta

type Story = StoryObj<React.ComponentProps<typeof Popover>>

const PopoverContentWithHooks = () => {
  const { isLoading, hasError } = usePopoverContext()

  return (
    <>
      {isLoading ? (
        <YStack gap="$4" width={280}>
          <Skeleton height={20} width={120} />
          <Skeleton height={15} width={220} />
          <YStack gap="$4">
            <XStack alignItems="center" gap="$4">
              <Skeleton height={20} width={90} />
              <Skeleton height={40} flex={1} />
            </XStack>
            <XStack alignItems="center" gap="$4">
              <Skeleton height={20} width={90} />
              <Skeleton height={40} flex={1} />
            </XStack>
            <XStack alignItems="center" gap="$4">
              <Skeleton height={20} width={90} />
              <Skeleton height={40} flex={1} />
            </XStack>
          </YStack>
        </YStack>
      ) : (
        <YStack gap="$3">
          <Text fontWeight="600" fontSize="$4">
            Dimensões
          </Text>
          <Text fontSize="$3" color="$mutedForeground">
            Defina as dimensões para a camada.
          </Text>
          <XStack alignItems="center" gap="$4">
            <Label width={90} htmlFor="width">
              Largura
            </Label>
            <Input
              flex={1}
              id="width"
              defaultValue="100%"
              borderColor={hasError ? '$red10' : undefined}
            />
          </XStack>
          <XStack alignItems="center" gap="$4">
            <Label width={90} htmlFor="maxWidth">
              Largura Máx.
            </Label>
            <Input flex={1} id="maxWidth" defaultValue="300px" />
          </XStack>
          <XStack alignItems="center" gap="$4">
            <Label width={90} htmlFor="height">
              Altura
            </Label>
            <Input flex={1} id="height" defaultValue="25px" />
          </XStack>
        </YStack>
      )}
    </>
  )
}

const render = (args) => (
  <Popover size="$5" allowFlip placement="bottom" {...args}>
    <PopoverTrigger asChild>
      <Button variant="outline">Abrir Popover</Button>
    </PopoverTrigger>
    <PopoverContent
      width={300}
      actions={
        <XStack gap="$3" justifyContent="flex-end">
          <PopoverClose asChild>
            <Button size="$2" variant="outline">
              Cancelar
            </Button>
          </PopoverClose>
          <PopoverClose asChild>
            <Button size="$2">Salvar</Button>
          </PopoverClose>
        </XStack>
      }
    >
      <PopoverContentWithHooks />
    </PopoverContent>
  </Popover>
)

export const Padrao: Story = {
  name: 'Padrão',
  args: {
    isLoading: false,
    hasError: false,
    isDisabled: false,
  },
  render,
}

export const Carregando: Story = {
  name: 'Carregando',
  args: {
    isLoading: true,
  },
  render,
}

export const Erro: Story = {
  name: 'Estado de Erro',
  args: {
    hasError: true,
  },
  render,
}

export const Disabled: Story = {
  name: 'Desativado',
  args: {
    isDisabled: true,
  },
  render,
}

export const Restrito: Story = {
  name: 'Container Estreito',
  args: {
    isLoading: false,
    hasError: false,
    isDisabled: false,
  },
  decorators: [
    (Story) => (
      <YStack width={350} alignItems="center">
        <Story />
      </YStack>
    ),
  ],
  render,
}

export type PopoverContentWithHooksProps = React.ComponentProps<typeof PopoverContentWithHooks>
