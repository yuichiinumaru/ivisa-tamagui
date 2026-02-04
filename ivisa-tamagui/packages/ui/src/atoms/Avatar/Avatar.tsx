import React, { useState } from 'react'
import {  Avatar as TamaguiAvatar,  styled,  GetProps,  Text,  Stack, TamaguiElement} from 'tamagui'

// --- Utilitários ---
const stringToColor = (str: string): string => {
  if (!str) return '#ccc' 
  let hash = 0
  for (let i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash)
  }
  const h = hash % 360
  return `hsl(${h}, 70%, 80%)`
}

// --- Estilização ---

const AvatarFrame = styled(TamaguiAvatar, {
  name: 'Avatar',
  size: '$10',
  borderWidth: 0,
  overflow: 'hidden',
  position: 'relative',
  variants: {
    shape: {
      circle: { borderRadius: 100000 },
      square: { borderRadius: 0 },
      rounded: { borderRadius: '$4' },
    },
  } as const, // Uso de as const para variantes fixas é aceitável no Tamagui
  defaultVariants: {
    shape: 'circle',
  },
})

const AvatarFallbackView = styled(TamaguiAvatar.Fallback, {
  name: 'AvatarFallback',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  height: '100%',
  backgroundColor: '$background',
})

const AvatarIndicatorFrame = styled(Stack, {
  name: 'AvatarIndicator',
  position: 'absolute',
  bottom: 0,
  right: 0,
  width: '$4',
  height: '$4',
  borderRadius: '$round',
  backgroundColor: '$green10',
  borderWidth: 2,
  borderColor: '$background',
})

// --- Componentes Internos ---

export type AvatarImageProps = GetProps<typeof TamaguiAvatar.Image>

const AvatarImageComponent = React.forwardRef<TamaguiElement, AvatarImageProps>(
  ({ src, onLoad, onError, ...props }, ref) => {    
    const [hasError, setHasError] = useState(false)

    return (
      <TamaguiAvatar.Image
        ref={ref}
        src={src}
        {...props}
        onLoad={onLoad}
        onError={(e) => {
          setHasError(true)
          onError?.(e)
        }}        
        opacity={hasError ? 0 : 1}
      />
    )
  }
)

// --- Componente Principal ---

export type AvatarProps = GetProps<typeof AvatarFrame> & {
  src?: string
  imageUrl?: string 
  fallback?: React.ReactNode
  fallbackText?: string
}

const AvatarRoot = React.forwardRef<TamaguiElement, AvatarProps>(
  ({ src, imageUrl, fallback, fallbackText, children, ...props }, ref) => {
    const finalSrc = src ?? imageUrl
    
    return (
      <AvatarFrame ref={ref} {...props}>
        {children ? (
          children
        ) : (
          <>
            <AvatarImageComponent src={finalSrc} />
            <AvatarFallbackView>
              {fallback || <Text>{fallbackText || '?'}</Text>}
            </AvatarFallbackView>
          </>
        )}
      </AvatarFrame>
    )
  }
)

// --- Sub-componentes ---

const AvatarFallbackText = ({ children }: { children: string }) => {
  const backgroundColor = stringToColor(children)
  return (
    <AvatarFallbackView style={{ backgroundColor }}>
      <Text color="$color">{children.substring(0, 2).toUpperCase()}</Text>
    </AvatarFallbackView>
  )
}

export const Avatar = Object.assign(AvatarRoot, {
  Image: AvatarImageComponent,
  Fallback: AvatarFallbackText,
  Indicator: AvatarIndicatorFrame,
})