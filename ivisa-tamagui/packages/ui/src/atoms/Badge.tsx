import { GetProps, styled, Text, View } from 'tamagui'

export const Badge = styled(View, {
    name: 'Badge',
    tag: 'div',
    borderRadius: '$full', // Pill shape default
    borderWidth: 1,
    paddingHorizontal: '$2.5',
    paddingVertical: '$0.5',
    alignItems: 'center',
    justifyContent: 'center',

    // Default text styles for children
    // Note: Tamagui doesn't cascade text styles to non-Text children easily without context,
    // but if we use <Badge><Text>...</Text></Badge>, we might need a specific Text component or just rely on inheritance if configured.
    // For now, we'll assume usage like <Badge><Text>Label</Text></Badge> or just style the container.

    variants: {
        variant: {
            default: {
                backgroundColor: '$primary',
                borderColor: 'transparent',
                // Text color needs to be handled. Usually primary-foreground.
                // In Tamagui we can use `color` prop on the container and hope it cascades or use specific Text theme.
            },
            secondary: {
                backgroundColor: '$secondary',
                borderColor: 'transparent',
            },
            destructive: {
                backgroundColor: '$destructive',
                borderColor: 'transparent',
            },
            outline: {
                backgroundColor: 'transparent',
                borderColor: '$borderColor',
            },
        },
    } as const,

    defaultVariants: {
        variant: 'default',
    },
})

// Helper Text component for Badge if needed, but usually we just use standard Text with size adjustments.
// Let's export a BadgeText for convenience.
export const BadgeText = styled(Text, {
    name: 'BadgeText',
    fontSize: '$1',
    fontWeight: '600',
    fontFamily: '$body',

    variants: {
        variant: {
            default: {
                color: '$primaryForeground',
            },
            secondary: {
                color: '$secondaryForeground',
            },
            destructive: {
                color: '$destructiveForeground',
            },
            outline: {
                color: '$foreground',
            },
        }
    } as const,

    defaultVariants: {
        variant: 'default',
    }
})

export type BadgeProps = GetProps<typeof Badge>
export type BadgeTextProps = GetProps<typeof BadgeText>
