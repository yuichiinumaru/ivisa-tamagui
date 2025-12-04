import { styled, YStack, Text, GetProps } from 'tamagui'
import { Label } from '../../atoms/Label'

export const Field = styled(YStack, {
  name: 'Field',
  gap: '$2',
})

export const FieldLabel = Label

export const FieldControl = styled(YStack, {
  name: 'FieldControl',
})

export const FieldError = styled(Text, {
  name: 'FieldError',
  color: '$destructive',
  fontSize: '$2',
})
