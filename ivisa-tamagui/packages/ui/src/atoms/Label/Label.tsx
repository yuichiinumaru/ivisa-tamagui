import { GetProps, Label as TamaguiLabel, styled } from 'tamagui'

/**
 * Renders an accessible label associated with a form control.
 * This component extends the Tamagui Label, providing default styles
 * for typography and user interaction. It supports polymorphism via the `asChild` prop.
 */
export const Label = styled(TamaguiLabel, {
  name: 'Label',
  color: '$color',
  fontSize: '$4',
  fontWeight: '500',
  lineHeight: '$4',
  userSelect: 'none',
  hoverStyle: {
    color: '$colorHover',
  },
})

export type LabelProps = GetProps<typeof Label>
