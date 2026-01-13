// @ts-nocheck
import React, { forwardRef } from 'react'
import { Stack, StackProps, Text } from 'tamagui'

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

export const Video = forwardRef<unknown, VideoProps>(({
    src,
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
            <Text>Video Component (Web Mock){src ? ` - ${src}` : ''}</Text>
        </Stack>
    )
})

export type ResizeModeProps = React.ComponentProps<typeof ResizeMode>
