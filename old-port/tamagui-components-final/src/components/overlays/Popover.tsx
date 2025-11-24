
import {
  Adapt,
  Popover as TamaguiPopover,
  PopoverProps as TamaguiPopoverProps,
  styled,
  YStack,
} from 'tamagui'
import { ReactNode } from 'react'

export const PopoverTrigger = TamaguiPopover.Trigger
export const PopoverClose = TamaguiPopover.Close

export const PopoverContent = styled(TamaguiPopover.Content, {
  name: 'PopoverContent',
  enterStyle: { y: -10, opacity: 0 },
  exitStyle: { y: -10, opacity: 0 },
  elevate: true,
  animation: [
    'quick',
    {
      opacity: {
        overshootClamping: true,
      },
    },
  ],

  backgroundColor: '$background',
  borderColor: '$borderColor',
  borderWidth: 1,
  padding: '$3',
  borderRadius: '$4',
  shadowColor: '$shadowColor',
  shadowOffset: { width: 0, height: 2 },
  shadowOpacity: 0.1,
  shadowRadius: 10,
  elevation: 5,
})

export const PopoverArrow = styled(TamaguiPopover.Arrow, {
  name: 'PopoverArrow',
  backgroundColor: '$borderColor',
})

export const Popover = (
  props: TamaguiPopoverProps & {
    trigger: ReactNode
    children: ReactNode
  }
) => {
  return (
    <TamaguiPopover size="$5" allowFlip {...props}>
      <PopoverTrigger asChild>{props.trigger}</PopoverTrigger>
      <Adapt when="sm" platform="touch">
        <TamaguiPopover.Sheet modal dismissOnSnapToBottom>
          <TamaguiPopover.Sheet.Frame padding="$4">
            <Adapt.Contents />
          </TamaguiPopover.Sheet.Frame>
          <TamaguiPopover.Sheet.Overlay
            animation="lazy"
            enterStyle={{ opacity: 0 }}
            exitStyle={{ opacity: 0 }}
          />
        </TamaguiPopover.Sheet>
      </Adapt>
      <PopoverContent>
        <PopoverArrow />
        <YStack>{props.children}</YStack>
      </PopoverContent>
    </TamaguiPopover>
  )
}
