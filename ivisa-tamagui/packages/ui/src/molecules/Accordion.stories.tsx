import type { Meta, StoryObj } from '@storybook/react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from './Accordion'
import { Paragraph } from 'tamagui'

const meta: Meta<typeof Accordion> = {
  title: 'molecules/Accordion',
  component: Accordion,
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'select',
      options: ['single', 'multiple'],
      description: 'Controls whether multiple items can be open at once.',
    },
    collapsible: {
      control: 'boolean',
      description: 'When type is "single", allows a single item to be collapsible.',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the accordion is disabled.',
    },
  },
}

export default meta

type Story = StoryObj<typeof Accordion>

export const Default: Story = {
  args: {
    type: 'single',
    collapsible: true,
    children: (
      <>
        <AccordionItem value="item-1">
          <AccordionTrigger>Is it accessible?</AccordionTrigger>
          <AccordionContent>
            Yes. It adheres to the WAI-ARIA design pattern.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>Is it unstyled?</AccordionTrigger>
          <AccordionContent>
            Yes. It's unstyled and comes with useful features.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>Can it be animated?</AccordionTrigger>
          <AccordionContent>
            Yes. You can use the `animation` prop to enable animations.
          </AccordionContent>
        </AccordionItem>
      </>
    ),
  },
}

export const Multiple: Story = {
  args: {
    type: 'multiple',
    children: (
      <>
        <AccordionItem value="item-1">
          <AccordionTrigger>What is Tamagui?</AccordionTrigger>
          <AccordionContent>
            <Paragraph>
              Tamagui is a UI kit for React Native & Web. It's a collection of components, hooks, and utilities that make it easy to build universal apps.
            </Paragraph>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>What is Shadcn/ui?</AccordionTrigger>
          <AccordionContent>
            <Paragraph>
              Shadcn/ui is a collection of re-usable components that you can copy and paste into your apps. Not a component library. It's a collection of re-usable components that you can copy and paste into your apps.
            </Paragraph>
          </AccordionContent>
        </AccordionItem>
      </>
    ),
  },
}

export const InitiallyOpen: Story = {
  args: {
    type: 'single',
    collapsible: true,
    defaultValue: ['item-2'], // This prop controls initially open state for single
    children: (
      <>
        <AccordionItem value="item-1">
          <AccordionTrigger>First Item</AccordionTrigger>
          <AccordionContent>
            <Paragraph>Content for the first item.</Paragraph>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>Second Item (Initially Open)</AccordionTrigger>
          <AccordionContent>
            <Paragraph>Content for the second item, which is open by default.</Paragraph>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>Third Item</AccordionTrigger>
          <AccordionContent>
            <Paragraph>Content for the third item.</Paragraph>
          </AccordionContent>
        </AccordionItem>
      </>
    ),
  },
}
