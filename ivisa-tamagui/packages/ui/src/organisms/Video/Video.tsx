import React, { forwardRef } from 'react'
import { Stack, StackProps, TamaguiElement, Text } from 'tamagui'

// Mock ResizeMode for Web
export const ResizeMode = {
  CONTAIN: 'contain',
  COVER: 'cover',
  STRETCH: 'stretch',
}

// Mock Props to match Native interface loosely
export type VideoProps = StackProps & {
    src?: string
    useNativeControls?: boolean
    resizeMode?: unknown
    source?: unknown
    isLooping?: boolean
    shouldPlay?: boolean
    status?: unknown
    onPlaybackStatusUpdate?: unknown
}

export const Video = forwardRef<TamaguiElement, VideoProps>(({
    src: _src,
    width,
    height = 200,
    ...props
}, ref) => {
    return (
        <Stack
          ref={ref}
          width={width}
          height={height}
          marginHorizontal="$true"
          overflow="hidden"
          backgroundColor="$background"
          borderColor="$borderColor"
          borderWidth={1}
          alignItems="center"
          justifyContent="center"
          {...props}
        >
            <Text>Video Component (Web Mock)</Text>
        </Stack>
    )
})
