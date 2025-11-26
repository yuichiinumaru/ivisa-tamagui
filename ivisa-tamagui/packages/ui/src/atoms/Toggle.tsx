import { ToggleGroup as TamaguiToggleGroup, styled, GetProps, Button } from 'tamagui'
import React from 'react'

// --- ToggleGroup ---

const ToggleGroupFrame = styled(TamaguiToggleGroup, {
    name: 'ToggleGroup',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '$1',
})

const ToggleGroupItemFrame = styled(TamaguiToggleGroup.Item, {
    name: 'ToggleGroupItem',
    backgroundColor: 'transparent',
    borderRadius: '$4',
    paddingHorizontal: '$3',
    height: 40, // h-10
    alignItems: 'center',
    justifyContent: 'center',

    hoverStyle: {
        backgroundColor: '$muted',
        color: '$mutedForeground',
    },

    focusStyle: {
        outlineColor: '$ring',
        outlineStyle: 'solid',
        outlineWidth: 2,
        outlineOffset: 2,
    },

    // Active/On state
    variants: {
        active: {
            true: {
                backgroundColor: '$accent',
                color: '$accentForeground',
            }
        }
    } as const,
})

// --- Toggle (Standalone) ---

// Standalone Toggle is basically a Button that toggles state.
// Since we don't have a primitive for standalone toggle in Tamagui (except ToggleGroup of 1),
// we can implement it as a Button that accepts `pressed` prop.

const ToggleFrame = styled(Button, {
    name: 'Toggle',
    backgroundColor: 'transparent',
    borderRadius: '$4',
    paddingHorizontal: '$3',
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 0,

    hoverStyle: {
        backgroundColor: '$muted',
        color: '$mutedForeground',
    },

    variants: {
        pressed: {
            true: {
                backgroundColor: '$accent',
                color: '$accentForeground',
            }
        }
    } as const,
})

const Toggle = React.forwardRef<React.ElementRef<typeof ToggleFrame>, GetProps<typeof ToggleFrame> & { pressed?: boolean; onPressedChange?: (pressed: boolean) => void }>((props, ref) => {
    const { pressed, onPressedChange, onPress, ...rest } = props

    return (
        <ToggleFrame
            ref={ref}
            pressed={pressed}
            onPress={(e) => {
                onPress?.(e)
                onPressedChange?.(!pressed)
            }}
            {...rest}
        />
    )
})
Toggle.displayName = 'Toggle'

export {
    ToggleGroupFrame as ToggleGroup,
    ToggleGroupItemFrame as ToggleGroupItem,
    Toggle,
}

export type ToggleGroupProps = GetProps<typeof ToggleGroupFrame>
export type ToggleGroupItemProps = GetProps<typeof ToggleGroupItemFrame>
export type ToggleProps = GetProps<typeof ToggleFrame>
