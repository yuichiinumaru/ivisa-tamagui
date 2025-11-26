import { Slider as TamaguiSlider, styled, GetProps } from 'tamagui'

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

const Slider = React.forwardRef<React.ElementRef<typeof SliderFrame>, GetProps<typeof SliderFrame>>((props, ref) => {
    return (
        <SliderFrame ref={ref} {...props}>
            <SliderTrack>
                <SliderRange />
            </SliderTrack>
            <SliderThumb />
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

export type SliderProps = GetProps<typeof SliderFrame>
