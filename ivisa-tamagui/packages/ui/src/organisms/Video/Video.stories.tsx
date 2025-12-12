import type { Meta, StoryObj } from '@storybook/react'
import { Video } from './Video'

const meta: Meta<typeof Video> = {
  title: 'Organismos/Video',
  component: Video,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
### Uso
Componente para exibição de vídeos. Em ambientes nativos, utiliza \`expo-av\`. Na web, renderiza um mock visual para evitar erros de build e dependências nativas.

### Variantes
- **Padrão**: Exibe um placeholder de vídeo com a URL de origem.
- **Tamanhos**: Suporta propriedades de largura e altura.
`,
      },
    },
  },
  argTypes: {
    src: { control: 'text' },
    useNativeControls: { control: 'boolean' },
    isLooping: { control: 'boolean' },
    shouldPlay: { control: 'boolean' },
  },
}

export default meta

type Story = StoryObj<typeof Video>

export const Padrao: Story = {
  args: {
    src: 'https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4',
    height: 300,
  },
}

export const Pequeno: Story = {
  args: {
    src: 'https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4',
    height: 150,
    width: 250,
  },
}
