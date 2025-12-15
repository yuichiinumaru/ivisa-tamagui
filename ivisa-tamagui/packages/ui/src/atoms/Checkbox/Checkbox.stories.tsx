import type { Meta, StoryObj } from '@storybook/react'
import { userEvent, within } from '@storybook/test'
import { Checkbox } from './Checkbox'
import { YStack, XStack } from 'tamagui'
import { Spinner } from '../Spinner'

const meta: Meta<typeof Checkbox> = {
  title: 'Átomos/Checkbox',
  component: Checkbox,
  tags: ['autodocs'],
  argTypes: {
    checked: {
      control: { type: 'select' },
      options: [true, false, 'indeterminate'],
      description: 'Define o estado controlado do checkbox.',
    },
    defaultChecked: {
      control: { type: 'boolean' },
      description: 'Define o estado inicial não controlado do checkbox.',
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
    },
    errorMessage: {
      control: { type: 'text' },
      description: 'Mensagem de erro a ser exibida e associada para acessibilidade.'
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
    label: 'Aceitar termos e condições',
    id: 'default-checkbox'
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const checkbox = canvas.getByLabelText('Aceitar termos e condições');
    await userEvent.click(checkbox);
  },
}

export const NaoControlado: Story = {
  name: "Não Controlado (defaultChecked)",
  args: {
    defaultChecked: true,
    label: 'Aceitar termos e condições',
    id: 'default-checked-checkbox'
  },
  parameters: {
    docs: {
      description: {
        story: 'O checkbox começa marcado e seu estado é gerenciado internamente.'
      },
      source: {
        code: `<Checkbox id="default-checked-checkbox" defaultChecked={true} label="Aceitar termos e condições" />`,
      },
    },
  }
}

export const Indeterminado: Story = {
  name: "Indeterminado",
  args: {
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

export const ComErro: Story = {
  name: "Com Erro",
  args: {
    error: true,
    id: 'error-checkbox',
    label: 'Eu aceito os termos',
    errorMessage: 'Você deve aceitar os termos para continuar.'
  },
  parameters: {
    docs: {
      description: {
        story: 'Exibe o checkbox com uma borda de erro e uma mensagem para indicar uma validação falha.'
      },
      source: {
        code: `<Checkbox id="error-checkbox" error={true} label="Eu aceito os termos" errorMessage="Você deve aceitar os termos para continuar." />`,
      },
    },
  }
}

export const Desativado: Story = {
  name: "Desativado",
  args: {
    checked: false,
    disabled: true,
    label: 'Aceitar termos e condições',
    id: 'disabled-checkbox'
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const checkbox = canvas.getByLabelText('Aceitar termos e condições');
    expect(checkbox).toBeDisabled();
  },
  parameters: {
    docs: {
      source: {
        code: `<Checkbox id="default-checkbox" checked={false} label="Aceitar termos e condições" />`,
      },
    },
  }
}

export const Tamanhos: Story = {
  name: "Tamanhos",
  render: (args) => (
    <XStack space="$4" alignItems="center">
      <Checkbox {...args} size="$3" id="size-3" label="Pequeno" checked={args.checked} />
      <Checkbox {...args} size="$4" id="size-4" label="Médio" checked={args.checked} />
      <Checkbox {...args} size="$5" id="size-5" label="Grande" checked={args.checked} />
    </XStack>
  ),
  args: {
    checked: true
  }
}

export const Texto_Longo: Story = {
  name: "Estresse: Texto Longo",
  args: {
    id: 'long-text-checkbox',
    label: 'Eu li, entendi e concordo com os termos de serviço, política de privacidade, e confirmo que sou maior de 18 anos.',
  },
  parameters: {
    docs: {
      source: {
        code: `<Checkbox id="checked-checkbox" checked={true} label="Aceitar termos e condições" />`,
      },
    },
  }
}

export const Container_Pequeno: Story = {
  name: "Estresse: Container Pequeno",
  args: {
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
}

export const Carregando: Story = {
  name: "Estresse: Carregando",
  args: {
    id: 'loading-checkbox',
    checked: false,
    disabled: true,
    label: 'Carregando...'
  },
  render: (args) => (
    <XStack alignItems="center" space="$2">
      <Checkbox {...args} />
      <Spinner />
    </XStack>
  ),
}
