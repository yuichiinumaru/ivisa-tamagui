import React from 'react'
import {
  AlertDialog as TamaguiAlertDialog,
  AlertDialogContentProps,
  styled,
  XStack,
  YStack,
  Spinner,
} from 'tamagui'
import { Button } from '../../atoms/Button'

// Styled Components (retained for composition)
const AlertDialogOverlay = styled(TamaguiAlertDialog.Overlay, {
  name: 'AlertDialogOverlay',
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  animation: 'quick',
  opacity: 1,
  enterStyle: { opacity: 0 },
  exitStyle: { opacity: 0 },
})

const AlertDialogContent = styled(TamaguiAlertDialog.Content, {
  name: 'AlertDialogContent',
  backgroundColor: '$background',
  borderRadius: '$lg',
  padding: '$lg',
  width: '90%',
  maxWidth: 512,
  borderWidth: 1,
  borderColor: '$borderColor',

  variants: {
    error: {
      true: {
        borderColor: '$red10',
      },
    },
  },

  animation: [
    'quick',
    {
      opacity: {
        overshootClamping: true,
      },
    },
  ],
  enterStyle: { x: 0, y: -20, opacity: 0, scale: 0.9 },
  exitStyle: { x: 0, y: 10, opacity: 0, scale: 0.95 },
  x: 0,
  scale: 1,
  opacity: 1,
  y: 0,
})

const AlertDialogHeader = styled(YStack, {
  name: 'AlertDialogHeader',
  flexDirection: 'column',
  marginBottom: '$md',
  gap: '$sm',
})

const AlertDialogTitle = styled(TamaguiAlertDialog.Title, {
  name: 'AlertDialogTitle',
  fontSize: '$6',
  fontWeight: '600',
  color: '$foreground',
  variants: {
    error: {
      true: {
        color: '$red10',
      },
    },
  },
})

const AlertDialogDescription = styled(TamaguiAlertDialog.Description, {
  name: 'AlertDialogDescription',
  fontSize: '$3',
  color: '$mutedForeground',
  lineHeight: '$4',
})

const AlertDialogFooter = styled(XStack, {
  name: 'AlertDialogFooter',
  flexDirection: 'row',
  justifyContent: 'flex-end',
  gap: '$3',
  marginTop: '$md',
})

const AlertDialogAction = TamaguiAlertDialog.Action
const AlertDialogCancel = TamaguiAlertDialog.Cancel
const AlertDialogTrigger = TamaguiAlertDialog.Trigger

const AlertDialogPortal = TamaguiAlertDialog.Portal

const AlertDialogContentComposite = React.forwardRef<
  React.ElementRef<typeof AlertDialogContent>,
  AlertDialogContentProps & { hasError?: boolean }
>(({ hasError, ...props }, ref) => {
  return (
    <AlertDialogPortal>
      <AlertDialogOverlay key="overlay" />
      <AlertDialogContent key="content" ref={ref} error={hasError} {...props} />
    </AlertDialogPortal>
  )
})
AlertDialogContentComposite.displayName = 'AlertDialogContent'

// High-level "Puppeteer" Component
interface AlertDialogProps {
  trigger: React.ReactNode
  title: string
  description: string
  actions?: React.ReactNode
  onCancel?: () => void
  onAction?: () => void
  isLoading?: boolean
  hasError?: boolean
  isDisabled?: boolean
  actionText?: string
  cancelText?: string
}

const AlertDialog = ({
  trigger,
  title,
  description,
  actions,
  onCancel,
  onAction,
  isLoading = false,
  hasError = false,
  isDisabled = false,
  actionText = 'Confirmar',
  cancelText = 'Cancelar',
}: AlertDialogProps) => {
  return (
    <TamaguiAlertDialog>
      <TamaguiAlertDialog.Trigger asChild>{trigger}</TamaguiAlertDialog.Trigger>
      <AlertDialogContentComposite hasError={hasError}>
        <AlertDialogHeader>
          <AlertDialogTitle error={hasError}>{title}</AlertDialogTitle>
          <AlertDialogDescription>{description}</AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          {actions || (
            <>
              <AlertDialogCancel asChild>
                <Button variant="outline" onPress={onCancel} disabled={isLoading || isDisabled}>
                  {cancelText}
                </Button>
              </AlertDialogCancel>
              <AlertDialogAction asChild>
                <Button
                  variant={hasError ? 'destructive' : 'default'}
                  onPress={onAction}
                  disabled={isLoading || isDisabled}
                  icon={isLoading ? <Spinner /> : undefined}
                >
                  {isLoading ? 'Processando...' : actionText}
                </Button>
              </AlertDialogAction>
            </>
          )}
        </AlertDialogFooter>
      </AlertDialogContentComposite>
    </TamaguiAlertDialog>
  )
}

export {
  AlertDialog,
  AlertDialogOverlay,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogPortal,
  AlertDialogTrigger,
}
