import { GetProps, styled, Text, XStack, YStack } from 'tamagui'

const AlertFrame = styled(XStack, {
    name: 'Alert',
    tag: 'div',
    role: 'alert',
    alignItems: 'flex-start',
    borderRadius: '$4',
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
                // We might want a subtle background for destructive, but following shadcn default:
                // border-destructive/50 text-destructive dark:border-destructive [&>svg]:text-destructive
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

// Composite component to handle variant propagation if needed, 
// but for now we can just export the styled components.
// To match shadcn API, we might want to pass variant down, 
// but Tamagui doesn't automatically pass variants to children unless using createStyledContext.
// For simplicity and "Frankenstein" approach, we'll keep it simple.

export const Alert = AlertFrame
export const AlertTitle = AlertTitleFrame
export const AlertDescription = AlertDescriptionFrame

export type AlertProps = GetProps<typeof AlertFrame>
export type AlertTitleProps = GetProps<typeof AlertTitleFrame>
export type AlertDescriptionProps = GetProps<typeof AlertDescriptionFrame>
