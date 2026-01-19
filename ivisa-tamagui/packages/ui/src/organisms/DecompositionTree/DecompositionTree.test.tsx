import { render, screen } from '../../test-utils'
import { DecompositionTree } from './DecompositionTree'
import React from 'react'

jest.mock('../../atoms/Skeleton', () => ({
  Skeleton: () => <div data-testid="skeleton" />,
}))

// Mock react-native-svg
jest.mock('react-native-svg', () => ({
  Svg: ({ children, ...props }: any) => <svg {...props}>{children}</svg>,
  Path: (props: any) => <path {...props} />,
  G: ({ children, ...props }: any) => <g {...props}>{children}</g>,
  Rect: (props: any) => <rect {...props} />,
  Text: ({ children, ...props }: any) => <text {...props}>{children}</text>,
}))

// Mock @tamagui/lucide-icons specifically for this test to avoid export issues
jest.mock('@tamagui/lucide-icons', () => ({
    AlertTriangle: (props: any) => <div data-testid="alert-triangle" {...props} />,
    GitMerge: (props: any) => <div data-testid="git-merge" {...props} />,
}))

describe('DecompositionTree', () => {
  const mockData = {
    id: 'root',
    label: 'Total',
    value: 100,
    children: [
      { id: 'c1', label: 'Child 1', value: 40 },
      { id: 'c2', label: 'Child 2', value: 60 },
    ],
  }

  it('renders the chart correctly with data', () => {
    const { container } = render(
      <DecompositionTree data={mockData} />
    )
    expect(container.querySelector('svg')).toBeInTheDocument()
  })

  it('renders the loading skeleton when isLoading is true', () => {
    render(
      <DecompositionTree data={mockData} isLoading />
    )
    expect(screen.getByTestId('skeleton')).toBeInTheDocument()
  })

  it('renders the empty state when no data is provided', () => {
    render(
      <DecompositionTree data={null as any} />
    )
    expect(screen.getByText('Não há dados para exibir.')).toBeInTheDocument()
    expect(screen.getByTestId('git-merge')).toBeInTheDocument()
  })
})

