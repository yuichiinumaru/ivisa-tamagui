import { render, screen } from '../../vitest.setup'
import { TamaguiGallery, componentCatalog } from '../../src'

describe('TamaguiGallery', () => {
  it('lists implemented components', () => {
    render(<TamaguiGallery />)

    const implemented = componentCatalog.filter((c) => c.status === 'implemented')
    implemented.forEach((component) => {
      expect(screen.getByText(component.name)).toBeInTheDocument()
    })
  })
})
