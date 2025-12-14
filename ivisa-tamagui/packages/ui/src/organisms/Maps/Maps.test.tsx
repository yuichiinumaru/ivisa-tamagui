import { render, screen } from '../../test-utils'
import { Maps } from './Maps'
import React from 'react'

jest.mock('../../atoms/Skeleton', () => ({
  Skeleton: () => <div data-testid="skeleton" />,
}))

// Mock react-native-svg
jest.mock('react-native-svg', () => ({
  Svg: ({ children, ...props }: any) => <svg {...props}>{children}</svg>,
  Path: (props: any) => <path {...props} />,
  G: ({ children, ...props }: any) => <g {...props}>{children}</g>,
  Circle: (props: any) => <circle {...props} />,
  Text: ({ children, ...props }: any) => <text {...props}>{children}</text>,
}))

describe('Maps', () => {
  const mockData = {
    type: 'FeatureCollection',
    features: [
        {
            type: 'Feature',
            geometry: {
                type: 'Polygon',
                coordinates: [[[0, 0], [0, 10], [10, 10], [10, 0], [0, 0]]]
            },
            properties: {
                name: 'Area 1',
                value: 100
            }
        }
    ]
  }

  it('renders the map correctly with data', () => {
    const { container } = render(
      <Maps data={mockData as any} type="choropleth" />
    )
    expect(container.querySelector('svg')).toBeInTheDocument()
  })

  it('renders the loading skeleton when isLoading is true', () => {
    render(
      <Maps data={mockData as any} type="choropleth" isLoading />
    )
    expect(screen.getByTestId('skeleton')).toBeInTheDocument()
  })

  it('renders the empty state when no data is provided', () => {
    render(
      <Maps data={null as any} type="choropleth" />
    )
    expect(screen.getByText('Não há dados para exibir.')).toBeInTheDocument()
  })
})
