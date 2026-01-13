// @ts-nocheck
import type { Meta, StoryObj } from '@storybook/react'
import { userEvent, within } from '@storybook/test'
import { expect } from '@storybook/test'
import { Slider } from './Slider'
import { YStack } from 'tamagui'

const meta: Meta<typeof Slider> = {
  title: 'Átomos/Slider',
  component: Slider,
  tags: ['autodocs'],
  argTypes: {
    defaultValue: {
      control: { type: 'object' },
      description: 'O valor inicial do slider (ex: [50]).',
    },
    max: {
      control: { type: 'number' },
      description: 'O valor máximo do slider.',
    },
    step: {
      control: { type: 'number' },
      description: 'O incremento ao mover o slider.',
    },
    disabled: {
      control: { type: 'boolean' },
      description: 'Desabilita o slider se verdadeiro.',
    },
    'aria-label': {
        control: { type: 'text' },
        description: 'Rótulo de acessibilidade para o slider.',
    },
    loading: {
        control: { type: 'boolean' },
        description: 'Mostra o estado de carregamento.',
    },
  },
  render: (args) => (
    <YStack width={250} p="$4">
      <Slider {...args} />
    </YStack>
  )
}

export default meta

type Story = StoryObj<typeof Slider>

export const Padrao: Story = {
  name: 'Padrão',
  args: {
    defaultValue: [50],
    max: 100,
    step: 1,
    'aria-label': 'Slider Padrão',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const slider = canvas.getByRole('slider', { name: /slider padrão/i })
    await userEvent.tab()
    expect(slider).toHaveFocus()
  },
}

export const Desabilitado: Story = {
  name: 'Desabilitado',
  args: {
    ...Padrao.args,
    disabled: true,
    'aria-label': 'Slider Desabilitado',
  },
}

export const Carregando: Story = {
    name: 'Carregando',
    args: {
        ...Padrao.args,
        loading: true,
        'aria-label': 'Slider Carregando',
    },
}

export const Contido: Story = {
    name: 'Contido',
    args: {
        ...Padrao.args,
        'aria-label': 'Slider Contido',
    },
    render: (args) => (
        <YStack width={150} p="$4" bc="$secondary" br="$4">
            <Slider {...args} />
        </YStack>
    )
}
