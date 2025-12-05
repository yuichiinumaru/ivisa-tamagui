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

export const Separator = SeparatorFrame
export type SeparatorProps = GetProps<typeof SeparatorFrame>
