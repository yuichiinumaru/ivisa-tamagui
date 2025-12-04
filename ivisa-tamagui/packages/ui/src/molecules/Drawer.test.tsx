import { render } from '../../vitest.setup'
import { Drawer } from './Drawer'

describe('Drawer', () => {
  it.skip('renders', () => {
    // Skipped due to animation issues in test environment (same as Sheet)
    render(<Drawer open />)
  })
})
