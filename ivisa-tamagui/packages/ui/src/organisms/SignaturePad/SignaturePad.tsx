// @ts-nocheck
import React, { useRef, useState } from 'react'
import { styled, YStack, GetProps, XStack } from 'tamagui'
import { Svg, Path } from 'react-native-svg'
import { Eraser, Check } from '@tamagui/lucide-icons'
import { Button } from '../../atoms/Button'
import { Text } from 'tamagui'

// Types
export interface Point {
  x: number
  y: number
}

// Styled Components
const SignatureContainer = styled(YStack, {
  name: 'SignaturePad',
  width: '100%',
  height: 200,
  backgroundColor: '$background',
  borderColor: '$borderColor',
  borderWidth: 1,
  borderRadius: '$4',
  overflow: 'hidden',
  position: 'relative',
  cursor: 'crosshair',
})

const Controls = styled(XStack, {
  padding: '$2',
  justifyContent: 'flex-end',
  gap: '$2',
  backgroundColor: '$background',
  borderTopWidth: 1,
  borderColor: '$borderColor',
})

const HelperText = styled(YStack, {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
    pointerEvents: 'none',
    zIndex: 0,
})

export type SignaturePadProps = GetProps<typeof SignatureContainer> & {
  onSave?: (signature: string) => void // Returns SVG path or DataURI
  onClear?: () => void
  strokeColor?: string
  strokeWidth?: number
}

export const SignaturePad = ({
  onSave,
  onClear,
  strokeColor = '#000',
  strokeWidth = 3,
  ...props
}: SignaturePadProps) => {
  const [currentPath, setCurrentPath] = useState<Point[]>([])
  const [paths, setPaths] = useState<string[]>([])
  const isDrawing = useRef(false)

  // Web Mouse/Touch Handlers (since we are in Tamagui/Web context primarily for Storybook)
  // For Native parity, we would need PanResponder, but for now we focus on the logic structure.

  const getPoint = (e: any): Point => {
    // Basic coordinate normalized to the container
    // Note: In a real robust implementation, we need simpler coordinates for RN.
    // Here we rely on standard web events for the "Storybook" verification.
    if (e.nativeEvent) {
         // Fallback for testing environments where offsetX might be missing or different
         const x = e.nativeEvent.offsetX ?? e.nativeEvent.locationX ?? 0
         const y = e.nativeEvent.offsetY ?? e.nativeEvent.locationY ?? 0
         return { x, y }
    }
    return { x: 0, y: 0 }
  }

  // Simplified SVG Path Builder
  const pointsToPath = (points: Point[]) => {
    if (points.length === 0) return ''
    const start = points[0]
    let path = `M ${start.x} ${start.y}`
    for (let i = 1; i < points.length; i++) {
      path += ` L ${points[i].x} ${points[i].y}`
    }
    return path
  }

  const handleStart = (e: any) => {
    isDrawing.current = true
    const point = getPoint(e)
    setCurrentPath([point])
  }

  const handleMove = (e: any) => {
    if (!isDrawing.current) return
    const point = getPoint(e)
    setCurrentPath((prev) => [...prev, point])
  }

  const handleEnd = () => {
    if (!isDrawing.current) return
    isDrawing.current = false
    if (currentPath.length > 0) {
      setPaths((prev) => [...prev, pointsToPath(currentPath)])
      setCurrentPath([])
    }
  }

  const handleClear = () => {
    setPaths([])
    setCurrentPath([])
    if (onClear) onClear()
  }

  const handleSave = () => {
    // Flatten paths to a single SVG string or similar
    const fullSvg = paths.join(' ')
    if (onSave) onSave(fullSvg)
  }

  return (
    <YStack width="100%" gap="$2">
        <SignatureContainer
            {...props}
            // @ts-ignore - Web events
            onMouseDown={handleStart}
            onMouseMove={handleMove}
            onMouseUp={handleEnd}
            onMouseLeave={handleEnd}
        >
            <Svg height="100%" width="100%" viewBox="0 0 500 200" style={{ position: 'absolute', top: 0, left: 0, zIndex: 10 }}>
                {paths.map((d, i) => (
                    <Path
                        key={i}
                        d={d}
                        stroke={strokeColor}
                        strokeWidth={strokeWidth}
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                ))}
                {currentPath.length > 0 && (
                    <Path
                        d={pointsToPath(currentPath)}
                        stroke={strokeColor}
                        strokeWidth={strokeWidth}
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                )}
            </Svg>
            {paths.length === 0 && currentPath.length === 0 && (
                 <HelperText>
                     <Text color="$gray8">Assine aqui</Text>
                 </HelperText>
            )}
        </SignatureContainer>
        <Controls>
            <Button variant="outline" icon={Eraser} onPress={handleClear}>Limpar</Button>
            <Button variant="default" icon={Check} onPress={handleSave}>Salvar</Button>
        </Controls>
    </YStack>
  )
}

