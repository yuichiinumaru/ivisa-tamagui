import { render, screen } from '@testing-library/react'
import { ComboChart } from './ComboChart'
import { AppProviders } from '../../providers/AppProviders'
import { VictoryBar } from 'victory'
import React from 'react'

jest.mock('../../atoms/Skeleton', () => ({
  Skeleton: () => <div data-testid="skeleton" />,
}))

describe('ComboChart', () => {
  it('renders correctly', () => {
    const { container } = render(
      <AppProviders>
        <ComboChart>
          <VictoryBar data={[{ x: 1, y: 1 }]} />
        </ComboChart>
      </AppProviders>
    )
    // Victory renders standard divs/svgs in DOM environment
    expect(container.innerHTML).toContain('VictoryContainer')
  })

  it('renders loading state', () => {
    render(
      <AppProviders>
        <ComboChart isLoading>
          {/* VictoryBar is passed but should not render in loading state */}
          <VictoryBar />
        </ComboChart>
      </AppProviders>
    )
    expect(screen.getByTestId('skeleton')).toBeInTheDocument()
  })
})

