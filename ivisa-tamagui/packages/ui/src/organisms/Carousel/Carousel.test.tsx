import { render, screen } from '../../test-utils'
import { Carousel, CarouselContent, CarouselItem } from './Carousel'

// Mock embla-carousel-react
jest.mock('embla-carousel-react', () => {
    return {
        __esModule: true,
        default: jest.fn(() => [
            () => {}, // emblaRef
            { // emblaApi
                scrollPrev: jest.fn(),
                scrollNext: jest.fn(),
                canScrollPrev: () => true,
                canScrollNext: () => true,
                on: jest.fn(),
                off: jest.fn(),
            }
        ]),
    }
})

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
