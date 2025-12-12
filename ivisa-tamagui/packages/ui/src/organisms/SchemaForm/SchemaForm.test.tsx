import { render, screen, fireEvent, waitFor } from '../../test-utils'
import { SchemaForm } from './SchemaForm'
import { FieldSchema } from './types'

const schema: FieldSchema<any>[] = [
  { name: 'name', type: 'text', label: 'Nome', required: true },
]

describe('SchemaForm', () => {
  it('renders fields correctly', () => {
    render(<SchemaForm schema={schema} onSubmit={jest.fn()} />)
    expect(screen.getByLabelText('Nome')).toBeInTheDocument()
  })

  it('handles validation', async () => {
    const handleSubmit = jest.fn()
    render(<SchemaForm schema={schema} onSubmit={handleSubmit} />)

    fireEvent.click(screen.getByRole('button', { name: /enviar/i }))

    await waitFor(() => {
        expect(screen.getByText('Campo obrigatório')).toBeInTheDocument()
    })
    expect(handleSubmit).not.toHaveBeenCalled()
  })
})
