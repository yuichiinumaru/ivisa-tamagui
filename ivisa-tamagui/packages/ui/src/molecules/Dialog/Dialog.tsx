// Removed @ts-nocheck — enabling type checking
import { X } from '@tamagui/lucide-icons'
import React, { ReactNode } from 'react'
import {
  Button,
  Dialog as TamaguiDialog,
  DialogContentProps as TamaguiDialogContentProps,
  styled,
  Unspaced,
  XStack,
  XStackProps,
  YStack,
} from 'tamagui'
import { Skeleton } from '../../atoms/Skeleton'

// Styled Components matching Shadcn
const DialogOverlay = styled(TamaguiDialog.Overlay, {
  name: 'DialogOverlay',
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  animation: 'quick',
  opacity: 1,
  enterStyle: { opacity: 0 },
  exitStyle: { opacity: 0 },
})

const DialogContent = styled(TamaguiDialog.Content, {
  name: 'DialogContent',
  backgroundColor: '$background',
  borderRadius: '$lg',
  padding: '$lg',
  width: '90%',
  maxWidth: 512,
  borderWidth: 1,
  borderColor: '$borderColor',

  // Animation
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

  variants: {
    hasError: {
      true: {
        borderColor: '$red10',
      },
    },
  } as const,
})

const DialogHeader = styled(YStack, {
  name: 'DialogHeader',
  marginBottom: '$md',
  gap: '$sm',
})

const DialogTitle = styled(TamaguiDialog.Title, {
  name: 'DialogTitle',
  fontSize: '$6',
  fontWeight: '600',
  color: '$foreground',
  ellipse: true,
})

const DialogDescription = styled(TamaguiDialog.Description, {
  name: 'DialogDescription',
  fontSize: '$3',
  color: '$mutedForeground',
  lineHeight: '$4',
})

interface DialogFooterProps extends XStackProps {
  actions?: ReactNode
}

const DialogFooterComponent = React.forwardRef<React.ElementRef<typeof XStack>, DialogFooterProps>(
  ({ actions, children, ...props }, ref) => (
    <XStack {...props} ref={ref}>
      {actions ?? children}
    </XStack>
  )
)

const DialogFooter = styled(DialogFooterComponent, {
  name: 'DialogFooter',
  flexDirection: 'row',
  justifyContent: 'flex-end',
  gap: '$3',
  marginTop: '$md',
})

// Exports
export const Dialog = TamaguiDialog
export const DialogTrigger = TamaguiDialog.Trigger
export const DialogPortal = TamaguiDialog.Portal
export const DialogClose = TamaguiDialog.Close

// Define Props for the composite component
export interface DialogContentCompositeProps extends TamaguiDialogContentProps {
  isLoading?: boolean
  hasError?: boolean
}

// Composite for standard usage
export const DialogContentComposite = React.forwardRef<
  React.ElementRef<typeof DialogContent>,
  DialogContentCompositeProps
>(({ children, isLoading = false, hasError = false, ...props }, ref) => {
  return (
    <DialogPortal>
      <DialogOverlay key="overlay" />
      <DialogContent key="content" ref={ref} hasError={hasError} {...props}>
        {isLoading ? <Skeleton height={250} /> : children}
        <Unspaced>
          <TamaguiDialog.Close asChild>
            <Button
              aria-label="Fechar"
              position="absolute"
              top="$3"
              right="$3"
              size="$2"
              circular
              icon={X}
              backgroundColor="transparent"
              pressStyle={{ backgroundColor: '$backgroundHover' }}
            />
          </TamaguiDialog.Close>
        </Unspaced>
      </DialogContent>
    </DialogPortal>
  )
})

DialogContentComposite.displayName = 'DialogContent'

// Export everything
export {
  DialogOverlay,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogContentComposite as DialogContent,
}

// Removed trailing React.ComponentProps alias exports to avoid duplicate-type declarations

// DialogContentCompositeProps is defined above and exported there.
