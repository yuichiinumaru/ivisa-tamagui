// @ts-nocheck
import React, { createContext, useContext, useState, useCallback, ReactNode } from 'react'
import { styled, XStack, YStack, Text, AnimatePresence } from 'tamagui'
import { Portal } from '@tamagui/portal'
import { X } from '@tamagui/lucide-icons'
import { Button } from '../atoms/Button'
import { Skeleton } from '../atoms/Skeleton'

// --- Types ---

export type ToastVariant = 'default' | 'destructive' | 'success'

export interface ToastData {
  id: string
  title?: string
  description?: string
  action?: ReactNode
  variant?: ToastVariant
  duration?: number
  isLoading?: boolean
}

interface ToastContextType {
  toasts: ToastData[]
  toast: (props: Omit<ToastData, 'id'>) => void
  dismiss: (id: string) => void
}

// --- Context ---

const ToastContext = createContext<ToastContextType | undefined>(undefined)

export const useToast = () => {
  const context = useContext(ToastContext)
  if (!context) {
    throw new Error('useToast deve ser usado dentro de um ToastProvider')
  }
  return context
}

// --- Components ---

const ToastViewportFrame = styled(YStack, {
  name: 'ToastViewport',
  position: 'absolute',
  bottom: '$4',
  right: '$4',
  padding: '$4',
  gap: '$2',
  width: 420,
  maxWidth: '100%',
  zIndex: 10000,
  pointerEvents: 'box-none',
})

const ToastFrame = styled(XStack, {
  name: 'Toast',
  backgroundColor: '$background',
  borderRadius: '$6',
  borderWidth: 1,
  borderColor: '$borderColor',
  padding: '$4',
  gap: '$3',
  alignItems: 'center',
  shadowColor: '$shadowColor',
  shadowRadius: 10,
  shadowOpacity: 0.1,
  elevation: 5,
  minHeight: 64,

  variants: {
    variant: {
      default: {
        borderColor: '$borderColor',
      },
      destructive: {
        borderColor: '$red9',
        backgroundColor: '$red2',
      },
      success: {
        borderColor: '$green9',
        backgroundColor: '$green2',
      },
    },
  } as const,

  defaultVariants: {
    variant: 'default',
  },
})

const ToastTitleComponent = styled(Text, {
  name: 'ToastTitle',
  fontWeight: '600',
  fontSize: '$4',
  color: '$color',
  ellipse: true,
  numberOfLines: 1,

  variants: {
    variant: {
      default: {
        color: '$color',
      },
      destructive: {
        color: '$red11',
      },
      success: {
        color: '$green11',
      },
    },
  } as const,
})

const ToastDescriptionComponent = styled(Text, {
  name: 'ToastDescription',
  fontSize: '$2',
  color: '$colorPress',
  opacity: 0.9,
  ellipse: true,
  numberOfLines: 1,

  variants: {
    variant: {
      default: {
        color: '$colorPress',
      },
      destructive: {
        color: '$red10',
      },
      success: {
        color: '$green10',
      },
    },
  } as const,
})

const ToastCloseButton = styled(Button, {
  size: '$2',
  circular: true,
  chromeless: true,
  position: 'absolute',
  top: '$3',
  right: '$3',
  opacity: 0.6,
  hoverStyle: { opacity: 1 },
  focusStyle: { opacity: 1, outlineWidth: 2, outlineColor: '$blue8' },
})

// --- Provider ---

export const ToastProvider = ({ children }: { children: ReactNode }) => {
  const [toasts, setToasts] = useState<ToastData[]>([])

  const toast = useCallback(({ duration = 5000, isLoading = false, ...props }: Omit<ToastData, 'id'>) => {
    const id = Math.random().toString(36).substring(2, 9)
    // Don't auto-dismiss loading toasts
    const effectiveDuration = isLoading ? 0 : duration
    const newToast = { ...props, id, duration: effectiveDuration, isLoading }

    setToasts((prev) => [newToast, ...prev])

    if (effectiveDuration > 0) {
      setTimeout(() => {
        dismiss(id)
      }, effectiveDuration)
    }
  }, [])

  const dismiss = useCallback((id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id))
  }, [])

  return (
    <ToastContext.Provider value={{ toasts, toast, dismiss }}>
      {children}
      <Portal>
        <ToastViewportFrame role="status" aria-live="polite">
          <AnimatePresence>
            {toasts.map((t) => (
              <ToastItem key={t.id} toast={t} onDismiss={() => dismiss(t.id)} />
            ))}
          </AnimatePresence>
        </ToastViewportFrame>
      </Portal>
    </ToastContext.Provider>
  )
}

const ToastItem = ({ toast, onDismiss }: { toast: ToastData; onDismiss: () => void }) => {
  if (toast.isLoading) {
    return (
      <ToastFrame
        animation="quick"
        enterStyle={{ opacity: 0, scale: 0.95, y: 10 }}
        opacity={1}
        scale={1}
        y={0}
      >
        <YStack flex={1} gap="$2">
          <Skeleton width={150} height={20} />
          <Skeleton width={250} height={15} />
        </YStack>
      </ToastFrame>
    )
  }

  return (
    <ToastFrame
      variant={toast.variant}
      animation="quick"
      enterStyle={{ opacity: 0, scale: 0.95, y: 10 }}
      exitStyle={{ opacity: 0, scale: 0.95, y: -10 }}
      opacity={1}
      scale={1}
      y={0}
    >
      <YStack flex={1} gap="$1">
        {toast.title && <ToastTitleComponent variant={toast.variant}>{toast.title}</ToastTitleComponent>}
        {toast.description && (
          <ToastDescriptionComponent variant={toast.variant}>{toast.description}</ToastDescriptionComponent>
        )}
      </YStack>
      {toast.action}
      <ToastCloseButton onPress={onDismiss} aria-label="Fechar">
        <X size="$1" />
      </ToastCloseButton>
    </ToastFrame>
  )
}

// Export composed components for advanced use cases
export const Toast = ToastFrame
export const ToastViewport = ToastViewportFrame
export const ToastTitle = ToastTitleComponent
export const ToastDescription = ToastDescriptionComponent

export type ToastProviderProps = React.ComponentProps<typeof ToastProvider>

export type ToastProps = React.ComponentProps<typeof Toast>

export type ToastViewportProps = React.ComponentProps<typeof ToastViewport>

export type ToastTitleProps = React.ComponentProps<typeof ToastTitle>

export type ToastDescriptionProps = React.ComponentProps<typeof ToastDescription>

export type ToastItemProps = React.ComponentProps<typeof ToastItem>
