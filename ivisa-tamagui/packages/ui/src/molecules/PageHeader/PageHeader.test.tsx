import { render, screen, fireEvent } from '../../test-utils'
import { PageHeader } from './PageHeader'
import { Button } from '../../atoms/Button'

describe('PageHeader', () => {
    it('renders title and description', () => {
        render(<PageHeader title="Test Title" description="Test Description" />)
        expect(screen.getByText('Test Title')).toBeInTheDocument()
        expect(screen.getByText('Test Description')).toBeInTheDocument()
    })

    it('renders actions correctly', () => {
        render(<PageHeader title="Test Title" actions={<Button>Action</Button>} />)
        expect(screen.getByText('Action')).toBeInTheDocument()
    })
})

