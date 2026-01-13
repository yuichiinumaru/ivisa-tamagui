import type { Meta, StoryObj } from '@storybook/react'
import { WaterfallChart } from './WaterfallChart'

const meta: Meta<typeof WaterfallChart> = {
    title: 'Organismos/WaterfallChart',
    component: WaterfallChart,
    tags: ['autodocs'],
    argTypes: {
        data: { control: 'object' },
        xKey: { control: 'text' },
        yKey: { control: 'text' },
        color: { control: 'color' },
        negativeColor: { control: 'color' },
        totalColor: { control: 'color' },
        height: { control: 'number' },
        isLoading: { control: 'boolean' },
        error: { control: 'text' },
    },
}

export default meta
type Story = StoryObj<typeof WaterfallChart>

const mockData = [
    { quarter: 'Q1', earnings: 12000 },
    { quarter: 'Q2', earnings: 19000 },
    { quarter: 'Q3', earnings: -5000 },
    { quarter: 'Q4', earnings: -10000 },
    { quarter: 'Total', earnings: 16000, isTotal: true },
]

export const Default: Story = {
    args: {
        data: mockData,
        xKey: 'quarter',
        yKey: 'earnings',
        height: 300,
    },
}

export const Loading: Story = {
    args: {
        ...Default.args,
        isLoading: true,
    },
}

export const ErrorState: Story = {
    args: {
        ...Default.args,
        error: new Error('Failed to load data'),
    },
}

export const Empty: Story = {
    args: {
        data: [],
        xKey: 'quarter',
        yKey: 'earnings',
    },
}
