// @ts-nocheck
import React, { useState } from 'react'
import { Avatar as TamaguiAvatar, styled, GetProps, Text } from 'tamagui'
import { Skeleton } from './Skeleton'

// --- Funções de Utilitário ---

/**
 * Gera uma cor de fundo consistente baseada no hash de uma string.
 * @param {string} str - A string para gerar a cor.
 * @returns {string} Uma cor HSL.
 */
const stringToColor = (str: string): string => {
  if (!str) return '#ccc' // Cor padrão
  let hash = 0
  for (let i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash)
  }
  const h = hash % 360
  return `hsl(${h}, 70%, 80%)`
}

// --- Componentes do Avatar ---

/**
 * Componente de Frame do Avatar
 * Estilizado a partir do TamaguiAvatar com propriedades padrão.
 */
const AvatarFrame = styled(TamaguiAvatar, {
  name: 'Avatar',
  size: '$10',
  borderWidth: 0,
  overflow: 'hidden',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'relative',
  variants: {
    shape: {
      circle: {
        borderRadius: 100000,
      },
      square: {
        borderRadius: 0,
      },
      rounded: {
        borderRadius: '$4',
      },
    },
  },
  defaultVariants: {
    shape: 'circle',
  },
})

export type AvatarImageProps = GetProps<typeof TamaguiAvatar.Image> & {
  /**
   * O texto alternativo para a imagem, usado para acessibilidade.
   * Mapeia para o atributo `alt` na web.
   */
  accessibilityLabel?: string
}

const AvatarImageComponent = React.forwardRef<HTMLImageElement, AvatarImageProps>(
  ({ accessibilityLabel, src, onLoad, onError, style, ...props }, ref) => {
    const [isLoading, setIsLoading] = useState(true)
    const imageRef = React.useRef<HTMLImageElement>(null)

    React.useEffect(() => {
      if (imageRef.current?.complete) {
        setIsLoading(false)
      }
    }, [src])

    const handleLoad = (e: any) => {
      setIsLoading(false)
      onLoad?.(e)
    }

    const handleError = (e: any) => {
      setIsLoading(false)
      onError?.(e)
    }

    return (
      <TamaguiAvatar.Image
        ref={(node) => {
          // @ts-ignore
          imageRef.current = node
          if (typeof ref === 'function') ref(node)
          else if (ref) (ref as any).current = node
        }}
        src={src}
        {...props}
        accessibilityLabel={accessibilityLabel}
        onLoad={handleLoad}
        onError={handleError}
        data-testid="avatar-image"
        style={{
          ...style,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          opacity: isLoading ? 0 : 1,
        }}
      />
    )
  }
)
AvatarImageComponent.displayName = 'AvatarImage'

const AvatarFallbackView = styled(TamaguiAvatar.Fallback, {
  name: 'AvatarFallback',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  height: '100%',
  borderWidth: 1,
  borderColor: '$borderColor',
  backgroundColor: '$background',
})

const AvatarIndicatorFrame = styled('div', {
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

export type AvatarProps = GetProps<typeof AvatarFrame> & {
  /**
   * O texto a ser usado para acessibilidade geral do componente.
   */
  accessibilityLabel?: string
  src?: string
  fallback?: React.ReactNode
  children?: React.ReactNode
}

export const AvatarFallback = AvatarFallbackView
export const AvatarImage = AvatarImageComponent
export { AvatarFrame }

const AvatarRoot = React.forwardRef<HTMLSpanElement, AvatarProps>(
  ({ src, fallback, accessibilityLabel, children, ...props }, ref) => {
    // If children are provided, render them (Composition mode)
    if (children) {
      return (
        <AvatarFrame ref={ref} {...props} aria-label={accessibilityLabel}>
          {children}
        </AvatarFrame>
      )
    }

    // Otherwise use Facade mode (src + fallback props)
    return (
      <AvatarFrame ref={ref} {...props} aria-label={accessibilityLabel}>
        <AvatarImageComponent src={src} />
        <AvatarFallbackView>
          {typeof fallback === 'string' ? <Text>{fallback}</Text> : fallback}
        </AvatarFallbackView>
      </AvatarFrame>
    )
  }
)

AvatarRoot.displayName = 'Avatar'

const AvatarFallbackText = ({ children }: { children: React.ReactNode }) => {
  const backgroundColor = stringToColor(typeof children === 'string' ? children : '')

  return (
    <AvatarFallbackView style={{ backgroundColor }}>
      <Text>{children}</Text>
    </AvatarFallbackView>
  )
}

export const Avatar = Object.assign(AvatarRoot, {
  Image: AvatarImageComponent,
  Fallback: AvatarFallbackText,
  Indicator: AvatarIndicatorFrame,
})

export type AvatarFallbackProps = React.ComponentProps<typeof AvatarFallback>

export type AvatarFallbackTextProps = React.ComponentProps<typeof AvatarFallbackText>
