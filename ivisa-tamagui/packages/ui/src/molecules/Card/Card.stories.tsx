import type { Meta, StoryObj } from '@storybook/react'
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from './Card'
import { Button } from '../../atoms/Button'
import { Text, YStack } from 'tamagui'
import { Input } from '../../atoms/Input'
import { Label } from '../../atoms/Label'

const meta: Meta<typeof Card> = {
  title: 'Moléculas/Card',
  component: Card,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['default', 'elevated'],
    },
    isLoading: {
      control: { type: 'boolean' },
    },
    isDisabled: {
      control: { type: 'boolean' },
    },
    hasError: {
      control: { type: 'boolean' },
    },
  },
}

export default meta

type Story = StoryObj<typeof meta>

// Base story using composition
export const Padrao: Story = {
  render: (args) => (
    <Card width={350} {...args}>
      <CardHeader>
        <CardTitle>Criar Projeto</CardTitle>
        <CardDescription>Implante seu novo projeto com um clique.</CardDescription>
      </CardHeader>
      <CardContent>
        <YStack space="$2">
          <Label htmlFor="project-name">Nome</Label>
          <Input id="project-name" placeholder="Nome do seu projeto" />
        </YStack>
      </CardContent>
      <CardFooter>
        <Button variant="outline">Cancelar</Button>
        <Button>Implantar</Button>
      </CardFooter>
    </Card>
  ),
  args: {
    variant: 'default',
    isLoading: false,
    isDisabled: false,
    hasError: false,
  },
}

export const Elevated: Story = {
  ...Default,
  args: {
    ...Default.args,
    variant: 'elevated',
  },
}

export const Carregando: Story = {
  ...Default,
  args: {
    ...Default.args,
    isLoading: true,
  },
}

export const Disabled: Story = {
  ...Default,
  args: {
    ...Default.args,
    isDisabled: true,
  },
}

export const ComErro: Story = {
  ...Default,
  args: {
    ...Default.args,
    hasError: true,
  },
}

export const WithDataObject: Story = {
  render: (args) => <Card width={350} {...args} />,
  args: {
    variant: 'default',
    isLoading: false,
    isDisabled: false,
    hasError: false,
    data: {
      title: 'Produto em Destaque',
      description: 'Disponível em várias cores e tamanhos.',
      content: <Text>Este é o conteúdo principal do nosso produto em destaque.</Text>,
    },
    actions: (
      <>
        <Button variant="outline">Ver Detalhes</Button>
        <Button>Comprar Agora</Button>
      </>
    ),
  },
}

export const PartialData: Story = {
    ...WithDataObject,
    args: {
        ...WithDataObject.args,
        data: {
            title: 'Produto com Dados Parciais',
            // No description
            content: <Text>Este card não possui uma descrição, mas se ajusta corretamente.</Text>
        }
    }
}


export const Restrito: Story = {
    render: (args) => (
        <YStack width={280} ai="center">
             <Card {...args}>
                <CardHeader>
                    <CardTitle>Título do Card Que é Muito Longo e Deveria Quebrar a Linha</CardTitle>
                    <CardDescription>Esta é uma descrição que também é bastante longa para testar como o texto se comporta e quebra a linha dentro de um container estreito.</CardDescription>
                </CardHeader>
                <CardContent>
                    <Text>O conteúdo aqui também pode ser longo.</Text>
                </CardContent>
                <CardFooter>
                    <Button variant="outline">Cancelar</Button>
                    <Button>OK</Button>
                </CardFooter>
            </Card>
        </YStack>
    ),
    args: {
        variant: 'default',
    }
}
