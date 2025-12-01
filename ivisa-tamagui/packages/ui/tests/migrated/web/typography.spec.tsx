import { render, screen } from '../utils/render'
import { Heading, TypographyText, MutedText, LeadText, Blockquote } from '../../../../src/atoms/Typography'

describe('Typography primitives', () => {
  it('renders heading with default level', () => {
    const { asFragment } = render(<Heading>Heading Title</Heading>)

    expect(screen.getByRole('heading', { level: 2, name: /heading title/i })).toBeInTheDocument()
    expect(asFragment()).toMatchSnapshot()
  })

  it('renders text variations', () => {
    const { container } = render(
      <>
        <TypographyText data-testid="body">Body copy</TypographyText>
        <MutedText data-testid="muted">Muted copy</MutedText>
        <LeadText data-testid="lead">Lead copy</LeadText>
        <Blockquote data-testid="quote">Quote</Blockquote>
      </>
    )

    expect(screen.getByTestId('body')).toHaveTextContent('Body copy')
    expect(screen.getByTestId('muted')).toHaveTextContent('Muted copy')
    expect(screen.getByTestId('lead')).toHaveTextContent('Lead copy')
    const quote = screen.getByTestId('quote')
    expect(quote).toHaveTextContent('Quote')
    expect(quote.tagName).toBe('BLOCKQUOTE')
    expect(container).toMatchSnapshot()
  })
})
