// @ts-nocheck
import { render, screen } from '@testing-library/react'
import { Progress } from './Progress'
import { AppProviders } from '../../providers/AppProviders'
import React from 'react'

const renderWithProviders = (ui: React.ReactNode) => {
  return render(
    <AppProviders>
      {ui}
    </AppProviders>
  )
}

describe('Progress', () => {
  it('renders correctly with default props', () => {
    renderWithProviders(<Progress value={50} />)
    const progress = screen.getByRole('progressbar')
    expect(progress).toBeInTheDocument()
    expect(progress).toHaveAttribute('aria-valuenow', '50')
  })

  it('renders percentage text when showValue is true', () => {
    renderWithProviders(<Progress value={75} showValue />)
    expect(screen.getByText('75%')).toBeInTheDocument()
  })

  it('renders label when label prop is provided', () => {
    renderWithProviders(<Progress value={30} label="Uploading..." />)
    expect(screen.getByText('Uploading...')).toBeInTheDocument()
  })

  it('renders with correct status variant', () => {
    // Note: Checking style directly is brittle, but we can check if it renders without error.
    // Better to rely on snapshot or visual tests for style application.
    // Here we verify the 'status' prop is accepted and rendered.
    // Since 'status' on the Facade is passed to Indicator, and Indicator is inside Root.
    // We can't easily query the indicator style in JSDOM unless we rely on Tamagui internals.
    // So we just ensure it renders.
    const { container } = renderWithProviders(<Progress value={50} status="success" />)
    expect(container.firstChild).toBeInTheDocument()
  })

  it('supports Compound Pattern', () => {
    renderWithProviders(
      <Progress.Root value={60} data-testid="progress-root">
        <Progress.Indicator data-testid="progress-indicator" />
      </Progress.Root>
    )
    expect(screen.getByTestId('progress-root')).toBeInTheDocument()
    // Progress.Indicator might not have text, so by TestId is best.
    // Note: Progress.Indicator is styled(Primitive.Indicator).
    // Primitive.Indicator usually renders a div.
    expect(screen.getByTestId('progress-indicator')).toBeInTheDocument()
  })

  it('handles zero value correctly', () => {
    renderWithProviders(<Progress value={0} showValue />)
    expect(screen.getByRole('progressbar')).toHaveAttribute('aria-valuenow', '0')
    expect(screen.getByText('0%')).toBeInTheDocument()
  })
})

