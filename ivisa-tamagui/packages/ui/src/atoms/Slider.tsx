import { Slider as TamaguiSlider, styled, GetProps, Spinner } from 'tamagui'

const SliderFrame = styled(TamaguiSlider, {
    name: 'Slider',
    defaultValue: [0],
    max: 100,
    step: 1,
    orientation: 'horizontal',
    height: 20, // Container height
    justifyContent: 'center',
})

const SliderTrack = styled(TamaguiSlider.Track, {
    name: 'SliderTrack',
    backgroundColor: '$secondary',
    height: 8, // h-2
    borderRadius: '$10', // rounded-full
})

const SliderRange = styled(TamaguiSlider.TrackActive, {
    name: 'SliderRange',
    backgroundColor: '$primary',
    borderRadius: '$10',
})

const SliderThumb = styled(TamaguiSlider.Thumb, {
    name: 'SliderThumb',
    index: 0,
    circular: true,
    size: '$5', // h-5 w-5 (20px)
    backgroundColor: '$background',
    borderWidth: 2,
    borderColor: '$primary',

    focusStyle: {
        outlineColor: '$ring',
        outlineStyle: 'solid',
        outlineWidth: 2,
        outlineOffset: 2,
    },

    hoverStyle: {
        cursor: 'pointer',
    }
})

// Composite component to simplify usage
import React from 'react'

const Slider = React.forwardRef<React.ElementRef<typeof SliderFrame>, SliderProps>(({
    'aria-label': ariaLabel = 'Deslizante',
    disabled = false,
    loading = false,
    ...props
}, ref) => {
    return (
        <SliderFrame ref={ref} {...props} disabled={disabled || loading} aria-label={ariaLabel}>
            <SliderTrack>
                <SliderRange />
            </SliderTrack>
            <SliderThumb aria-label={ariaLabel}>
                {loading && <Spinner size="small" color="$primary" />}
            </SliderThumb>
        </SliderFrame>
    )
})

Slider.displayName = 'Slider'

export {
    Slider,
    SliderFrame, // Exporting parts if needed for custom composition
    SliderTrack,
    SliderRange,
    SliderThumb,
}

/**
 * Props for the Slider component.
 * Extends all props from the Tamagui Slider.
 */
export type SliderProps = GetProps<typeof SliderFrame> & {
    /**
     * Accessible label for the slider.
     * @default 'Deslizante'
     */
    'aria-label'?: string;
    /**
     * When true, the slider will be in a loading state.
     * @default false
     */
    loading?: boolean;
}
