import type { Meta, StoryObj } from '@storybook/react';
import { Toggle, ToggleProps } from './Toggle';
import { Bold, Italic, Loader } from '@tamagui/lucide-icons';
import { userEvent, within } from '@storybook/test';
import { expect } from '@storybook/test';
import { Stack } from 'tamagui';

const meta: Meta<typeof Toggle> = {
  title: 'Átomos/Toggle',
  component: Toggle,
  tags: ['autodocs'],
  argTypes: {
    pressed: {
      control: { type: 'boolean' },
      description: 'Define o estado pressionado do botão.',
    },
    disabled: {
      control: { type: 'boolean' },
      description: 'Desabilita o botão para interação.',
    },
    'aria-label': {
      control: 'text',
      description: 'Rótulo de acessibilidade para leitores de tela.',
    },
    children: {
      control: 'text',
      description: 'Conteúdo de texto a ser exibido no botão.',
    },
    leftIcon: {
      control: false, // Controlado por histórias específicas
      description: 'Ícone a ser exibido à esquerda do texto.',
    },
    rightIcon: {
      control: false, // Controlado por histórias específicas
      description: 'Ícone a ser exibido à direita do texto.',
    },
    onPressedChange: {
      action: 'onPressedChange',
      description: 'Função chamada quando o estado pressionado muda.',
    },
  },
  parameters: {
    docs: {
      description: {
        component: 'Um botão de alternância com dois estados: ligado e desligado.',
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Toggle>;

export const Padrao: Story = {
  name: 'Padrão',
  args: {
    'aria-label': 'Alternar negrito',
    children: <Bold />,
  },
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement);
    const toggleButton = canvas.getByRole('button', { name: /alternar negrito/i });

    await userEvent.click(toggleButton);
    // @ts-ignore
    await expect(args.onPressedChange).toHaveBeenCalledWith(true);

    await userEvent.click(toggleButton);
    // @ts-ignore
    await expect(args.onPressedChange).toHaveBeenCalledWith(false);
  },
  parameters: {
    docs: {
      description: {
        story: 'Estado padrão do componente Toggle, com um ícone. A função `play` simula cliques para verificar a emissão de eventos.',
      },
      source: {
        code: `<Toggle aria-label="Alternar negrito">
  <Bold />
</Toggle>`,
      },
    },
  },
};

export const Pressionado: Story = {
  args: {
    ...Padrao.args,
    pressed: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'O componente Toggle em seu estado "pressionado" ou "ativo".',
      },
      source: {
        code: `<Toggle aria-label="Alternar negrito" pressed>
  <Bold />
</Toggle>`,
      },
    },
  },
};

export const Desabilitado: Story = {
  args: {
    ...Padrao.args,
    disabled: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'O componente Toggle em seu estado desabilitado, não permitindo interação.',
      },
      source: {
        code: `<Toggle aria-label="Alternar negrito" disabled>
  <Bold />
</Toggle>`,
      },
    },
  },
};

export const ComTexto: Story = {
  args: {
    children: 'Alternar',
    'aria-label': 'Alternar configuração',
  },
  parameters: {
    docs: {
      description: {
        story: 'O componente Toggle também pode conter texto em vez de um ícone.',
      },
      source: {
        code: `<Toggle aria-label="Alternar configuração">Alternar</Toggle>`,
      },
    },
  },
};

export const ComIcones: Story = {
  name: 'Com Ícones (Esquerda/Direita)',
  args: {
    children: 'Itálico',
    leftIcon: <Italic />,
    'aria-label': 'Alternar itálico',
  },
  parameters: {
    docs: {
      description: {
        story: 'Exemplo do Toggle utilizando a propriedade `leftIcon` para compor com texto.',
      },
      source: {
        code: `<Toggle aria-label="Alternar itálico" leftIcon={<Italic />}>Itálico</Toggle>`,
      },
    },
  },
};

// --- Stress Tests ---

export const TextoLong_Stress: Story = {
  name: '[Stress] Texto Longo',
  args: {
    children: 'Este é um texto muito longo para um botão de alternância para verificar o comportamento do layout.',
    'aria-label': 'Botão com texto longo',
  },
  parameters: {
    docs: {
      description: {
        story: 'Teste de estresse com um texto excessivamente longo para observar como o componente lida com o overflow ou quebra de linha.',
      },
    },
  },
};

export const ContainerPequeno_Stress: Story = {
  name: '[Stress] Container Pequeno',
  render: (args: ToggleProps) => (
    <Stack width={100} backgroundColor="$backgroundStrong" padding="$2" borderRadius="$4">
      <Toggle {...args} />
    </Stack>
  ),
  args: {
    ...TextoLong_Stress.args,
  },
  parameters: {
    docs: {
      description: {
        story: 'Teste de estresse com o componente dentro de um container com largura limitada (`100px`) para verificar a responsividade e o comportamento de layout.',
      },
    },
  },
};

export const Carregando_Stress: Story = {
  name: '[Stress] Carregando',
  args: {
    disabled: true,
    children: <Loader />,
    'aria-label': 'Carregando',
  },
  parameters: {
    docs: {
      description: {
        story: 'Demonstração de um estado de "carregando", onde o botão está desabilitado e exibe um ícone de spinner.',
      },
      source: {
        code: `<Toggle aria-label="Carregando" disabled>
  <Loader />
</Toggle>`,
      },
    },
  },
};
