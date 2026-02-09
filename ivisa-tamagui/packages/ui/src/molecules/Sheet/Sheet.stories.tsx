import React, { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { YStack, XStack, Text } from 'tamagui'
import { Sheet } from './Sheet'
import { Button } from '../../atoms/Button'
import { Input } from '../../atoms/Input'
import { Label } from '../../atoms/Label'

const meta: Meta<typeof Sheet> = {
  title: 'Moléculas/Sheet',
  component: Sheet,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    open: { control: 'boolean' },
    isLoading: { control: 'boolean' },
    hasError: { control: 'boolean' },
  },
}

export default meta

type Story = StoryObj<typeof Sheet>

/**
 * Componente auxiliar para manter o conteúdo da Story DRY (Don't Repeat Yourself)
 */
const ProfileForm = () => (
  <>
    <Sheet.Header>
      <Sheet.Title>Editar Perfil</Sheet.Title>
      <Sheet.Description>
        Faça alterações no seu perfil aqui. Clique em salvar quando terminar.
      </Sheet.Description>
    </Sheet.Header>
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

/**
 * Função de renderização base que gerencia o estado interno da Story
 */
const SheetTemplate = (args: any) => {
  const [open, setOpen] = useState(args.open ?? false)

  return (
    <>
      <Button onPress={() => setOpen(true)}>Abrir Painel</Button>
      
      <Sheet 
        {...args} 
        open={open} 
        onOpenChange={setOpen}
        snapPoints={[80]} 
        modal
      >
        <Sheet.Overlay />
        <Sheet.Content>
          <ProfileForm />
          <Sheet.Footer>
            <Button onPress={() => setOpen(false)} theme="active">
              Salvar alterações
            </Button>
          </Sheet.Footer>
        </Sheet.Content>
      </Sheet>
    </>
  )
}

export const Padrao: Story = {
  args: {
    isLoading: false,
    hasError: false,
  },
  render: (args) => <SheetTemplate {...args} />,
}

export const Carregando: Story = {
  args: {
    ...Padrao.args,
    isLoading: true,
  },
  render: (args) => <SheetTemplate {...args} />,
}

export const ConteudoLongo: Story = {
  render: (args) => {
    const [open, setOpen] = useState(false)
    return (
      <>
        <Button variant="outline" onPress={() => setOpen(true)}>
          Ver Termos de Uso
        </Button>
        <Sheet {...args} open={open} onOpenChange={setOpen} snapPoints={[90]}>
          <Sheet.Overlay />
          <Sheet.Content>
            <Sheet.Header>
              <Sheet.Title>Termos de Serviço</Sheet.Title>
              <Sheet.Description>Leia atentamente antes de prosseguir.</Sheet.Description>
            </Sheet.Header>
            
            <Sheet.ScrollView>
              <YStack gap="$2" py="$4">
                {Array.from({ length: 15 }).map((_, i) => (
                  <Text key={i} color="$gray11">
                    Este é um exemplo de conteúdo longo para testar a rolagem dentro do componente.
                    O Código Limpo nos ensina que a interface deve ser intuitiva.
                  </Text>
                ))}
              </YStack>
            </Sheet.ScrollView>

            <Sheet.Footer>
              <XStack gap="$2" justifyContent="flex-end">
                <Button onPress={() => setOpen(false)} chromeless>Cancelar</Button>
                <Button onPress={() => setOpen(false)}>Aceitar Termos</Button>
              </XStack>
            </Sheet.Footer>
          </Sheet.Content>
        </Sheet>
      </>
    )
  }
}