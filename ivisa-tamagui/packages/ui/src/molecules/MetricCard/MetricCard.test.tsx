import React from 'react'
import { render, screen } from '@testing-library/react'
import { MetricCard } from './MetricCard'
import { TamaguiProvider } from 'tamagui'
import config from '../../tamagui.config'

jest.mock('@tamagui/lucide-icons', () => ({
  ArrowUp: () => <div data-testid="icon-arrow-up" />,
  ArrowDown: () => <div data-testid="icon-arrow-down" />,
  Minus: () => <div data-testid="icon-minus" />,
}))

describe('MetricCard', () => {
  const mockMetric = {
    title: 'Total Revenue',
    value: '$54,230',
    trend: 'up' as const,
    trendValue: '+20.1%',
  }

  const Wrapper = ({ children }: { children: React.ReactNode }) => (
    <TamaguiProvider config={config}>{children}</TamaguiProvider>
  )

  it('renders the metric title and value', () => {
    render(<MetricCard metric={mockMetric} />, { wrapper: Wrapper })
    expect(screen.getByText('Total Revenue')).toBeTruthy()
    expect(screen.getByText('$54,230')).toBeTruthy()
  })

  it('shows a skeleton when isLoading is true', () => {
    render(<MetricCard metric={mockMetric} isLoading />, { wrapper: Wrapper })
    expect(screen.getByTestId('skeleton')).toBeTruthy()
  })

  it('renders the rightSlot content', () => {
    render(<MetricCard metric={mockMetric} rightSlot={<button>Details</button>} />, { wrapper: Wrapper })
    expect(screen.getByRole('button', { name: 'Details' })).toBeTruthy()
  })

  it('displays the trend information correctly', () => {
    render(<MetricCard metric={mockMetric} />, { wrapper: Wrapper })
    const trendElement = screen.getByText(/20.1%/i)
    expect(trendElement).toBeTruthy()
  })

  it('shows the up arrow icon when trend is up', () => {
    render(<MetricCard metric={mockMetric} />, { wrapper: Wrapper })
    expect(screen.getByTestId('icon-arrow-up')).toBeTruthy()
  })

  it('shows the down arrow icon when trend is down', () => {
    const downMetric = { ...mockMetric, trend: 'down' as const }
    render(<MetricCard metric={downMetric} />, { wrapper: Wrapper })
    expect(screen.getByTestId('icon-arrow-down')).toBeTruthy()
  })

  it('shows the minus icon when trend is neutral', () => {
    const neutralMetric = { ...mockMetric, trend: 'neutral' as const }
    render(<MetricCard metric={neutralMetric} />, { wrapper: Wrapper })
    expect(screen.getByTestId('icon-minus')).toBeTruthy()
  })

  it('sets the correct aria-label for the trend', () => {
    render(<MetricCard metric={mockMetric} />, { wrapper: Wrapper })
    expect(screen.getByLabelText('Aumento de +20.1%')).toBeTruthy()
  })
})
