// @ts-nocheck
import { render, screen } from '../../test-utils'
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from './Card'
import { Button } from '../../atoms/Button'
import { Text } from 'tamagui'

describe('Card', () => {
  it('renders content correctly', () => {
    render(
      <Card>
        <CardHeader>
          <CardTitle>Test Title</CardTitle>
        </CardHeader>
        <CardContent>
          <Text>Test Content</Text>
        </CardContent>
      </Card>
    )
    expect(screen.getByText('Test Title')).toBeInTheDocument()
    expect(screen.getByText('Test Content')).toBeInTheDocument()
  })

  it('has the correct accessibility role', () => {
    render(<Card />)
    expect(screen.getByTestId('card')).toHaveAttribute('role', 'article')
  })

  it('displays a skeleton when isLoading is true', () => {
    render(<Card isLoading />)
    // Assuming Skeleton renders a specific role or testId
    expect(screen.getAllByTestId('skeleton').length).toBeGreaterThan(0)
  })

  it('is disabled when isDisabled is true', () => {
    render(<Card isDisabled />)
    expect(screen.getByTestId('card')).toHaveAttribute('data-disabled', 'true')
  })

  it('shows an error state when hasError is true', () => {
    render(<Card hasError />)
    expect(screen.getByTestId('card')).toHaveAttribute('data-has-error', 'true')
  })

  it('renders correctly with the data prop', () => {
    const cardData = {
      title: 'Data Prop Title',
      description: 'Data Prop Description',
      content: <Text>Data Prop Content</Text>,
    }
    render(<Card data={cardData} />)
    expect(screen.getByText('Data Prop Title')).toBeInTheDocument()
    expect(screen.getByText('Data Prop Description')).toBeInTheDocument()
    expect(screen.getByText('Data Prop Content')).toBeInTheDocument()
  })

  it('renders actions in the footer', () => {
    const actions = (
      <>
        <Button>Action 1</Button>
        <Button>Action 2</Button>
      </>
    )
    render(
      <Card>
        <CardFooter>{actions}</CardFooter>
      </Card>
    )
    expect(screen.getByText('Action 1')).toBeInTheDocument()
    expect(screen.getByText('Action 2')).toBeInTheDocument()
  })
})

