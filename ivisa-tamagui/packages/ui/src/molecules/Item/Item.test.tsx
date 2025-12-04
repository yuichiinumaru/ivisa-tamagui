import { render, screen } from '../../../vitest.setup'
import { Item, ItemText, ItemValue } from './Item'

describe('Item', () => {
  it('renders content', () => {
    render(
      <Item>
        <ItemText>Label</ItemText>
        <ItemValue>Value</ItemValue>
      </Item>
    )
    expect(screen.getByText('Label')).toBeInTheDocument()
    expect(screen.getByText('Value')).toBeInTheDocument()
  })
})
