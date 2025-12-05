import { Switch as TamaguiSwitch, styled, GetProps } from 'tamagui'

const SwitchFrame = styled(TamaguiSwitch, {
    name: 'Switch',
    borderRadius: '$10', // Full pill
    borderWidth: 0,
    backgroundColor: '$input', // Default unchecked
    minHeight: 24,
    minWidth: 44,

    // Focus styles
    focusStyle: {
        outlineColor: '$ring',
        outlineStyle: 'solid',
        outlineWidth: 2,
        outlineOffset: 2,
    },

    variants: {
        checked: {
            true: {
                backgroundColor: '$primary',
            },
            false: {
                backgroundColor: '$input',
            }
        }
    } as const,

    defaultVariants: {
        checked: false,
    }
})

const SwitchThumb = styled(TamaguiSwitch.Thumb, {
    name: 'SwitchThumb',
    backgroundColor: '$background',
    borderRadius: '$10', // Full circle
    height: 20,
    width: 20,
    animation: 'quick', // Assuming 'quick' animation exists in config, otherwise use 'bouncy' or define one

    // Shadcn uses translate for state, Tamagui handles this internally with the primitive.
    // We just need to ensure the thumb size and color are correct.
})

export const SwitchFrameExport = SwitchFrame
export const SwitchThumbComponent = SwitchThumb // Exporting if needed for composition

// We can also create a composed component to ensure Thumb is always present
import React from 'react'

export const SwitchComponent = React.forwardRef<React.ElementRef<typeof SwitchFrame>, GetProps<typeof SwitchFrame>>((props, ref) => {
    return (
        <SwitchFrame ref={ref} role="switch" {...props}>
            <SwitchThumb />
        </SwitchFrame>
    )
})

SwitchComponent.displayName = 'Switch'

// Export the composed one as default or named
export { SwitchComponent as SwitchWithThumb }
// But usually we want to export the parts for flexibility or the composed one as the main "Switch"
// Let's stick to the parts pattern or a simple wrapper. 
// Shadcn is just <Switch />, so let's export the wrapper as `Switch`.

export const Switch = SwitchComponent
export type SwitchProps = GetProps<typeof SwitchFrame>
