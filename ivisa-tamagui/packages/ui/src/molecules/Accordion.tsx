import { Accordion as TamaguiAccordion, styled, GetProps, Paragraph, Square } from 'tamagui'
import React from 'react'

const Accordion = styled(TamaguiAccordion, {
    name: 'Accordion',
    width: '100%',
    type: 'multiple', // Default to multiple or single? Shadcn defaults to single usually, but prop controls it.
})

const AccordionItem = styled(TamaguiAccordion.Item, {
    name: 'AccordionItem',
    borderBottomWidth: 1,
    borderColor: '$borderColor',
})

const AccordionTriggerFrame = styled(TamaguiAccordion.Trigger, {
    name: 'AccordionTrigger',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: '$4',
    backgroundColor: 'transparent',
    hoverStyle: {
        backgroundColor: 'transparent', // Shadcn just underlines text usually
    },
    focusStyle: {
        outlineColor: '$ring',
        outlineStyle: 'solid',
        outlineWidth: 2,
    },
})

const AccordionContentFrame = styled(TamaguiAccordion.Content, {
    name: 'AccordionContent',
    overflow: 'hidden',
    paddingBottom: '$4',

    // Animation
    animation: 'medium',
    enterStyle: { opacity: 0, height: 0 },
    exitStyle: { opacity: 0, height: 0 },
})

// We need to add the Chevron icon and text styling to the trigger
const AccordionTrigger = React.forwardRef<React.ElementRef<typeof AccordionTriggerFrame>, GetProps<typeof AccordionTriggerFrame>>(({ children, ...props }, ref) => {
    return (
        <AccordionTriggerFrame ref={ref} {...props}>
            {/* We assume children is the text label */}
            <TamaguiAccordion.Header>
                <Paragraph fontWeight="500" fontSize="$3">{children}</Paragraph>
            </TamaguiAccordion.Header>
            <Square animation="quick" rotate="0deg">
                {/* Chevron Icon placeholder - usually we'd use Lucide or similar */}
                <Paragraph fontSize="$2">▼</Paragraph>
            </Square>
        </AccordionTriggerFrame>
    )
})
AccordionTrigger.displayName = 'AccordionTrigger'

const AccordionContent = React.forwardRef<React.ElementRef<typeof AccordionContentFrame>, GetProps<typeof AccordionContentFrame>>(({ children, ...props }, ref) => {
    return (
        <AccordionContentFrame ref={ref} {...props}>
            <Paragraph fontSize="$3" color="$mutedForeground">{children}</Paragraph>
        </AccordionContentFrame>
    )
})
AccordionContent.displayName = 'AccordionContent'

export {
    Accordion,
    AccordionItem,
    AccordionTrigger,
    AccordionContent,
}

export type AccordionProps = GetProps<typeof Accordion>
export type AccordionItemProps = GetProps<typeof AccordionItem>
export type AccordionTriggerProps = GetProps<typeof AccordionTriggerFrame>
export type AccordionContentProps = GetProps<typeof AccordionContentFrame>
