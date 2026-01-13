// @ts-nocheck
import {
    Accordion as TamaguiAccordion,
    styled,
    GetProps,
    Paragraph,
    Square,
    XStack,
    YStack,
} from 'tamagui'
import React from 'react'
import { ChevronDown } from '@tamagui/lucide-icons'
import { Skeleton } from '../atoms/Skeleton'

const Accordion = styled(TamaguiAccordion, {
    name: 'Accordion',
    width: '100%',
    backgroundColor: '$background',
})

const AccordionItemFrame = styled(TamaguiAccordion.Item, {
    name: 'AccordionItem',
    borderBottomWidth: 1,
    borderColor: '$borderColor',
    variants: {
        hasError: {
            true: {
                borderColor: '$red10',
            },
        },
    },
})

const AccordionHeaderFrame = styled(TamaguiAccordion.Header, {
    name: 'AccordionHeader',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    gap: '$3'
})

const AccordionTriggerFrame = styled(TamaguiAccordion.Trigger, {
    name: 'AccordionTrigger',
    group: 'trigger',
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: '$4',
    backgroundColor: 'transparent',
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
    animation: 'quick',
    opacity: 1,
    minHeight: 0,
    enterStyle: { opacity: 0, height: 0 },
    exitStyle: { opacity: 0, height: 0 },
})

type CustomAccordionItemProps = {
    isLoading?: boolean
    hasError?: boolean
}

export type AccordionItemProps = GetProps<typeof AccordionItemFrame> & CustomAccordionItemProps

const AccordionItem = React.forwardRef<React.ElementRef<typeof AccordionItemFrame>, AccordionItemProps>(({ children, isLoading, hasError, ...props }, ref) => {
    const childrenWithProps = React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            const type = child.type as any
            // Safe check for displayName
            if (type && type.displayName === 'AccordionContent') {
                return React.cloneElement(child as React.ReactElement<AccordionContentProps>, { isLoading })
            }
        }
        return child
    })

    return (
        <AccordionItemFrame ref={ref} hasError={hasError} {...props} data-testid="accordion-item">
            {childrenWithProps}
        </AccordionItemFrame>
    )
})
AccordionItem.displayName = 'AccordionItem'

export type AccordionTriggerProps = GetProps<typeof AccordionTriggerFrame> & { rightSlot?: React.ReactNode }

const AccordionTrigger = React.forwardRef<React.ElementRef<typeof AccordionTriggerFrame>, AccordionTriggerProps>(({ children, rightSlot, ...props }, ref) => {
    return (
        <AccordionHeaderFrame>
            <AccordionTriggerFrame ref={ref} {...props}>
                <Paragraph flex={1} fontWeight="500" fontSize="$3" ellipse>
                    {children}
                </Paragraph>
                <Square animation="quick" rotate="0deg" $group-trigger-expanded={{ rotate: '180deg' }}>
                    <ChevronDown size={16} />
                </Square>
            </AccordionTriggerFrame>
            {rightSlot}
        </AccordionHeaderFrame>
    )
})
AccordionTrigger.displayName = 'AccordionTrigger'

export type AccordionContentProps = GetProps<typeof AccordionContentFrame> & { isLoading?: boolean }

const AccordionContent = React.forwardRef<React.ElementRef<typeof AccordionContentFrame>, AccordionContentProps>(({ children, isLoading, ...props }, ref) => {
    return (
        <AccordionContentFrame ref={ref} {...props}>
            {isLoading ? (
                <YStack gap="$2" py="$2" data-testid="skeleton-container">
                    <Skeleton height="$2" width="90%" />
                    <Skeleton height="$2" width="70%" />
                    <Skeleton height="$2" width="80%" />
                </YStack>
            ) : (
                <Paragraph fontSize="$3" color="$mutedForeground">{children}</Paragraph>
            )}
        </AccordionContentFrame>
    )
})
AccordionContent.displayName = 'AccordionContent'

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent }

export type AccordionProps = GetProps<typeof Accordion>
export type AccordionTriggerFrameProps = GetProps<typeof AccordionTriggerFrame>
export type AccordionContentFrameProps = GetProps<typeof AccordionContentFrame>
