import { RadioGroup as TamaguiRadioGroup, styled, GetProps } from 'tamagui'
import React from 'react'

const RadioGroup = styled(TamaguiRadioGroup, {
    name: 'RadioGroup',
    gap: '$2',
})

const RadioGroupItemFrame = styled(TamaguiRadioGroup.Item, {
    name: 'RadioGroupItem',
    size: '$4', // h-4 w-4 (16px)
    width: 16,
    height: 16,
    borderRadius: '$10', // rounded-full
    borderWidth: 1,
    borderColor: '$primary',
    backgroundColor: '$background',
    alignItems: 'center',
    justifyContent: 'center',

    focusStyle: {
        outlineColor: '$ring',
        outlineStyle: 'solid',
        outlineWidth: 2,
        outlineOffset: 2,
    },

    hoverStyle: {
        borderColor: '$primaryHover',
    }
})

const RadioGroupIndicator = styled(TamaguiRadioGroup.Indicator, {
    name: 'RadioGroupIndicator',
    backgroundColor: '$primary',
    width: 8,
    height: 8,
    borderRadius: '$10',
})

// Composite Item to include Indicator automatically
const RadioGroupItem = React.forwardRef<React.ElementRef<typeof RadioGroupItemFrame>, GetProps<typeof RadioGroupItemFrame>>((props, ref) => {
    return (
        <RadioGroupItemFrame ref={ref} role="radio" {...props}>
            <RadioGroupIndicator />
        </RadioGroupItemFrame>
    )
})

RadioGroupItem.displayName = 'RadioGroupItem'

export {
    RadioGroup,
    RadioGroupItem,
}

export type RadioGroupProps = GetProps<typeof RadioGroup>
export type RadioGroupItemProps = GetProps<typeof RadioGroupItemFrame>
