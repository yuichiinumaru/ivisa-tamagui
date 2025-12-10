import { YStack, styled, GetProps, keyframes } from 'tamagui'

/**
 * Defines the keyframes for a pulsing animation, commonly used in skeleton loaders.
 * This animation gently fades the component in and out to indicate a loading state.
 */
const pulse = keyframes({
  '0%, 100%': {
    opacity: 1,
  },
  '50%': {
    opacity: 0.5,
  },
})

const SkeletonFrame = styled(YStack, {
  name: 'Skeleton',
  backgroundColor: '$muted', // Cor de fundo suave para o esqueleto
  borderRadius: '$4', // Bordas arredondadas

  variants: {
    animationType: {
      pulse: {
        animationName: pulse.name,
        animationDuration: '2s',
        animationTimingFunction: 'cubic-bezier(0.4, 0, 0.6, 1)',
        animationIterationCount: 'infinite',
      },
      none: {},
    },
  } as const,

  defaultVariants: {
    animationType: 'pulse',
  },
})

/**
 * Skeleton (Esqueleto)
 *
 * Um componente usado para exibir um placeholder visual do conteúdo enquanto ele está carregando,
 * melhorando a percepção de performance da aplicação.
 *
 * O `aria-hidden="true"` é adicionado para garantir que leitores de tela ignorem este
 * elemento puramente presentacional.
 */
export const Skeleton = SkeletonFrame.styleable((props, ref) => (
  <SkeletonFrame {...props} ref={ref} aria-hidden="true" />
))

/**
 * As propriedades para o componente Skeleton.
 */
export type SkeletonProps = GetProps<typeof Skeleton>
