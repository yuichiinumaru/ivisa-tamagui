import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import { TamaguiProvider } from 'tamagui'
import { describe, it, expect, vi } from 'vitest'
import config from '../tamagui.config'
import { IvisaPagination } from './Pagination'

const renderWithProvider = (ui: React.ReactElement) =>
  render(<TamaguiProvider config={config}>{ui}</TamaguiProvider>)

describe('IvisaPagination', () => {
  it('renders pagination snapshot', () => {
    const { asFragment } = renderWithProvider(
      <IvisaPagination currentPage={2} totalPages={7} />
    )

    expect(asFragment()).toMatchSnapshot()
  })

  it('calls onPageChange when navigating forward', () => {
    const handleChange = vi.fn()

    const { getByLabelText } = renderWithProvider(
      <IvisaPagination currentPage={3} totalPages={7} onPageChange={handleChange} />
    )

    fireEvent.click(getByLabelText('Next page'))

    expect(handleChange).toHaveBeenCalledWith(4)
  })
})
