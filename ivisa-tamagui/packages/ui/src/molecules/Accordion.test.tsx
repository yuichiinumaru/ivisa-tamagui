import { render, screen } from '../../vitest.setup'
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from './Accordion'

describe('Accordion', () => {
  it('renders items', () => {
    render(
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
            <AccordionTrigger>Trigger</AccordionTrigger>
            <AccordionContent>Content</AccordionContent>
        </AccordionItem>
      </Accordion>
    )
    expect(screen.getByText('Trigger')).toBeInTheDocument()
  })
})
