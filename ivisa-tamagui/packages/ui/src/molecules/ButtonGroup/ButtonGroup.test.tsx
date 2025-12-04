import { render, screen } from '../../../vitest.setup'
import { ButtonGroup, ButtonGroupItem } from './ButtonGroup'
import { Button } from '../../atoms/Button'

describe('ButtonGroup', () => {
  it('renders its children', () => {
    render(
      <ButtonGroup>
        <ButtonGroupItem>
          <Button>One</Button>
        </ButtonGroupItem>
        <ButtonGroupItem>
          <Button>Two</Button>
        </ButtonGroupItem>
      </ButtonGroup>
    )
    expect(screen.getByText('One')).toBeInTheDocument()
    expect(screen.getByText('Two')).toBeInTheDocument()
  })
})
