// Removed @ts-nocheck — enabling type checking
import React from 'react'
import { render, screen } from '@testing-library/react'
import { TamaguiProvider, Text } from 'tamagui'
import config from '../../tamagui.config'
import { Breadcrumb } from './Breadcrumb'

const renderWithProvider = (ui: React.ReactElement) =>
  render(<TamaguiProvider config={config}>{ui}</TamaguiProvider>)

describe('Breadcrumb', () => {
  const mockItems = [
    { label: 'Início', href: '/' },
    { label: 'Categoria', href: '/category' },
    { label: 'Página Atual' },
  ]

  it('renders snapshot', () => {
    const { asFragment } = renderWithProvider(<Breadcrumb items={mockItems} />)
    expect(asFragment()).toMatchSnapshot()
  })

  it('marks last item as current page', () => {
    renderWithProvider(<Breadcrumb items={mockItems} />)
    const currentPageItem = screen.getByText('Página Atual')
    expect(currentPageItem).toHaveAttribute('aria-current', 'page')
  })

  it('renders skeletons when isLoading is true', () => {
    renderWithProvider(<Breadcrumb items={mockItems} isLoading />)
    const skeletons = screen.getByTestId('breadcrumb-skeleton')
    expect(skeletons).toBeInTheDocument()
  })

  it('renders the rightSlot content', () => {
    renderWithProvider(<Breadcrumb items={mockItems} rightSlot={<Text>Ajuda</Text>} />)
    expect(screen.getByText('Ajuda')).toBeInTheDocument()
  })
})

