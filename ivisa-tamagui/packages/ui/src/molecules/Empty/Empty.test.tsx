import { render, screen } from '../../test-utils'
import { Empty } from './Empty'
import { Ban } from '@tamagui/lucide-icons'
import { Button } from '../../atoms/Button'

describe('Empty', () => {
  it('renders title and description from props', () => {
    render(<Empty title="No Data" description="Nothing here." />)
    expect(screen.getByText('No Data')).toBeInTheDocument()
    expect(screen.getByText('Nothing here.')).toBeInTheDocument()
  })

  it('renders a custom icon', () => {
    render(<Empty icon={<Ban data-testid="icon" />} />)
    expect(screen.getByTestId('icon')).toBeInTheDocument()
  })

  it('renders the actions slot', () => {
    render(<Empty actions={<Button>Click Me</Button>} />)
    expect(screen.getByText('Click Me')).toBeInTheDocument()
  })

  it('renders the skeleton when isLoading is true', () => {
    render(<Empty isLoading />)
    expect(screen.getByTestId('empty-skeleton')).toBeInTheDocument()
  })

  it('applies error styles when hasError is true', () => {
    render(<Empty title="Error" hasError />)
    expect(screen.getByTestId('empty-icon-frame')).toHaveAttribute('data-has-error', 'true')
  })
})

