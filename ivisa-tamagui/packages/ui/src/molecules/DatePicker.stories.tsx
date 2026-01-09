
import type React from 'react';
import { Meta, StoryObj } from '@storybook/react'
import React, { useState } from 'react'
import { YStack } from 'tamagui'

import { DatePicker, DatePickerProps } from './DatePicker'


const meta: Meta<React.ComponentProps<typeof DatePicker>> = {
  title: 'Moléculas/DatePicker',
  component: DatePicker,
  argTypes: {
    variant: {
      control: { type: 'radio' },
      options: ['default', 'filled'],
    },
    size: {
      control: { type: 'radio' },
      options: ['sm', 'default', 'lg'],
    },
    state: {
      control: { type: 'radio' },
      options: ['default', 'error', 'success'],
    },
    loading: {
      control: { type: 'boolean' },
    },
    disabled: {
      control: { type: 'boolean' },
    },
    placeholder: {
      control: { type: 'text' },
    },
  },
  args: {
    variant: 'default',
    size: 'default',
    state: 'default',
    loading: false,
    disabled: false,
    placeholder: 'Selecione uma data',
  },
  decorators: [
    (Story) => (
      <YStack width={300} gap="$4" alignItems="center" style={{ minHeight: '500px' }}>
        <Story />
      </YStack>
    ),
  ],
}

export default meta

type Story = StoryObj<React.ComponentProps<typeof DatePicker>>

const DatePickerWithState = (props: DatePickerProps) => {
  const [date, setDate] = useState<Date | undefined>(new Date())

  return <DatePicker {...props} date={date} onDateChange={setDate} />
}

export const Padrao: Story = {
  render: (props) => <DatePickerWithState {...props} />,
}

export const Filled: Story = {
  render: (props) => <DatePickerWithState {...props} />,
  args: {
    variant: 'filled',
  },
}

export const Small: Story = {
  render: (props) => <DatePickerWithState {...props} />,
  args: {
    size: 'sm',
  },
}

export const Large: Story = {
  render: (props) => <DatePickerWithState {...props} />,
  args: {
    size: 'lg',
  },
}

export const Carregando: Story = {
  render: (props) => <DatePickerWithState {...props} />,
  args: {
    loading: true,
  },
}

export const Disabled: Story = {
  render: (props) => <DatePickerWithState {...props} />,
  args: {
    disabled: true,
  },
}

export const Error: Story = {
  render: (props) => <DatePickerWithState {...props} />,
  args: {
    state: 'error',
  },
}

export const Sucesso: Story = {
  render: (props) => <DatePickerWithState {...props} />,
  args: {
    state: 'success',
  },
}

export const NoDateSelected: Story = {
  render: (props) => {
    const [date, setDate] = useState<Date | undefined>()

    return <DatePicker {...props} date={date} onDateChange={setDate} />
  },
}

export const NarrowContainer: Story = {
  render: (props) => <DatePickerWithState {...props} />,
  decorators: [
    (Story) => (
      <YStack width={200} gap="$4" alignItems="center" style={{ minHeight: '500px' }}>
        <Story />
      </YStack>
    ),
  ],
}

export type DatePickerWithStateProps = React.ComponentProps<typeof DatePickerWithState>
