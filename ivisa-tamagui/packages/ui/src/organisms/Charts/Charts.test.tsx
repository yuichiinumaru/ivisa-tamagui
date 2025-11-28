import { render } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { BarChart } from './BarChart'
import { AppProviders } from '../../providers/AppProviders'

describe('BarChart', () => {
  const mockData = [
    { x: 'A', y: 10 },
    { x: 'B', y: 20 },
  ]

  it('renders correctly', () => {
    const { container } = render(
      <AppProviders>
        <BarChart data={mockData} xKey="x" yKey="y" />
      </AppProviders>
    )
    // Victory renders SVG elements
    expect(container.querySelector('svg')).toBeInTheDocument()
  })
})
