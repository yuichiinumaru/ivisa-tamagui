import { render, screen } from '../utils/render'
import { Stack, HStack, VStack } from '../../src'

describe('Stack primitives', () => {
  it('renders vertical stack by default', () => {
    const { container } = render(
      <Stack>
        <div>Item A</div>
        <div>Item B</div>
      </Stack>
    )

    expect(screen.getByText('Item A')).toBeInTheDocument()
    expect(screen.getByText('Item B')).toBeInTheDocument()
    const groups = screen.getAllByRole('group')
    expect(groups[0]).toHaveAttribute('aria-orientation', 'vertical')
    expect(container).toMatchSnapshot()
  })

  it('renders horizontal and vertical shortcuts', () => {
    render(
      <>
        <HStack>
          <div>Horizontal</div>
        </HStack>
        <VStack>
          <div>Vertical</div>
        </VStack>
      </>
    )

    expect(screen.getByText('Horizontal')).toBeInTheDocument()
    expect(screen.getByText('Vertical')).toBeInTheDocument()
    const horizontal = screen.getAllByRole('group').find((element) => element.getAttribute('aria-orientation') === 'horizontal')
    expect(horizontal).toBeDefined()
  })
})
