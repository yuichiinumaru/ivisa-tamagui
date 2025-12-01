import { ToggleGroup as TamaguiToggleGroup, styled, GetProps } from 'tamagui'

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

export {
    ToggleGroupFrame as ToggleGroup,
    ToggleGroupItemFrame as ToggleGroupItem,
}

export type ToggleGroupProps = GetProps<typeof ToggleGroupFrame>
export type ToggleGroupItemProps = GetProps<typeof ToggleGroupItemFrame>
