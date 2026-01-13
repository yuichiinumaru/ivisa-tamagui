// @ts-nocheck
import { ResizeMode, Video as ExpoVideo, VideoProps as ExpoVideoProps } from 'expo-av'
import React, { forwardRef } from 'react'
import { Stack, StackProps } from 'tamagui'

export type VideoProps = ExpoVideoProps & StackProps & {
    src?: string
}

export const Video = forwardRef<ExpoVideo, VideoProps>(({
    src,
    width,
    height = 200,
    useNativeControls = true,
    resizeMode = ResizeMode.COVER,
    ...props
}, ref) => {

    const source = src ? { uri: src } : props.source

    return (
        <Stack width={width} height={height} marginHorizontal="$true" overflow="hidden" backgroundColor="$black" {...props}>
            <ExpoVideo
                ref={ref}
                source={source}
                useNativeControls={useNativeControls}
                resizeMode={resizeMode}
                style={{
                    width: '100%',
                    height: '100%',
                }}
            />
        </Stack>
    )
})
