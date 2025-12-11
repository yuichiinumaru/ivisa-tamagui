import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Tabs, TabsList, TabsTrigger, TabsContent } from './Tabs'
import { YStack, Text } from 'tamagui'
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from './Card'
import { Label, Input } from 'tamagui'
import { Button } from '../atoms/Button'

const meta: Meta<typeof Tabs> = {
  title: 'Moléculas/Tabs',
  component: Tabs,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    isLoading: { control: 'boolean' },
    hasError: { control: 'boolean' },
    isDisabled: { control: 'boolean' },
  },
}

export default meta

type Story = StoryObj<typeof meta>

const accountContent = (
  <Card>
    <CardHeader>
      <CardTitle>Conta</CardTitle>
      <CardDescription>
        Faça alterações em sua conta aqui. Clique em salvar quando terminar.
      </CardDescription>
    </CardHeader>
    <CardContent>
      <YStack space="$2">
        <Label htmlFor="name">Nome</Label>
        <Input id="name" defaultValue="Pedro Duarte" />
        <Label htmlFor="username">Nome de usuário</Label>
        <Input id="username" defaultValue="@peduarte" />
      </YStack>
    </CardContent>
    <CardFooter>
      <Button>Salvar alterações</Button>
    </CardFooter>
  </Card>
)

const passwordContent = (
  <Card>
    <CardHeader>
      <CardTitle>Senha</CardTitle>
      <CardDescription>
        Altere sua senha aqui. Após salvar, você será desconectado.
      </CardDescription>
    </CardHeader>
    <CardContent>
      <YStack space="$2">
        <Label htmlFor="current">Senha atual</Label>
        <Input id="current" type="password" />
        <Label htmlFor="new">Nova senha</Label>
        <Input id="new" type="password" />
      </YStack>
    </CardContent>
    <CardFooter>
      <Button>Salvar senha</Button>
    </CardFooter>
  </Card>
)

const tabsData = [
  { value: 'account', label: 'Conta', content: accountContent },
  { value: 'password', label: 'Senha', content: passwordContent },
]

export const Padrao: Story = {
  args: {
    defaultValue: 'account',
    width: 400,
    tabs: tabsData,
  },
}

export const ComAcoes: Story = {
  args: {
    defaultValue: 'account',
    width: 400,
    tabs: tabsData,
    actions: <Button size="$2">Exportar</Button>,
  },
}

export const Desabilitado: Story = {
  args: {
    ...Padrao.args,
    isDisabled: true,
  },
}

export const ComErro: Story = {
  args: {
    ...Padrao.args,
    hasError: true,
  },
}

export const Carregando: Story = {
  args: {
    ...Padrao.args,
    isLoading: true,
  },
}

export const ContainerEstreito: Story = {
  args: {
    defaultValue: 'account',
    width: 250,
    tabs: tabsData.map((tab) => ({
      ...tab,
      label: <Text ellipsize>{tab.label}</Text>,
    })),
  },
}
