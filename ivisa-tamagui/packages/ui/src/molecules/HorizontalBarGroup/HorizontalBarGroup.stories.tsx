
import { MoreVertical } from '@tamagui/lucide-icons'
import type { Meta, StoryObj } from '@storybook/react'
import { YStack } from 'tamagui'
import { Button } from '../../atoms/Button'
import { HorizontalBarGroup } from './HorizontalBarGroup'

const meta: Meta<typeof HorizontalBarGroup> = {
  title: 'Molecules/HorizontalBarGroup',
  component: HorizontalBarGroup,
  tags: ['autodocs'],
  argTypes: {
    title: {
      control: 'text',
      description: 'The main title for the group.',
    },
    subtitle: {
      control: 'text',
      description: 'The subtitle for the group.',
    },
    item: {
      control: 'object',
      description: 'An object containing title and subtitle.',
    },
    actions: {
      control: 'none',
      description: 'ReactNode for actions, typically Buttons.',
    },
    isLoading: {
      control: 'boolean',
      description: 'Shows skeleton loaders when true.',
    },
    hasError: {
      control: 'boolean',
      description: 'Applies error styling.',
    },
    disabled: {
      control: 'boolean',
      description: 'Applies disabled styling.',
    },
  },
  render: (args) => (
    <YStack as="ul" gap="$4" listStyleType="none" padding="$0" margin="$0" width={500}>
      <HorizontalBarGroup {...args} />
    </YStack>
  ),
}

export default meta

type Story = StoryObj<typeof HorizontalBarGroup>

const defaultArgs = {
  title: 'Título Principal do Item',
  subtitle: 'Este é um subtítulo que descreve o item com mais detalhes.',
  actions: (
    <>
      <Button>Ação Primária</Button>
      <Button icon={<MoreVertical />} variant="secondary" />
    </>
  ),
}

export const Default: Story = {
  args: defaultArgs,
  name: 'Padrão',
  parameters: {
    docs: {
      description: {
        story: 'Exibição padrão do componente com título, subtítulo e ações.',
      },
    },
  },
}

export const Loading: Story = {
  args: {
    ...defaultArgs,
    isLoading: true,
  },
  name: 'Carregando',
  parameters: {
    docs: {
      description: {
        story: 'Exibe o componente no estado de carregamento, mostrando esqueletos.',
      },
    },
  },
}

export const WithError: Story = {
  args: {
    ...defaultArgs,
    hasError: true,
  },
  name: 'Com Erro',
  parameters: {
    docs: {
      description: {
        story: 'Exibe o componente com uma borda de erro, indicando uma falha.',
      },
    },
  },
}

export const Disabled: Story = {
  args: {
    ...defaultArgs,
    disabled: true,
  },
  name: 'Desabilitado',
  parameters: {
    docs: {
      description: {
        story: 'Exibe o componente no estado desabilitado.',
      },
    },
  },
}

export const PartialData: Story = {
  args: {
    ...defaultArgs,
    subtitle: undefined,
  },
  name: 'Dados Parciais (Sem Subtítulo)',
  parameters: {
    docs: {
      description: {
        story: 'O componente se adapta quando alguns dados, como o subtítulo, não são fornecidos.',
      },
    },
  },
}

export const WithItemProp: Story = {
  args: {
    item: {
      title: 'Título via Objeto `item`',
      subtitle: 'Subtítulo fornecido através da propriedade `item`.',
    },
    actions: defaultArgs.actions,
  },
  name: 'Com Propriedade `item`',
  parameters: {
    docs: {
      description: {
        story:
          'O componente pode aceitar um único objeto `item` para preencher o título e o subtítulo.',
      },
    },
  },
}

export const Constrained: Story = {
  ...Default,
  name: 'Container Estreito',
  render: (args) => (
    <YStack as="ul" gap="$4" listStyleType="none" padding="$0" margin="$0" width={350}>
      <HorizontalBarGroup {...args} />
    </YStack>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'Demonstra como o texto do título e do subtítulo é cortado com reticências (`...`) quando o contêiner é muito estreito.',
      },
    },
  },
}
