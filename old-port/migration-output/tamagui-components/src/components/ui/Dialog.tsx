import React from 'react'
import { View, Text } from 'tamagui'
import { Portal } from '@tamagui/portal'
import styled from '@tamagui/styled-components'

const DialogOverlay = styled(View, {
  name: 'DialogOverlay',
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  zIndex: 50,
  variants: {
    open: {
      true: {
        opacity: 1,
        pointerEvents: 'auto',
      },
      false: {
        opacity: 0,
        pointerEvents: 'none',
      }
    }
  }
})

const DialogContent = styled(View, {
  name: 'DialogContent',
  backgroundColor: '$background',
  borderRadius: '$6',
  padding: '$6',
  maxWidth: 500,
  width: '90vw',
  maxHeight: '85vh',
  margin: 'auto',
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  borderWidth: 1,
  borderColor: '$borderColor',
  variants: {
    open: {
      true: {
        opacity: 1,
        scale: 1,
      },
      false: {
        opacity: 0,
        scale: 0.95,
      }
    }
  }
})

const DialogHeader = styled(View, {
  name: 'DialogHeader',
  marginBottom: '$4',
})

const DialogTitle = styled(Text, {
  name: 'DialogTitle',
  fontSize: '$5',
  fontWeight: '600',
  color: '$foreground',
  marginBottom: '$2',
})

const DialogDescription = styled(Text, {
  name: 'DialogDescription',
  fontSize: '$3',
  color: '$mutedForeground',
  lineHeight: '$4',
  marginBottom: '$4',
})

const DialogFooter = styled(View, {
  name: 'DialogFooter',
  flexDirection: 'row',
  justifyContent: 'flex-end',
  gap: '$3',
  marginTop: '$4',
  paddingTop: '$4',
  borderTopWidth: 1,
  borderTopColor: '$borderColor',
})

interface DialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  title?: string
  description?: string
  children: React.ReactNode
  footer?: React.ReactNode
}

export const Dialog: React.FC<DialogProps> = ({
  open,
  onOpenChange,
  title,
  description,
  children,
  footer
}) => {
  return (
    <Portal>
      <DialogOverlay open={open} onClick={() => onOpenChange(false)} />
      <DialogContent open={open}>
        {(title || description) && (
          <DialogHeader>
            {title && <DialogTitle>{title}</DialogTitle>}
            {description && <DialogDescription>{description}</DialogDescription>}
          </DialogHeader>
        )}
        {children}
        {footer && <DialogFooter>{footer}</DialogFooter>}
      </DialogContent>
    </Portal>
  )
}

export { DialogHeader, DialogTitle, DialogDescription, DialogFooter }
