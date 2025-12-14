import { render, screen } from '../../test-utils'
import { SunburstChart } from './SunburstChart'
import React from 'react'

jest.mock('../../atoms/Skeleton', () => ({
  Skeleton: () => <div data-testid="skeleton" />,
}))

// Mock react-native-svg
jest.mock('react-native-svg', () => ({
  Svg: ({ children, ...props }: any) => <svg {...props}>{children}</svg>,
  Path: (props: any) => <path {...props} />,
  G: ({ children, ...props }: any) => <g {...props}>{children}</g>,
  Text: ({ children, ...props }: any) => <text {...props}>{children}</text>,
}))

describe('SunburstChart', () => {
  const mockData = {
    name: 'Root',
    value: 100,
    children: [
      { name: 'A', value: 50 },
      { name: 'B', value: 50 },
    ],
  }

  it('renders the chart correctly with data', () => {
    const { container } = render(
      <SunburstChart data={mockData} />
    )
    expect(container.querySelector('svg')).toBeInTheDocument()
  })

  it('renders the loading skeleton when isLoading is true', () => {
    render(
      <SunburstChart data={mockData} isLoading />
    )
    expect(screen.getByTestId('skeleton')).toBeInTheDocument()
  })

  it('renders the empty state when no data is provided', () => {
    render(
      <SunburstChart data={null as any} />
    )
    expect(screen.getByText('Não há dados para exibir.')).toBeInTheDocument()
  })

  it('renders the error state when an error is provided', () => {
    render(
      <SunburstChart data={mockData} error={new Error('Test Error')} />
    )
    expect(screen.getByText('Ocorreu um erro ao carregar os dados.')).toBeInTheDocument()
  })
})
