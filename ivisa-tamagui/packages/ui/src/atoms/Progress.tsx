import { Progress as TamaguiProgress, styled, GetProps, YStack, Label } from 'tamagui'
import React from 'react'

const ProgressFrame = styled(TamaguiProgress, {
    name: 'Progress',
    height: '$4',
    marginHorizontal: '$true',
    backgroundColor: '$secondary',
    borderRadius: '$10', // rounded-full
    overflow: 'hidden',
    variants: {
        state: {
            indeterminate: {
                animation: 'pulse',
                animationIterationCount: 'infinite',
            }
        },
        size: {
            sm: { height: '$2' },
            md: { height: '$4' },
            lg: { height: '$6' },
        }
    }
})

const ProgressIndicator = styled(TamaguiProgress.Indicator, {
    name: 'ProgressIndicator',
    backgroundColor: '$primary',
    height: '100%',
    width: '100%',
    animation: 'quick', // transition-all
    variants: {
        status: {
            info: { backgroundColor: '$blue9' },
            success: { backgroundColor: '$green9' },
            warning: { backgroundColor: '$yellow9' },
            danger: { backgroundColor: '$red9' },
        }
    }
})

export type ProgressProps = GetProps<typeof ProgressFrame> & {
    /**
     * The current value of the progress bar.
     */
    value?: number;
    /**
     * The label to display next to the progress bar.
     */
    label?: string;
    /**
     * The state of the progress bar.
     * @default "determinate"
     *
     */
    state?: 'determinate' | 'indeterminate';
    /**
     * The size of the progress bar.
     * @default "md"
     */
    size?: 'sm' | 'md' | 'lg';
    /**
     * The status of the progress bar, which determines its color.
     * @default "info"
     */
    status?: 'info' | 'success' | 'warning' | 'danger';
}


// Composite component
const Progress = React.forwardRef<React.ElementRef<typeof ProgressFrame>, ProgressProps>(({ value, label, state = 'determinate', size = 'md', status = 'info', ...props }, ref) => {
    const id = React.useId()
    return (
        <YStack>
            {label && <Label htmlFor={id}>{label}</Label>}
            <ProgressFrame ref={ref} value={value} state={state} size={size} aria-valuenow={value} {...props} id={id}>
                <ProgressIndicator status={status} />
            </ProgressFrame>
        </YStack>
    )
})

Progress.displayName = 'Progress'

export {
    Progress,
    ProgressFrame,
    ProgressIndicator,
}
