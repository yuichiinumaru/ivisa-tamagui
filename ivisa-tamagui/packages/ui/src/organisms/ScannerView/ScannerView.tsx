// @ts-nocheck
import React from 'react'
import { YStack, XStack, styled, GetProps, Text } from 'tamagui'
import { Camera, Maximize, X } from '@tamagui/lucide-icons'
import { Button } from '../../atoms/Button'

const ScannerFrame = styled(YStack, {
  name: 'ScannerView',
  position: 'relative',
  width: '100%',
  height: 500,
  backgroundColor: '#000',
  borderRadius: '$4',
  overflow: 'hidden',
})

const CameraPlaceholder = styled(YStack, {
  flex: 1,
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '#1a1a1a',
})

const Overlay = styled(YStack, {
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  alignItems: 'center',
  justifyContent: 'center',
  zIndex: 10,
})

const ScanFrame = styled(YStack, {
  width: 250,
  height: 250,
  borderWidth: 2,
  borderColor: '#fff',
  borderRadius: '$4',
  position: 'relative',
  overflow: 'hidden',
  alignItems: 'center',
  justifyContent: 'center',
})

const ScanLine = styled(YStack, {
  width: '100%',
  height: 2,
  backgroundColor: '$green10',
  position: 'absolute',
  top: '50%',
})

const Controls = styled(XStack, {
  position: 'absolute',
  bottom: '$4',
  left: 0,
  right: 0,
  justifyContent: 'center',
  gap: '$4',
  zIndex: 20,
})

const StatusText = styled(Text, {
  color: '#fff',
  marginTop: '$4',
  fontSize: '$3',
  fontWeight: '600',
  textAlign: 'center',
  backgroundColor: 'rgba(0,0,0,0.5)',
  padding: '$2',
  borderRadius: '$2',
})

export type ScannerViewProps = GetProps<typeof ScannerFrame> & {
  isActive?: boolean
  onScan?: (data: string) => void
  onClose?: () => void
  mockData?: string // For testing scanning behavior
}

export const ScannerView = ({
  isActive = true,
  onScan,
  onClose,
  mockData,
  ...props
}: ScannerViewProps) => {
  const [scanned, setScanned] = React.useState(false)

  const handleScan = () => {
    setScanned(true)
    if (onScan && mockData) {
        onScan(mockData)
    }
    // Reset scan animation after delay
    setTimeout(() => setScanned(false), 2000)
  }

  return (
    <ScannerFrame {...props}>
      {!isActive ? (
        <CameraPlaceholder>
          <Camera size="$6" color="$gray10" />
          <Text color="$gray10" marginTop="$4">Câmera desativada</Text>
        </CameraPlaceholder>
      ) : (
        <>
          <CameraPlaceholder>
             {/* This would be the real camera preview */}
             <Maximize size="$8" color="#333" />
          </CameraPlaceholder>
          <Overlay>
            <ScanFrame>
                {/* Simulated scan line animation would go here */}
               <ScanLine style={{ opacity: scanned ? 0 : 1 }} />
            </ScanFrame>
            <StatusText>Posicione o código no quadro</StatusText>
          </Overlay>
          <Controls>
             {mockData && (
                <Button onPress={handleScan} variant="default">Simular Scan</Button>
             )}
             {onClose && (
                <Button onPress={onClose} variant="destructive" icon={X} circular />
             )}
          </Controls>
        </>
      )}
    </ScannerFrame>
  )
}
