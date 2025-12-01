import React from 'react'
import { Dialog as TamaguiDialog, DialogContentProps, styled, Unspaced, Button, XStack, Text } from 'tamagui'

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
})

const DialogHeader = styled(XStack, {
  name: 'DialogHeader',
  flexDirection: 'column',
  marginBottom: '$md',
  gap: '$sm',
})

const DialogTitle = styled(TamaguiDialog.Title, {
  name: 'DialogTitle',
  fontSize: '$6',
  fontWeight: '600',
  color: '$foreground',
})

const DialogDescription = styled(TamaguiDialog.Description, {
  name: 'DialogDescription',
  fontSize: '$3',
  color: '$mutedForeground',
  lineHeight: '$4',
})

const DialogFooter = styled(XStack, {
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

// Composite for standard usage
export const DialogContentComposite = React.forwardRef<React.ElementRef<typeof DialogContent>, DialogContentProps>((props, ref) => {
  return (
    <DialogPortal>
      <DialogOverlay key="overlay" />
      <DialogContent key="content" ref={ref} {...props}>
        {props.children}
        <Unspaced>
          <TamaguiDialog.Close asChild>
            <Button
              position="absolute"
              top="$3"
              right="$3"
              size="$2"
              circular
              backgroundColor="transparent"
              pressStyle={{ backgroundColor: '$muted' }}
            >
               <Text color="$mutedForeground">✕</Text>
            </Button>
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
