import React from 'react'
import { GetProps, Stack, styled, Text, Theme } from 'tamagui'

const BadgeCounterFrame = styled(Stack, {
    name: 'BadgeCounter',
    position: 'absolute',
    top: -6,
    right: -6,
    backgroundColor: '$destructive',
    borderRadius: '$full',
    minWidth: 18,
    height: 18,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 4,
    zIndex: 50,
    borderWidth: 1.5,
    borderColor: '$background',

    variants: {
        size: {
            sm: {
                width: 8,
                height: 8,
                minWidth: 0,
                paddingHorizontal: 0,
                borderWidth: 0,
            },
            md: {
                minWidth: 18,
                height: 18,
            }
        },
        variant: {
            dot: {
                width: 10,
                height: 10,
                minWidth: 0,
                padding: 0,
                children: null,
            },
            number: {}
        }
    } as const,

    defaultVariants: {
        size: 'md',
        variant: 'number',
    }
})

const BadgeText = styled(Text, {
    name: 'BadgeText',
    color: 'white',
    fontSize: 10,
    fontWeight: 'bold',
    lineHeight: 10,
})

export interface BadgeCounterProps extends GetProps<typeof BadgeCounterFrame> {
    count?: number
    limit?: number
    showZero?: boolean
}

export const BadgeCounter: React.FC<BadgeCounterProps> = ({
    count = 0,
    limit = 99,
    showZero = false,
    variant,
    ...props
}) => {
    if (count === 0 && !showZero && variant !== 'dot') {
        return null
    }

    const displayCount = count > limit ? `${limit}+` : count

    return (
        <BadgeCounterFrame variant={variant} {...props}>
            {variant !== 'dot' && (
                <BadgeText>{displayCount}</BadgeText>
            )}
        </BadgeCounterFrame>
    )
}
