import { render, screen } from '../test-utils'
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from './Accordion'
import { Button } from '../atoms/Button'
import { Text } from 'tamagui'

describe('Accordion', () => {
  it('renders items and allows interaction', () => {
    render(
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
            <AccordionTrigger>Gatilho</AccordionTrigger>
            <AccordionContent>Conteúdo</AccordionContent>
        </AccordionItem>
      </Accordion>
    )

    const trigger = screen.getByText('Gatilho')
    expect(trigger).toBeInTheDocument()

    const content = screen.queryByText('Conteúdo')
    expect(content).toBeNull()
  })

  it('renders skeleton when isLoading is true', () => {
    render(
      <Accordion type="single" defaultValue='item-1'>
        <AccordionItem value="item-1" isLoading>
          <AccordionTrigger>Gatilho de Carregamento</AccordionTrigger>
          <AccordionContent>Este conteúdo não deve aparecer.</AccordionContent>
        </AccordionItem>
      </Accordion>
    )

    expect(screen.getByText('Gatilho de Carregamento')).toBeInTheDocument()
    expect(screen.queryByText('Este conteúdo não deve aparecer.')).not.toBeInTheDocument()

    const skeletonContainer = screen.getByTestId('skeleton-container')
    expect(skeletonContainer).toBeInTheDocument()
  })

  it('applies error styling when hasError is true', () => {
    render(
      <Accordion type="single">
        <AccordionItem value="item-1" hasError>
          <AccordionTrigger>Gatilho com Erro</AccordionTrigger>
          <AccordionContent>Conteúdo</AccordionContent>
        </AccordionItem>
      </Accordion>
    )

    const item = screen.getByTestId('accordion-item')
    // @ts-ignore
    expect(item).toHaveStyle({ borderColor: 'rgb(229, 72, 77)' })
  })

  it('renders the rightSlot content', () => {
    render(
      <Accordion type="single">
        <AccordionItem value="item-1">
          <AccordionTrigger rightSlot={<Button>Ação</Button>}>
            Gatilho
          </AccordionTrigger>
          <AccordionContent>Conteúdo</AccordionContent>
        </AccordionItem>
      </Accordion>
    )

    expect(screen.getByText('Ação')).toBeInTheDocument()
  })
});
