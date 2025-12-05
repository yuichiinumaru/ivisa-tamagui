import type { Meta, StoryObj } from '@storybook/react'
import { DatePicker } from './DatePicker'
import { useState } from 'react'

const meta: Meta<typeof DatePicker> = {
  title: 'molecules/DatePicker',
  component: DatePicker,
  tags: ['autodocs'],
  argTypes: {
    date: {
      control: 'date',
    },
    placeholder: {
      control: 'text',
    },
  },
  decorators: [
    (Story) => (
      <div style={{ minHeight: '500px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Story />
      </div>
    ),
  ],
  parameters: {
    layout: 'fullscreen',
  },
  render: (args) => {
    const [date, setDate] = useState<Date | undefined>(args.date ? new Date(args.date) : undefined);

    const handleDateChange = (newDate: Date | undefined) => {
      setDate(newDate);
      console.log('dateChanged', newDate);
    };

    return <DatePicker {...args} date={date || undefined} onDateChange={handleDateChange} />;
  },
}

export default meta

type Story = StoryObj<typeof DatePicker>

export const Default: Story = {
  args: {
    placeholder: 'Select a date',
  },
}

export const WithInitialDate: Story = {
  args: {
    date: new Date('2025-01-20'),
    placeholder: 'Select a date',
  },
}
