// @ts-nocheck
import { Separator as TamaguiSeparator, styled, GetProps } from 'tamagui'

const SeparatorFrame = styled(TamaguiSeparator, {
    name: 'Separator',
    backgroundColor: '$border', // bg-border
    fontFamily: '$body',

    variants: {
        orientation: {
            horizontal: {
                height: 1,
                width: '100%',
            },
            vertical: {
                height: '100%',
                width: 1,
            }
        }
    } as const,

    defaultVariants: {
        orientation: 'horizontal',
    }
})

/**
 * A separator component that can be used to divide content vertically or horizontally.
 * It inherits from the Tamagui Separator and is styled with the application's theme.
 */
export const Separator = SeparatorFrame
/**
 * Props for the Separator component.
 */
export type SeparatorProps = GetProps<typeof SeparatorFrame>

