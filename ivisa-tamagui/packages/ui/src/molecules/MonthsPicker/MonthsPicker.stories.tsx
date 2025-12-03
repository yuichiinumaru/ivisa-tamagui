import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import { MonthsPicker } from './MonthsPicker'

const meta: Meta<typeof MonthsPicker> = {
  title: 'Molecules/MonthsPicker',
  component: MonthsPicker,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof MonthsPicker>

export const Default: Story = {
  render: () => {
    const [month, setMonth] = useState<string>('')
    return <MonthsPicker value={month} onValueChange={setMonth} />
  },
}
