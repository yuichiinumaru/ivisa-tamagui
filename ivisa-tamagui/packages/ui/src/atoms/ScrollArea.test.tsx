import { render, screen } from '../../vitest.setup'
import { ScrollArea } from './ScrollArea'

describe('ScrollArea', () => {
  it('renders children', () => {
    render(<ScrollArea><div data-testid="content">Content</div></ScrollArea>)
    expect(screen.getByTestId('content')).toBeInTheDocument()
  })
})
