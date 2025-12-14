import React from 'react'
import { YStack, styled, GetProps, Image, ImageProps } from 'tamagui'
import { SignaturePad, SignaturePadProps } from '../SignaturePad/SignaturePad'

const AnnotatorContainer = styled(YStack, {
  name: 'ImageAnnotator',
  width: '100%',
  position: 'relative',
  borderWidth: 1,
  borderColor: '$borderColor',
  borderRadius: '$4',
  overflow: 'hidden',
  backgroundColor: '$background',
})

const ImageLayer = styled(YStack, {
  width: '100%',
  height: 400,
  position: 'absolute',
  top: 0,
  left: 0,
  zIndex: 0,
})

const DrawingLayer = styled(YStack, {
  width: '100%',
  height: 400,
  zIndex: 10,
})

export type ImageAnnotatorProps = GetProps<typeof AnnotatorContainer> & {
  imageUrl: string
  imageProps?: Partial<ImageProps>
  onSave?: (data: string) => void
  strokeColor?: string
}

export const ImageAnnotator = ({
  imageUrl,
  imageProps,
  onSave,
  strokeColor = '$red10', // Red by default for annotations
  ...props
}: ImageAnnotatorProps) => {
  return (
    <AnnotatorContainer {...props}>
      <ImageLayer>
        <Image
          source={{ uri: imageUrl }}
          width="100%"
          height="100%"
          resizeMode="contain"
          {...imageProps}
        />
      </ImageLayer>
      <DrawingLayer>
        <SignaturePad
          height="100%"
          backgroundColor="transparent"
          strokeColor={strokeColor}
          onSave={onSave}
          borderWidth={0} // Remove border from pad since container has it
        />
      </DrawingLayer>
    </AnnotatorContainer>
  )
}
