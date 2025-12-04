import { render, screen } from '../../../vitest.setup'
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from './Table'

describe('Table', () => {
  it('renders rows and cells', () => {
    render(
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Header</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>Cell Data</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    )
    expect(screen.getByText('Header')).toBeInTheDocument()
    expect(screen.getByText('Cell Data')).toBeInTheDocument()
  })
})
