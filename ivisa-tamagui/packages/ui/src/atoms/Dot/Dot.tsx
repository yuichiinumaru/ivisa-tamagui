import React from 'react'
import { Circle, GetProps, styled } from 'tamagui'

export const DotFrame = styled(
  Circle,
  {
    name: 'Dot',
    size: 8,
    backgroundColor: '$color', // Allows the 'color' prop to override backgroundColor
    variants: {
      status: {
        success: {
          backgroundColor: '$green10',
        },
        warning: {
          backgroundColor: '$yellow10',
        },
        error: {
          backgroundColor: '$red10',
        },
        neutral: {
          backgroundColor: '$gray10',
        },
      },
    } as const,
    defaultVariants: {
      status: 'neutral',
    },
  },
  {
    defaultProps: {
      'aria-hidden': true,
    },
  }
)

export type DotProps = GetProps<typeof DotFrame> & {
  /**
   * O status do ponto, que determina sua cor a partir do tema.
   * @default 'neutral'
   */
  status?: 'success' | 'warning' | 'error' | 'neutral'
  /**
   * Uma cor específica (ex: '$blue10') ou cor CSS para aplicar ao ponto,
   * que sobrepõe a cor definida pelo 'status'.
   */
  color?: string
}

export const Dot = DotFrame

export default Dot

export type DotFrameProps = React.ComponentProps<typeof DotFrame>

