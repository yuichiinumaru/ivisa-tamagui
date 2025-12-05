import { Accordion as TamaguiAccordion, styled, GetProps, Paragraph, Square } from 'tamagui'
import React from 'react'
import { ChevronDown } from '@tamagui/lucide-icons'

const Accordion = styled(TamaguiAccordion, {
    name: 'Accordion',
    width: '100%',
    type: 'multiple', // Keeping default but allowing override via props
})

const AccordionItem = styled(TamaguiAccordion.Item, {
    name: 'AccordionItem',
    borderBottomWidth: 1,
    borderColor: '$borderColor',
})

// 💀 Semantic Fix: Header wraps Trigger
const AccordionHeaderFrame = styled(TamaguiAccordion.Header, {
    name: 'AccordionHeader',
    display: 'flex',
})

const AccordionTriggerFrame = styled(TamaguiAccordion.Trigger, {
    name: 'AccordionTrigger',
    group: 'trigger',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: '$4',
    backgroundColor: 'transparent',
    width: '100%', // Ensure trigger takes full width of header
    hoverStyle: {
        backgroundColor: 'transparent',
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
    animation: 'quick',
    enterStyle: { opacity: 0, height: 0 },
    exitStyle: { opacity: 0, height: 0 },
})

const AccordionTrigger = React.forwardRef<React.ElementRef<typeof AccordionTriggerFrame>, GetProps<typeof AccordionTriggerFrame>>(({ children, ...props }, ref) => {
    return (
        <AccordionHeaderFrame>
            <AccordionTriggerFrame ref={ref} {...props}>
                <Paragraph fontWeight="500" fontSize="$3">{children}</Paragraph>
                {/* 💀 Icon Resurrection: Use proper scalable icon with animation */}
                <Square animation="quick" rotate="0deg" $group-trigger-expanded={{ rotate: '180deg' }}>
                    <ChevronDown size={16} />
                </Square>
            </AccordionTriggerFrame>
        </AccordionHeaderFrame>
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
