// @ts-nocheck

import React, { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Calendar, CalendarProps } from './Calendar'
import { YStack, Text } from 'tamagui'
import { action } from '@storybook/addon-actions'
import { DatePicker } from '../DatePicker'


const meta: Meta<CalendarProps> = {
  title: 'Moléculas/Calendar',
  component: Calendar,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'Um componente de calendário para selecionar datas, construído com `@rehookify/datepicker` para a lógica e Tamagui para o estilo. Ele suporta a seleção de datas, intervalos de datas mínimas/máximas e destaca o dia atual.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    selectedDate: {
      control: 'date',
      description: 'A data atualmente selecionada.',
    },
    minDate: {
      control: 'date',
      description: 'A data mínima selecionável.',
    },
    maxDate: {
      control: 'date',
      description: 'A data máxima selecionável.',
    },
    onDateChange: {
      action: 'onDateChange',
      description: 'Função de callback chamada quando uma data é selecionada.',
    },
    isLoading: {
      control: 'boolean',
      description: 'Exibe o estado de carregamento do calendário.',
      defaultValue: false,
    },
    isDisabled: {
      control: 'boolean',
      description: 'Desativa a interação com o calendário.',
      defaultValue: false,
    },
    hasError: {
      control: 'boolean',
      description: 'Exibe o estado de erro do calendário.',
      defaultValue: false,
    },
  },
  decorators: [
    (Story) => (
      <YStack width={350} alignItems="center" justifyContent="center" padding="$4">
        <Story />
      </YStack>
    ),
  ],
}

export default meta

type Story = StoryObj<React.ComponentProps<typeof meta>>

// Helper renderer for date props
const renderWithDate = (args: CalendarProps) => {
  const selectedDate = args.selectedDate ? new Date(args.selectedDate) : new Date()
  const minDate = args.minDate ? new Date(args.minDate) : undefined
  const maxDate = args.maxDate ? new Date(args.maxDate) : undefined
  return <Calendar {...args} selectedDate={selectedDate} minDate={minDate} maxDate={maxDate} />
}

export const Playground: Story = {
  name: '🗓️ Playground',
  args: {
    selectedDate: new Date(),
    onDateChange: action('onDateChange'),
    isLoading: false,
    isDisabled: false,
    hasError: false,
  },
  render: renderWithDate,
}

export const NoDateSelected: Story = {
  name: 'Sem Data Selecionada',
  args: {
    selectedDate: undefined,
    onDateChange: action('onDateChange'),
  },
  render: (args) => <Calendar {...args} />,
}

export const WithMinAndMaxDates: Story = {
  name: 'Com Datas Mínima e Máxima',
  args: {
    selectedDate: new Date(),
    minDate: new Date(new Date().setDate(new Date().getDate() - 5)),
    maxDate: new Date(new Date().setDate(new Date().getDate() + 5)),
    onDateChange: action('onDateChange'),
  },
  render: (args) => (
    <YStack alignItems="center" space="$2">
      {renderWithDate(args)}
      <Text fontSize="$2" color="$gray10">
        Apenas 10 dias são selecionáveis.
      </Text>
    </YStack>
  ),
}

export const CarregandoState: Story = {
  name: 'Estado de Carregamento (Loading)',
  args: {
    isLoading: true,
  },
  render: (args) => <Calendar {...args} />,
}

export const DisabledState: Story = {
  name: 'Estado Desativado (Disabled)',
  args: {
    isDisabled: true,
    selectedDate: new Date(),
  },
  render: renderWithDate,
}

export const Erro: Story = {
  name: 'Estado de Erro (Error)',
  args: {
    hasError: true,
    selectedDate: new Date(),
  },
  render: renderWithDate,
}

export const NarrowContainer: Story = {
  name: 'Responsividade (Container Estreito)',
  decorators: [
    (Story) => (
      <YStack width={280} alignItems="center" justifyContent="center" padding="$2">
        <Story />
      </YStack>
    ),
  ],
  args: {
    selectedDate: new Date(),
  },
  render: renderWithDate,
}

export const InsideADatePicker: Story = {
  name: "Integração: Dentro de um DatePicker",
  parameters: {
      docs: {
          description: {
              story: "Esta história mostra como o `Calendar` é usado dentro do componente `DatePicker`, que o envolve em um `Popover`.",
          },
      },
  },
  render: () => {
      const [date, setDate] = useState<Date | undefined>(new Date());
      return <DatePicker date={date} onDateChange={setDate} />;
  },
};
