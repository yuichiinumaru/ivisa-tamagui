import { GetProps, styled, Text, XStack, YStack } from 'tamagui'
import React from 'react'

const AlertFrame = styled(XStack, {
    name: 'Alert',
    tag: 'div',
    role: 'alert',
    alignItems: 'flex-start',
    borderRadius: '$md',
    borderWidth: 1,
    padding: '$4',
    gap: '$4',

    variants: {
        variant: {
            default: {
                backgroundColor: '$background',
                borderColor: '$borderColor',
            },
            destructive: {
                borderColor: '$destructive',
                backgroundColor: '$background',
            },
        },
    } as const,

    defaultVariants: {
        variant: 'default',
    },
})

const AlertTitleFrame = styled(Text, {
    name: 'AlertTitle',
    tag: 'h5',
    fontWeight: '500',
    fontFamily: '$heading',
    lineHeight: 1,
    letterSpacing: -0.05,
    marginBottom: '$1',
    color: '$foreground',

    variants: {
        variant: {
            default: {
                color: '$foreground',
            },
            destructive: {
                color: '$destructive',
            },
        }
    } as const,

    defaultVariants: {
        variant: 'default',
    }
})

const AlertDescriptionFrame = styled(Text, {
    name: 'AlertDescription',
    tag: 'div',
    fontSize: '$3',
    lineHeight: '$4',
    fontFamily: '$body',
    color: '$mutedForeground',

    variants: {
        variant: {
            default: {
                color: '$mutedForeground',
            },
            destructive: {
                color: '$destructive',
            },
        }
    } as const,

    defaultVariants: {
        variant: 'default',
    }
})

type AlertFrameProps = GetProps<typeof AlertFrame>

export interface AlertProps extends AlertFrameProps {
    /**
     * The title of the alert.
     */
    title: React.ReactNode,
    /**
     * The description of the alert.
     */
    description?: React.ReactNode,
    /**
     * An optional icon to display on the left.
     */
    leftIcon?: React.ReactNode,
    /**
     * An optional icon to display on the right.
     */
    rightIcon?: React.ReactNode,
}

export const Alert = React.forwardRef<HTMLDivElement, AlertProps>(
    ({ variant, title, description, leftIcon, rightIcon, ...props }, ref) => {
        return (
            <AlertFrame ref={ref} variant={variant} role="alert" {...props}>
                {leftIcon}
                <YStack flex={1} gap="$1.5">
                    <AlertTitleFrame variant={variant}>{title}</AlertTitleFrame>
                    {description && <AlertDescriptionFrame variant={variant}>{description}</AlertDescriptionFrame>}
                </YStack>
                {rightIcon}
            </AlertFrame>
        )
    }
)

Alert.displayName = 'Alert'
