
import type React from 'react';
import type { Meta, StoryObj } from '@storybook/react'
import { Label, YStack } from 'tamagui'
import { Button } from '../../atoms/Button'
import { Input } from '../../atoms/Input'
import {

  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from './Dialog'

const meta: Meta<React.ComponentProps<typeof DialogContent>> = {
  title: 'Moléculas/Dialog',
  component: DialogContent,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    isLoading: {
      control: 'boolean',
      description: 'Mostra o estado de carregamento com Skeleton.',
    },
    hasError: {
      control: 'boolean',
      description: 'Aplica um estilo de erro (borda vermelha).',
    },
  },
}

export default meta

type Story = StoryObj<React.ComponentProps<typeof DialogContent>>

const DefaultContent = (
  <>
    <DialogHeader>
      <DialogTitle>Editar perfil</DialogTitle>
      <DialogDescription>
        Faça alterações no seu perfil aqui. Clique em salvar quando terminar.
      </DialogDescription>
    </DialogHeader>
    <YStack gap="$4" py="$4">
      <YStack gap="$2">
        <Label htmlFor="name">Nome</Label>
        <Input id="name" defaultValue="Pedro Duarte" />
      </YStack>
      <YStack gap="$2">
        <Label htmlFor="username">Usuário</Label>
        <Input id="username" defaultValue="@peduarte" />
      </YStack>
    </YStack>
    <DialogFooter>
      <DialogClose asChild>
        <Button>Salvar alterações</Button>
      </DialogClose>
    </DialogFooter>
  </>
)

export const Padrao: Story = {
  args: {
    children: DefaultContent,
  },
  render: (args) => (
    <Dialog modal>
      <DialogTrigger asChild>
        <Button variant="outline">Editar Perfil</Button>
      </DialogTrigger>
      <DialogContent {...args} />
    </Dialog>
  ),
}

export const Alerta: Story = {
  args: {
    children: (
      <>
        <DialogHeader>
          <DialogTitle>Você tem certeza absoluta?</DialogTitle>
          <DialogDescription>
            Essa ação não pode ser desfeita. Isso excluirá permanentemente sua conta e removerá
            seus dados de nossos servidores.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <DialogClose asChild>
            <Button variant="outline">Cancelar</Button>
          </DialogClose>
          <DialogClose asChild>
            <Button variant="destructive">Continuar</Button>
          </DialogClose>
        </DialogFooter>
      </>
    ),
  },
  render: (args) => (
    <Dialog modal>
      <DialogTrigger asChild>
        <Button variant="destructive">Deletar Conta</Button>
      </DialogTrigger>
      <DialogContent {...args} />
    </Dialog>
  ),
}

export const Carregando: Story = {
  ...Padrao,
  args: {
    isLoading: true,
  },
}

export const ComErro: Story = {
  ...Padrao,
  args: {
    ...Padrao.args,
    hasError: true,
  },
}

export const ComTruncamento: Story = {
  args: {
    children: (
      <DialogHeader>
        <DialogTitle>
          Este é um título de diálogo muito, muito longo que definitivamente não caberá em uma única
          linha e deve ser truncado com reticências.
        </DialogTitle>
        <DialogDescription>A descrição permanece a mesma.</DialogDescription>
      </DialogHeader>
    ),
  },
  render: (args) => (
    <YStack width={300}>
      <Dialog modal>
        <DialogTrigger asChild>
          <Button variant="outline">Abrir Diálogo</Button>
        </DialogTrigger>
        <DialogContent {...args} />
      </Dialog>
    </YStack>
  ),
}

export const ComAcoesCustomizadas: Story = {
  args: {
    children: (
      <>
        <DialogHeader>
          <DialogTitle>Ações Customizadas</DialogTitle>
          <DialogDescription>
            Este diálogo usa a propriedade `actions` para renderizar botões personalizados no rodapé.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter
          actions={
            <>
              <Button variant="outline" onPress={() => alert('Ação Secundária')}>
                Ação Secundária
              </Button>
              <Button onPress={() => alert('Ação Primária')}>Ação Primária</Button>
            </>
          }
        />
      </>
    ),
  },
  render: (args) => (
    <Dialog modal>
      <DialogTrigger asChild>
        <Button>Abrir</Button>
      </DialogTrigger>
      <DialogContent {...args} />
    </Dialog>
  ),
}

export type DefaultContentProps = React.ComponentProps<typeof DefaultContent>
