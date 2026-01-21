
// import type React from 'react';
import { Meta, StoryObj } from '@storybook/react'
import { RichText } from './RichText'
import { YStack } from 'tamagui'


const meta: Meta<React.ComponentProps<typeof RichText>> = {
  title: 'Organismos/RichText',
  component: RichText,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
### Uso
Editor de texto rico baseado em Tiptap. Ideal para entradas de texto longo com formatação (negrito, itálico, listas).

### Recursos
- **Formatado**: Suporta HTML como entrada/saída.
- **Editável**: Pode ser usado em modo somente leitura.
- **Integrado**: Estilização consistente com o sistema de design.
`,
      },
    },
  },
  argTypes: {
    value: {
      control: 'text',
      description: 'O conteúdo HTML inicial do editor.',
    },
    editable: {
      control: 'boolean',
      description: 'Define se o conteúdo do editor pode ser modificado.',
    },
    isLoading: {
      control: 'boolean',
      description: 'Mostra um esqueleto de carregamento enquanto o conteúdo está sendo preparado.',
    },
    hasError: {
      control: 'boolean',
      description: 'Aplica um estilo de erro, indicando uma falha na validação ou carregamento.',
    },
    headerActions: {
      control: 'none',
      description: 'Permite injetar componentes customizados, como botões de ação, no cabeçalho.',
    },
  },
}

export default meta

type Story = StoryObj<React.ComponentProps<typeof RichText>>

export const Padrao: Story = {
  name: 'Padrão',
  args: {
    value: `
      <h1>Bem-vindo ao Editor de Rich Text</h1>
      <p>
        Este é um exemplo de como você pode usar o componente <strong>RichText</strong> para criar conteúdo formatado.
        Ele suporta vários níveis de cabeçalho, <em>itálico</em>, e <s>texto riscado</s>.
      </p>
      <p>
        Construído com Tiptap e Tamagui, ele oferece uma experiência de edição fluida e integrada ao nosso design system.
      </p>
    `,
    editable: true,
    isLoading: false,
    hasError: false,
  },
  render: (args) => (
    <YStack width="100%" maxWidth={700}>
      <RichText {...args} />
    </YStack>
  ),
}

export const Carregando: Story = {
  name: 'Carregando',
  args: {
    isLoading: true,
  },
  render: (args) => (
    <YStack width="100%" maxWidth={700}>
      <RichText {...args} />
    </YStack>
  ),
}

export const ComErro: Story = {
  name: 'Com Erro',
  args: {
    ...Padrao.args,
    hasError: true,
    value: '<p>Ocorreu um erro ao salvar o conteúdo. Por favor, tente novamente.</p>',
  },
  render: (args) => (
    <YStack width="100%" maxWidth={700}>
      <RichText {...args} />
    </YStack>
  ),
}

export const ConteudoVazio: Story = {
  name: 'Conteúdo Vazio',
  args: {
    value: '',
    editable: true,
  },
  render: (args) => (
    <YStack width="100%" maxWidth={700}>
      <RichText {...args} />
    </YStack>
  ),
}

export const EstresseDeLayout: Story = {
  name: 'Estresse de Layout',
  args: {
    ...Padrao.args,
  },
  render: (args) => (
    <YStack width="100%" maxWidth={350} borderWidth={1} borderColor="$borderColor" padding="$2" borderRadius="$3">
      <RichText {...args} />
    </YStack>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Este exemplo demonstra como o componente se comporta em um contêiner com largura restrita, testando sua responsividade e a quebra de linha da barra de ferramentas.',
      },
    },
  },
}

