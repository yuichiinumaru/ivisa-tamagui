import { Progress as TamaguiProgress, styled, GetProps } from 'tamagui'
import React from 'react'

const ProgressFrame = styled(TamaguiProgress, {
    name: 'Progress',
    height: 16, // h-4
    marginHorizontal: '$true',
    backgroundColor: '$secondary',
    borderRadius: '$10', // rounded-full
    overflow: 'hidden',
})

const ProgressIndicator = styled(TamaguiProgress.Indicator, {
    name: 'ProgressIndicator',
    backgroundColor: '$primary',
    height: '100%',
    width: '100%',
    animation: 'quick', // transition-all
})

// Composite component
const Progress = React.forwardRef<React.ElementRef<typeof ProgressFrame>, GetProps<typeof ProgressFrame> & { value?: number }>((props, ref) => {
    return (
        <ProgressFrame ref={ref} value={props.value} {...props}>
            <ProgressIndicator />
        </ProgressFrame>
    )
})

Progress.displayName = 'Progress'

export {
    Progress,
    ProgressFrame,
    ProgressIndicator,
}

export type ProgressProps = GetProps<typeof ProgressFrame>
