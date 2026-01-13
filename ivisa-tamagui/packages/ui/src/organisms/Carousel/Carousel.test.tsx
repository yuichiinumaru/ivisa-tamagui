// @ts-nocheck
import React from 'react'
import { Text } from 'tamagui'
import { render, screen } from '../../test-utils'
import { Carousel, CarouselContent, CarouselItem } from './Carousel'

// Mock the core embla-carousel-react library
jest.mock('embla-carousel-react', () => {
  const emblaApi = {
    scrollPrev: jest.fn(),
    scrollNext: jest.fn(),
    canScrollPrev: () => true,
    canScrollNext: () => true,
    on: jest.fn(),
    off: jest.fn(),
    reInit: jest.fn(),
    destroy: jest.fn(),
  }

  return {
    __esModule: true,
    default: jest.fn(() => [jest.fn(), emblaApi]),
  }
})

// Mock data for the tests
const MOCK_DATA = [{ id: 1, text: 'Item 1' }, { id: 2, text: 'Item 2' }]

const renderCarousel = (props = {}) => {
  const defaultProps = {
    data: MOCK_DATA,
    renderItem: (item: { id: number; text: string }) => (
      <CarouselItem key={item.id}>
        <Text>{item.text}</Text>
      </CarouselItem>
    ),
  }
  return render(
    <Carousel {...defaultProps} {...props}>
      <CarouselContent renderItem={defaultProps.renderItem} />
    </Carousel>
  )
}

describe('Carousel', () => {
  it('renders items correctly when data is provided', () => {
    renderCarousel()
    expect(screen.getByText('Item 1')).toBeInTheDocument()
    expect(screen.getByText('Item 2')).toBeInTheDocument()
  })

  it('renders the empty state when no data is provided', () => {
    renderCarousel({ data: [] })
    expect(screen.getByText('Nenhum item para exibir.')).toBeInTheDocument()
  })

  it('renders the loading state', () => {
    const { container } = renderCarousel({ isLoading: true })
    // We can check for the presence of Skeleton components
    // This is a bit brittle, but it's a way to test the loading state
    // A better way would be to add a test-id to the skeleton container
    const skeletons = container.querySelectorAll('.is_Skeleton')
    expect(skeletons.length).toBeGreaterThan(0)
  })

  it('renders the error state', () => {
    renderCarousel({ error: 'Failed to load items' })
    expect(screen.getByText('Failed to load items')).toBeInTheDocument()
  })
})
