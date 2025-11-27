import React from 'react'
import {
  Adapt,
  Popover as TamaguiPopover,
  PopoverProps as TamaguiPopoverProps,
  PopoverContentProps,
  styled,
  YStack,
  GetProps
} from 'tamagui'

const PopoverContentFrame = styled(TamaguiPopover.Content, {
  name: 'PopoverContent',
  backgroundColor: '$background',
  borderColor: '$borderColor',
  borderWidth: 1,
  padding: '$md',
  borderRadius: '$md',
  
  // Shadow
  shadowColor: '$shadowColor',
  shadowOffset: { width: 0, height: 2 },
  shadowOpacity: 0.2,
  shadowRadius: 5,
  elevation: 5,

  // Animation
  animation: [
    'quick',
    {
      opacity: {
        overshootClamping: true,
      },
    },
  ],
  enterStyle: { y: -10, opacity: 0 },
  exitStyle: { y: -10, opacity: 0 },
  y: 0,
  opacity: 1,
})

const PopoverArrow = styled(TamaguiPopover.Arrow, {
  name: 'PopoverArrow',
  borderWidth: 1,
  borderColor: '$borderColor',
  backgroundColor: '$background',
})

export type PopoverContentCompositeProps = PopoverContentProps

const PopoverContent = React.forwardRef<React.ElementRef<typeof PopoverContentFrame>, PopoverContentCompositeProps>(
  ({ children, ...props }, ref) => {
    return (
      <PopoverContentFrame ref={ref} {...props}>
        <PopoverArrow size="$3" />
        {children}
      </PopoverContentFrame>
    )
  }
)

PopoverContent.displayName = 'PopoverContent'

const Popover = TamaguiPopover
const PopoverTrigger = TamaguiPopover.Trigger
const PopoverAnchor = TamaguiPopover.Anchor
const PopoverClose = TamaguiPopover.Close

export {
  Popover,
  PopoverTrigger,
  PopoverAnchor,
  PopoverContent,
  PopoverClose
}
