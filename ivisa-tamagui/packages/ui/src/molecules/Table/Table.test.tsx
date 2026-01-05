import { render, screen } from '../../test-utils'
import { Table } from './Table'

describe('Table', () => {
  it('renders rows and cells', () => {
    const columns = [
      { header: 'Header', accessor: 'col1' as const }
    ]
    const data = [
      { id: '1', col1: 'Cell Data' }
    ]

    render(<Table columns={columns} data={data} />)

    expect(screen.getByText('Header')).toBeInTheDocument()
    expect(screen.getByText('Cell Data')).toBeInTheDocument()
  })
})
