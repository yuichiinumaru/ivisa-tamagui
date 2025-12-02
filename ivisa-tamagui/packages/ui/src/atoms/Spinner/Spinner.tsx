import { Spinner as TamaguiSpinner, SpinnerProps as TamaguiSpinnerProps, styled } from 'tamagui'

export const Spinner = styled(TamaguiSpinner, {
  name: 'Spinner',
  color: '$primary',
})

export type SpinnerProps = TamaguiSpinnerProps
