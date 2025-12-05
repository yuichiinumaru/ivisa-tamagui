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

  it('renders an image when imageSource is provided', () => {
    render(<Empty imageSource={{ uri: 'https://example.com/image.png' }} />)
    expect(screen.getByRole('img')).toBeInTheDocument()
  })

  it('renders children', () => {
    render(
      <Empty>
        <Button>Click Me</Button>
      </Empty>
    )
    expect(screen.getByText('Click Me')).toBeInTheDocument()
  })
})
