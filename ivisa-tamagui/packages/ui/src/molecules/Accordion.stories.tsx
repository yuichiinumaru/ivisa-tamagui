import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from './Accordion'
import { Button } from '../atoms/Button'
import { YStack, H4, Paragraph } from 'tamagui'
import { PenLine } from '@tamagui/lucide-icons'

const meta: Meta<React.ComponentProps<typeof Accordion>> = {
    title: 'Moléculas/Accordion',
    component: Accordion,
    parameters: {
        layout: 'centered',
        docs: {
            description: {
                component: 'Um componente que permite exibir seções de conteúdo de forma colapsável.'
            }
        }
    },
    tags: ['autodocs'],
    argTypes: {
        type: {
            control: {
                type: 'radio',
                options: ['single', 'multiple'],
            },
            description: 'Define se um ou múltiplos itens podem ser abertos simultaneamente.'
        },
        collapsible: {
            control: 'boolean',
            description: 'Permite que todos os itens sejam fechados.'
        }
    }
}

export default meta

type Story = StoryObj<React.ComponentProps<typeof meta>>

const items = [
    {
        value: 'item-1',
        trigger: 'É acessível?',
        content: 'Sim. Ele segue o padrão de design WAI-ARIA.',
    },
    {
        value: 'item-2',
        trigger: 'É estilizado?',
        content: 'Sim. Ele vem com estilos padrão que combinam com a estética dos outros componentes.',
    },
    {
        value: 'item-3',
        trigger: 'É animado?',
        content: 'Sim. É animado por padrão, mas você pode desativar se preferir.',
    },
]

export const Padrao: Story = {
    name: 'Padrão',
    args: {
        type: 'single',
        collapsible: true,
        defaultValue: 'item-1'
    },
    render: (args) => (
        <YStack width={400} gap="$2">
            <Accordion {...args}>
                {items.map((item) => (
                    <AccordionItem key={item.value} value={item.value}>
                        <AccordionTrigger>{item.trigger}</AccordionTrigger>
                        <AccordionContent>{item.content}</AccordionContent>
                    </AccordionItem>
                ))}
            </Accordion>
        </YStack>
    ),
}

export const Carregando: Story = {
    name: 'Carregando',
    args: {
        ...Padrao.args,
    },
    render: (args) => (
        <YStack width={400} gap="$2">
            <Accordion {...args}>
                <AccordionItem value="item-1" isLoading>
                    <AccordionTrigger>Seção de Faturamento</AccordionTrigger>
                    <AccordionContent>Detalhes de faturamento do cliente.</AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                    <AccordionTrigger>Seção de Perfil</AccordionTrigger>
                    <AccordionContent>Detalhes do perfil do usuário.</AccordionContent>
                </AccordionItem>
            </Accordion>
        </YStack>
    ),
}

export const ComErro: Story = {
    name: 'Com Erro',
    args: {
        ...Padrao.args,
    },
    render: (args) => (
        <YStack width={400} gap="$2">
            <Accordion {...args}>
                <AccordionItem value="item-1" hasError>
                    <AccordionTrigger>Falha ao carregar dados</AccordionTrigger>
                    <AccordionContent>Ocorreu um erro ao buscar as informações. Tente novamente.</AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                    <AccordionTrigger>Seção Válida</AccordionTrigger>
                    <AccordionContent>Esta seção foi carregada com sucesso.</AccordionContent>
                </AccordionItem>
            </Accordion>
        </YStack>
    ),
}

export const ComAcoes: Story = {
    name: 'Com Ações',
    args: {
        ...Padrao.args,
        defaultValue: 'item-2'
    },
    render: (args) => (
        <YStack width={400} gap="$2">
            <Accordion {...args}>
                <AccordionItem value="item-1">
                    <AccordionTrigger rightSlot={<Button size="$2" circular icon={<PenLine size="$1" />} />}>
                        Editar Perfil
                    </AccordionTrigger>
                    <AccordionContent>Clique no botão para editar as informações do seu perfil.</AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                    <AccordionTrigger>Visualizar Histórico</AccordionTrigger>
                    <AccordionContent>Veja o histórico de atividades da sua conta.</AccordionContent>
                </AccordionItem>
            </Accordion>
        </YStack>
    ),
}

export const ConteudoComplexo: Story = {
    name: 'Conteúdo Complexo',
    args: {
        ...Padrao.args,
        defaultValue: 'item-1'
    },
    render: (args) => (
        <YStack width={400} gap="$2">
            <Accordion {...args}>
                <AccordionItem value="item-1">
                    <AccordionTrigger>Termos de Serviço</AccordionTrigger>
                    <AccordionContent>
                        <YStack gap="$3" pt="$2">
                            <H4 fontSize="$4">1. Aceitação dos Termos</H4>
                            <Paragraph>Ao acessar ou usar nosso serviço, você concorda em ficar vinculado por estes termos.</Paragraph>
                            <Button size="$3" alignSelf='flex-start'>Li e Aceito</Button>
                        </YStack>
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
        </YStack>
    ),
}

export const ConstraintCheck: Story = {
    name: 'Teste de Constraints',
    args: {
        ...Padrao.args,
    },
    render: (args) => (
        <YStack width={250} gap="$2" p="$4" backgroundColor="$background" borderRadius="$4">
            <Accordion {...args}>
                <AccordionItem value="item-1">
                    <AccordionTrigger>Este é um título muito, muito longo que deve ser truncado para caber no contêiner</AccordionTrigger>
                    <AccordionContent>
                        Este conteúdo também pode ser longo, mas o mais importante é o comportamento do título.
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
        </YStack>
    ),
}

export const Desabilitado: Story = {
    name: 'Desabilitado',
    args: {
        ...Padrao.args,
    },
    render: (args) => (
        <YStack width={400} gap="$2">
            <Accordion {...args}>
                <AccordionItem value="item-1">
                    <AccordionTrigger>Item Ativo</AccordionTrigger>
                    <AccordionContent>Este item pode ser interagido.</AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2" disabled>
                    <AccordionTrigger>Item Desabilitado</AccordionTrigger>
                    <AccordionContent>Este item não pode ser interagido.</AccordionContent>
                </AccordionItem>
            </Accordion>
        </YStack>
    ),
}

