import type { Meta, StoryObj } from '@storybook/react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from './Tabs'
import { Text, YStack, Button } from 'tamagui'

const meta: Meta<typeof Tabs> = {
  title: 'Moléculas/Tabs',
  component: Tabs,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
### Uso
Componente de abas para organizar conteúdo em diferentes visualizações. Suporta renderização controlada por dados (prop \`tabs\`) ou composição (children).

### Variantes
- **Padrão**: Abas funcionais com estados de ativação.
- **Loading**: Exibe esqueleto no conteúdo.
- **Erro**: Indica erro visual na lista de abas.
- **Desabilitado**: Desabilita interações.
`,
      },
    },
  },
  argTypes: {
    defaultValue: { control: 'text' },
    isLoading: { control: 'boolean' },
    isDisabled: { control: 'boolean' },
    hasError: { control: 'boolean' },
  },
}

export default meta

type Story = StoryObj<typeof Tabs>

const tabsData = [
  {
    value: 'tab1',
    label: 'Conta',
    content: (
      <YStack gap="$2">
        <Text fontWeight="bold">Minha Conta</Text>
        <Text>Gerencie suas configurações de conta aqui.</Text>
      </YStack>
    ),
  },
  {
    value: 'tab2',
    label: 'Senha',
    content: (
      <YStack gap="$2">
        <Text fontWeight="bold">Alterar Senha</Text>
        <Text>Atualize sua senha periodicamente.</Text>
      </YStack>
    ),
  },
]

export const Padrao: Story = {
  args: {
    defaultValue: 'tab1',
    tabs: tabsData,
  },
}

export const Composicao: Story = {
  render: (args) => (
    <Tabs {...args}>
      <TabsList>
        <TabsTrigger value="tab1">Geral</TabsTrigger>
        <TabsTrigger value="tab2">Avançado</TabsTrigger>
      </TabsList>
      <TabsContent value="tab1">
        <Text>Configurações Gerais</Text>
      </TabsContent>
      <TabsContent value="tab2">
        <Text>Configurações Avançadas</Text>
      </TabsContent>
    </Tabs>
  ),
  args: {
    defaultValue: 'tab1',
  },
}

export const Carregando: Story = {
  args: {
    ...Padrao.args,
    isLoading: true,
  },
}

export const ComErro: Story = {
  args: {
    ...Padrao.args,
    hasError: true,
  },
}

export const Desabilitado: Story = {
  args: {
    ...Padrao.args,
    isDisabled: true,
  },
}

export const ComAcoes: Story = {
  args: {
    ...Padrao.args,
    actions: <Button size="$2">Salvar</Button>,
  },
}
