import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Calendar, CalendarProps } from './Calendar';
import { DatePicker } from '../DatePicker';
import { YStack, Text } from 'tamagui';
import { action } from '@storybook/addon-actions';

const meta: Meta<CalendarProps> = {
  title: 'Molecules/Calendar',
  component: Calendar,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A calendar component for selecting dates, built using `@rehookify/datepicker` for logic and Tamagui for styling. It supports date selection, min/max date ranges, and highlights the current day.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    selectedDate: {
      control: 'date',
      description: 'The currently selected date.',
    },
    minDate: {
      control: 'date',
      description: 'The minimum selectable date.',
    },
    maxDate: {
      control: 'date',
      description: 'The maximum selectable date.',
    },
    onDateChange: {
      action: 'onDateChange',
      description: 'Callback function that is called when a date is selected.',
    },
  },
  decorators: [
    (Story) => (
      <YStack width={350} alignItems="center" justifyContent="center" padding="$4">
        <Story />
      </YStack>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof meta>;

// ================================================================================================
// Main Stories
// ================================================================================================

export const Default: Story = {
  name: "Default Calendar",
  args: {
    selectedDate: new Date(),
    onDateChange: action('onDateChange'),
  },
  render: (args) => {
    // Storybook's date control returns a timestamp
    const selectedDate = args.selectedDate ? new Date(args.selectedDate) : undefined;
    return <Calendar {...args} selectedDate={selectedDate} />;
  },
};

export const NoDateSelected: Story = {
  name: "No Date Selected",
  args: {
    // @ts-expect-error - Explicitly setting to undefined
    selectedDate: undefined,
    onDateChange: action('onDateChange'),
  },
  render: (args) => <Calendar {...args} />,
};

export const WithMinAndMaxDates: Story = {
  name: "With Min and Max Dates",
  args: {
    selectedDate: new Date(),
    minDate: new Date(new Date().setDate(new Date().getDate() - 5)),
    maxDate: new Date(new Date().setDate(new Date().getDate() + 5)),
    onDateChange: action('onDateChange'),
  },
  render: (args) => {
    const selectedDate = args.selectedDate ? new Date(args.selectedDate) : undefined;
    const minDate = args.minDate ? new Date(args.minDate) : undefined;
    const maxDate = args.maxDate ? new Date(args.maxDate) : undefined;
    return (
        <YStack alignItems="center" space="$2">
            <Calendar {...args} selectedDate={selectedDate} minDate={minDate} maxDate={maxDate} />
            <Text fontSize="$2" color="$gray10">
                Only 10 days are selectable.
            </Text>
        </YStack>
    )
  },
};

// ================================================================================================
// Integration Story
// ================================================================================================

export const InsideADatePicker: Story = {
    name: "Integration: Inside a DatePicker",
    parameters: {
        docs: {
            description: {
                story: "This story shows how the `Calendar` is used within the `DatePicker` component, which wraps it in a `Popover`.",
            },
        },
    },
    render: () => {
        const [date, setDate] = React.useState<Date | undefined>(new Date());
        return <DatePicker date={date} onDateChange={setDate} />;
    },
};
