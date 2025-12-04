import { render, screen } from '../../../vitest.setup'
import { Empty, EmptyTitle, EmptyDescription } from './Empty'

describe('Empty', () => {
  it('renders content', () => {
    render(
      <Empty>
        <EmptyTitle>No Data</EmptyTitle>
        <EmptyDescription>Nothing here.</EmptyDescription>
      </Empty>
    )
    expect(screen.getByText('No Data')).toBeInTheDocument()
    expect(screen.getByText('Nothing here.')).toBeInTheDocument()
  })
})
