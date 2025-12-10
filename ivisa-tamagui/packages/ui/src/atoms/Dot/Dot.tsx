import { styled, GetProps, Circle } from 'tamagui'

export const DotFrame = styled(Circle, {
  name: 'Dot',
  size: 8,
  backgroundColor: '$color',
  variants: {
    status: {
      success: { backgroundColor: '$green10' },
      warning: { backgroundColor: '$yellow10' },
      error: { backgroundColor: '$red10' },
      neutral: { backgroundColor: '$gray10' },
    }
  },
  defaultVariants: {
    status: 'neutral'
  }
})

export type DotProps = GetProps<typeof DotFrame>

export const Dot = DotFrame

export default Dot
