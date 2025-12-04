import { render, screen } from '../../../vitest.setup'
import { InputGroup, InputGroupItem } from './InputGroup'
import { Input } from '../../atoms/Input'
import { Button } from '../../atoms/Button'
import { Search } from '@tamagui/lucide-icons'

describe('InputGroup', () => {
  it('renders input and button together', () => {
    render(
        <InputGroup>
            <InputGroupItem>
                <Input placeholder="Enter text" />
            </InputGroupItem>
            <InputGroupItem>
                <Button>Go</Button>
            </InputGroupItem>
        </InputGroup>
    )
    expect(screen.getByPlaceholderText('Enter text')).toBeInTheDocument()
    expect(screen.getByText('Go')).toBeInTheDocument()
  })

  it('renders input and icon button together', () => {
    render(
        <InputGroup>
            <InputGroupItem>
                <Input placeholder="Search..." />
            </InputGroupItem>
            <InputGroupItem>
                <Button icon={Search} />
            </InputGroupItem>
        </InputGroup>
    )
    expect(screen.getByPlaceholderText('Search...')).toBeInTheDocument()
    expect(screen.getByRole('button')).toBeInTheDocument()
  })
})
