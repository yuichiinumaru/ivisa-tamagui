import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import { TamaguiProvider } from 'tamagui'
import config from '../../tamagui.config'
import { Pagination } from './Pagination'

const renderWithProvider = (ui: React.ReactElement) =>
  render(<TamaguiProvider config={config}>{ui}</TamaguiProvider>)

describe('Pagination', () => {
  it('renders pagination snapshot', () => {
    const { asFragment } = renderWithProvider(
      <Pagination currentPage={2} totalPages={7} />
    )

    expect(asFragment()).toMatchSnapshot()
  })

  it('calls onPageChange when navigating forward', () => {
    const handleChange = jest.fn()

    const { getByLabelText } = renderWithProvider(
      <Pagination currentPage={3} totalPages={7} onPageChange={handleChange} />
    )

    fireEvent.click(getByLabelText('Next page'))

    expect(handleChange).toHaveBeenCalledWith(4)
  })
})
