import { render, screen } from '../../../vitest.setup'
import { Carousel, CarouselContent, CarouselItem } from './Carousel'
import { vi, describe, it, expect } from 'vitest'

// Mock embla-carousel-react
vi.mock('embla-carousel-react', () => ({
    default: () => [() => {}, {
        scrollPrev: vi.fn(),
        scrollNext: vi.fn(),
        canScrollPrev: () => true,
        canScrollNext: () => true,
        on: vi.fn(),
        off: vi.fn(),
    }],
}))

describe('Carousel', () => {
  it('renders items', () => {
    render(
      <Carousel>
        <CarouselContent>
            <CarouselItem>Item 1</CarouselItem>
            <CarouselItem>Item 2</CarouselItem>
        </CarouselContent>
      </Carousel>
    )
    expect(screen.getByText('Item 1')).toBeInTheDocument()
  })
})
