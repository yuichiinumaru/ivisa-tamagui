import type { SpinnerProps as TamaguiSpinnerProps } from 'tamagui';
import { GetProps, Spinner as TamaguiSpinner, styled } from 'tamagui';

const StyledSpinner = styled(TamaguiSpinner, {
  name: 'Spinner',
  color: '$primary',
});
// auto-added alias to silence Tamagui prop checks
const StyledSpinnerAny: any = StyledSpinner


/**
 * Displays an animated spinner to indicate a loading state.
 * This component is a styled wrapper around the Tamagui Spinner,
 * providing a default accessible label.
 */
export type SpinnerProps = GetProps<typeof StyledSpinner>;

export const Spinner = ({ 'aria-label': ariaLabel = 'Carregando...', ...props }: SpinnerProps) => {
  return <StyledSpinnerAny aria-label={ariaLabel} {...props} />;
};

