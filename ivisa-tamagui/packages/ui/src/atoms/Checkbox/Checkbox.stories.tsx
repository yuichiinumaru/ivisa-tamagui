import type { Meta, StoryObj } from '@storybook/react'
import { userEvent, within } from '@storybook/testing-library'
import { Checkbox } from './Checkbox'
import { YStack, XStack } from 'tamagui'
import { Spinner } from '../Spinner'

const meta: Meta<typeof Checkbox> = {
  title: 'Atoms/Checkbox',
  component: Checkbox,
  tags: ['autodocs'],
  argTypes: {
    checked: {
      control: { type: 'select' },
      options: [true, false, 'indeterminate'],
      description: 'Define o estado do checkbox.',
    },
    disabled: {
      control: { type: 'boolean' },
      description: 'Desativa a interação com o checkbox.',
    },
    label: {
      control: { type: 'text' },
      description: 'O texto a ser exibido ao lado do checkbox.',
    },
    size: {
        control: { type: 'select' },
        options: ['$3', '$4', '$5', '$6'],
        description: 'Define o tamanho do checkbox.'
    },
    error: {
        control: { type: 'boolean' },
        description: 'Aplica o estilo de erro ao checkbox.'
    }
  },
  parameters: {
    docs: {
      description: {
        component: 'Um controle que permite ao usuário fazer uma seleção binária.'
      }
    }
  },
  decorators: [
    (Story) => (
      <YStack width={300} space="$2">
        <Story />
      </YStack>
    ),
  ],
}

export default meta

type Story = StoryObj<typeof Checkbox>

export const Padrao: Story = {
  name: "Padrão",
  args: {
    checked: false,
    label: 'Aceitar termos e condições',
    disabled: false,
    id: 'default-checkbox'
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const checkbox = canvas.getByLabelText('Aceitar termos e condições');
    await userEvent.click(checkbox);
  },
  parameters: {
    docs: {
      source: {
        code: `<Checkbox id="default-checkbox" checked={false} label="Aceitar termos e condições" />`,
      },
    },
  }
}

export const Marcado: Story = {
  name: "Marcado",
  args: {
    ...Padrao.args,
    checked: true,
    id: 'checked-checkbox'
  },
  parameters: {
    docs: {
      source: {
        code: `<Checkbox id="checked-checkbox" checked={true} label="Aceitar termos e condições" />`,
      },
    },
  }
}

export const Indeterminado: Story = {
    name: "Indeterminado",
    args: {
      ...Padrao.args,
      checked: 'indeterminate',
      id: 'indeterminate-checkbox',
      label: 'Estado de seleção mista'
    },
    parameters: {
      docs: {
        description: {
          story: 'O estado indeterminado é visual apenas. O checkbox se comporta como desmarcado.'
        },
        source: {
          code: `<Checkbox id="indeterminate-checkbox" checked="indeterminate" label="Estado de seleção mista" />`,
        },
      },
    }
}

export const Erro: Story = {
    name: "Com Erro",
    args: {
      ...Padrao.args,
      error: true,
      id: 'error-checkbox',
      label: 'Eu aceito os termos'
    },
    parameters: {
      docs: {
        description: {
            story: 'Exibe o checkbox com uma borda de erro para indicar uma validação falha.'
        },
        source: {
          code: `<Checkbox id="error-checkbox" error={true} label="Eu aceito os termos" />`,
        },
      },
    }
}

export const Desativado: Story = {
  name: "Desativado",
  args: {
    ...Padrao.args,
    checked: false,
    disabled: true,
    id: 'disabled-checkbox'
  },
  parameters: {
    docs: {
      source: {
        code: `<Checkbox id="disabled-checkbox" disabled={true} label="Aceitar termos e condições" />`,
      },
    },
  }
}

export const Tamanhos: Story = {
    name: "Tamanhos",
    render: (args) => (
        <XStack space="$4" alignItems="center">
            <Checkbox {...args} size="$3" id="size-3" label="Pequeno" />
            <Checkbox {...args} size="$4" id="size-4" label="Médio" />
            <Checkbox {...args} size="$5" id="size-5" label="Grande" />
        </XStack>
    ),
    parameters: {
        docs: {
          description: {
            story: 'O checkbox suporta diferentes tamanhos definidos pelos tokens de tema.'
          },
        },
      }
}

export const Texto_Longo: Story = {
  name: "Estresse: Texto Longo",
  args: {
    ...Padrao.args,
    id: 'long-text-checkbox',
    label: 'Eu li, entendi e concordo com os termos de serviço, política de privacidade, e confirmo que sou maior de 18 anos.',
  },
  parameters: {
    docs: {
      description: {
        story: 'Verifica como o componente lida com textos muito longos, garantindo que a quebra de linha funcione corretamente.'
      },
    },
  }
}

export const Container_Pequeno: Story = {
  name: "Estresse: Container Pequeno",
  args: {
    ...Padrao.args,
    id: 'constrained-checkbox',
    label: 'Label em container pequeno',
  },
  decorators: [
    (Story) => (
      <YStack width={150} padding="$2" backgroundColor="$backgroundHover" borderRadius="$sm">
        <Story />
      </YStack>
    ),
  ],
  parameters: {
    docs: {
      description: {
        story: 'Verifica o comportamento do componente dentro de um container com largura limitada.'
      },
    },
  }
}

export const Carregando: Story = {
  name: "Estresse: Carregando",
  args: {
    ...Padrao.args,
    id: 'loading-checkbox',
    checked: false,
    disabled: true,
  },
  render: (args) => (
    <XStack alignItems="center" space="$2">
      <Checkbox {...args} />
      <Spinner />
    </XStack>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Simula um estado de carregamento onde o checkbox está desativado e um spinner é exibido.'
      },
    },
  }
}
