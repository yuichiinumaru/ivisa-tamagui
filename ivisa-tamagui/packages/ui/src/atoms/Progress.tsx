import { Progress as TamaguiProgress, styled, GetProps, YStack, Label } from 'tamagui'
import React from 'react'

const ProgressFrame = styled(TamaguiProgress, {
    name: 'Progress',
    height: 16, // h-4
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
        }
    }
})

const ProgressIndicator = styled(TamaguiProgress.Indicator, {
    name: 'ProgressIndicator',
    backgroundColor: '$primary',
    height: '100%',
    width: '100%',
    animation: 'quick', // transition-all
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
}


// Composite component
const Progress = React.forwardRef<React.ElementRef<typeof ProgressFrame>, ProgressProps>(({ value, label, state = 'determinate', ...props }, ref) => {
    const id = React.useId()
    return (
        <YStack>
            {label && <Label htmlFor={id}>{label}</Label>}
            <ProgressFrame ref={ref} value={value} state={state} aria-valuenow={value} {...props} id={id}>
                <ProgressIndicator />
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
