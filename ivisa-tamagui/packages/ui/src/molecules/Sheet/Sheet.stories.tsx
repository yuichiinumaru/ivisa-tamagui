import React, { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetFooter,
  SheetTitle,
  SheetDescription,
  SheetProps,
} from './Sheet'
import { Button } from '../../atoms/Button'
import { Input } from '../../atoms/Input'
import { Label } from '../../atoms/Label'
import { YStack, XStack } from 'tamagui'

const meta: Meta<typeof Sheet> = {
  title: 'Moléculas/Sheet',
  component: Sheet,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
### Uso
Sheets são painéis deslizantes (geralmente laterais ou inferiores) usados para edição de detalhes, menus de navegação ou fluxos secundários.

### Variantes
- **Padrão**: Com cabeçalho, conteúdo e rodapé.
- **Loading**: Exibe esqueleto no conteúdo.
- **Erro**: Indica erro visual.
- **Scrollable**: Gerencia conteúdo longo com rolagem interna.
`,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    open: { control: 'boolean' },
    isLoading: { control: 'boolean' },
    hasError: { control: 'boolean' },
  },
}

export default meta

type Story = StoryObj<typeof meta>

const SheetStoryContent = () => (
  <>
    <SheetHeader>
      <SheetTitle>Editar Perfil</SheetTitle>
      <SheetDescription>
        Faça alterações no seu perfil aqui. Clique em salvar quando terminar.
      </SheetDescription>
    </SheetHeader>
    <YStack gap="$4" py="$4">
      <YStack gap="$1">
        <Label htmlFor="name">Nome</Label>
        <Input id="name" defaultValue="Pedro Duarte" />
      </YStack>
      <YStack gap="$1">
        <Label htmlFor="username">Usuário</Label>
        <Input id="username" defaultValue="@peduarte" />
      </YStack>
    </YStack>
  </>
)

const renderSheet = (args: SheetProps) => {
  const [open, setOpen] = useState(args.open ?? false)

  return (
    <>
      <Button variant="outline" onPress={() => setOpen(true)}>
        Abrir Sheet
      </Button>
      <Sheet open={open} onOpenChange={setOpen} {...args}>
        <SheetContent>
          <SheetStoryContent />
          <SheetFooter
            actions={
              <Button onPress={() => setOpen(false)} variant="primary">
                Salvar alterações
              </Button>
            }
          />
        </SheetContent>
      </Sheet>
    </>
  )
}

export const Padrao: Story = {
  args: {
    open: false,
    isLoading: false,
    hasError: false,
  },
  render: renderSheet,
}

export const Carregando: Story = {
  args: {
    ...Padrao.args,
    isLoading: true,
  },
  render: renderSheet,
}

export const ComErro: Story = {
  args: {
    ...Padrao.args,
    hasError: true,
  },
  render: renderSheet,
}

export const ConteudoLongo: Story = {
  args: {
    ...Padrao.args,
  },
  render: (args) => {
    const [open, setOpen] = useState(args.open ?? false)
    return (
      <>
        <Button variant="outline" onPress={() => setOpen(true)}>
          Abrir Sheet com Conteúdo Longo
        </Button>
        <Sheet open={open} onOpenChange={setOpen} {...args}>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>Termos de Serviço</SheetTitle>
              <SheetDescription>
                Por favor, leia os termos e condições cuidadosamente.
              </SheetDescription>
            </SheetHeader>
            <YStack gap="$2" py="$4" height={300} overflow="scroll">
              {[...Array(20)].map((_, i) => (
                <p key={i}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl eget
                  fermentum aliquam, nunc nisl aliquet nunc, eget aliquam nisl nunc eget nisl.
                </p>
              ))}
            </YStack>
            <SheetFooter
              actions={
                <Button onPress={() => setOpen(false)} variant="primary">
                  Aceitar
                </Button>
              }
            />
          </SheetContent>
        </Sheet>
      </>
    )
  },
}

export const AcoesCustomizadas: Story = {
  args: {
    ...Padrao.args,
  },
  render: (args) => {
    const [open, setOpen] = useState(args.open ?? false)
    return (
      <>
        <Button variant="outline" onPress={() => setOpen(true)}>
          Abrir com Ações Customizadas
        </Button>
        <Sheet open={open} onOpenChange={setOpen} {...args}>
          <SheetContent>
            <SheetStoryContent />
            <SheetFooter
              actions={
                <XStack gap="$2">
                  <Button onPress={() => setOpen(false)} variant="secondary">
                    Cancelar
                  </Button>
                  <Button onPress={() => setOpen(false)} variant="primary">
                    Confirmar
                  </Button>
                </XStack>
              }
            />
          </SheetContent>
        </Sheet>
      </>
    )
  },
}
