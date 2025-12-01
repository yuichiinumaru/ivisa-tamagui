import React, { createContext, useContext, useState, useCallback, ReactNode } from 'react'
import { styled, XStack, YStack, Text, Button, AnimatePresence } from 'tamagui'
import { Portal } from '@tamagui/portal'

// --- Types ---

export type ToastVariant = 'default' | 'destructive' | 'success'

export interface ToastData {
    id: string
    title?: string
    description?: string
    action?: ReactNode
    variant?: ToastVariant
    duration?: number
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
        throw new Error('useToast must be used within a ToastProvider')
    }
    return context
}

// --- Components ---

const ToastViewportFrame = styled(YStack, {
    name: 'ToastViewport',
    position: 'absolute',
    bottom: 0,
    right: 0,
    padding: '$4',
    gap: '$2',
    width: 390,
    maxWidth: '100%',
    zIndex: 10000, // High z-index
    pointerEvents: 'box-none', // Allow clicks through empty space
})

const ToastFrame = styled(XStack, {
    name: 'Toast',
    backgroundColor: '$background',
    borderRadius: '$4',
    borderWidth: 1,
    borderColor: '$borderColor',
    padding: '$4',
    gap: '$3',
    alignItems: 'flex-start',
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
                borderColor: '$destructive',
                backgroundColor: '$destructive', // Or keep background and use text color
                // Shadcn destructive: destructive group border-destructive bg-destructive text-destructive-foreground
            },
            success: {
                borderColor: '$green9', // Assuming green9 exists or similar
            }
        }
    } as const,

    defaultVariants: {
        variant: 'default',
    }
})

const ToastTitle = styled(Text, {
    name: 'ToastTitle',
    fontWeight: '600',
    fontSize: '$3',
    color: '$foreground',

    variants: {
        variant: {
            default: {},
            destructive: { color: '$destructiveForeground' },
            success: { color: '$green11' },
        }
    } as const
})

const ToastDescription = styled(Text, {
    name: 'ToastDescription',
    fontSize: '$2',
    color: '$mutedForeground',
    opacity: 0.9,

    variants: {
        variant: {
            default: {},
            destructive: { color: '$destructiveForeground' },
            success: { color: '$green11' },
        }
    } as const
})

const ToastCloseButton = styled(Button, {
    size: '$2',
    circular: true,
    chromeless: true,
    position: 'absolute',
    top: '$2',
    right: '$2',
    opacity: 0.5,
    hoverStyle: { opacity: 1 },
})

// --- Provider ---

export const ToastProvider = ({ children }: { children: ReactNode }) => {
    const [toasts, setToasts] = useState<ToastData[]>([])

    const toast = useCallback(({ duration = 5000, ...props }: Omit<ToastData, 'id'>) => {
        const id = Math.random().toString(36).substring(2, 9)
        const newToast = { ...props, id, duration }

        setToasts((prev) => [...prev, newToast])

        if (duration > 0) {
            setTimeout(() => {
                dismiss(id)
            }, duration)
        }
    }, [])

    const dismiss = useCallback((id: string) => {
        setToasts((prev) => prev.filter((t) => t.id !== id))
    }, [])

    return (
        <ToastContext.Provider value={{ toasts, toast, dismiss }}>
            {children}
            <Portal>
                <ToastViewportFrame>
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
    return (
        <ToastFrame
            variant={toast.variant}
            animation="quick"
            enterStyle={{ opacity: 0, scale: 0.9, y: 10 }}
            exitStyle={{ opacity: 0, scale: 0.9, y: 10 }}
            opacity={1}
            scale={1}
            y={0}
        >
            <YStack flex={1} gap="$1">
                {toast.title && (
                    <ToastTitle variant={toast.variant}>{toast.title}</ToastTitle>
                )}
                {toast.description && (
                    <ToastDescription variant={toast.variant}>{toast.description}</ToastDescription>
                )}
            </YStack>
            {toast.action}
            <ToastCloseButton onPress={onDismiss}>
                <Text>✕</Text>
            </ToastCloseButton>
        </ToastFrame>
    )
}

export { ToastFrame as Toast, ToastTitle, ToastDescription, ToastViewportFrame as ToastViewport }
