import React from 'react'
import { AlertDialog as TamaguiAlertDialog, AlertDialogContentProps, styled, XStack, YStack } from 'tamagui'

// Styled Components
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

export const AlertDialog = TamaguiAlertDialog
export const AlertDialogTrigger = TamaguiAlertDialog.Trigger
export const AlertDialogPortal = TamaguiAlertDialog.Portal

export const AlertDialogContentComposite = React.forwardRef<React.ElementRef<typeof AlertDialogContent>, AlertDialogContentProps>((props, ref) => {
  return (
    <AlertDialogPortal>
      <AlertDialogOverlay key="overlay" />
      <AlertDialogContent key="content" ref={ref} {...props} />
    </AlertDialogPortal>
  )
})

AlertDialogContentComposite.displayName = 'AlertDialogContent'

export {
  AlertDialogOverlay,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContentComposite as AlertDialogContent,
}
