import { forwardRef } from 'react';
import { GetProps, styled, XStack, YStack } from 'tamagui';
import { Badge, BadgeText } from '../../atoms/Badge';
import { Skeleton } from '../../atoms/Skeleton';

const BadgeCounterFrame = styled(XStack, {
  name: 'BadgeCounter',
  tag: 'div',
  position: 'relative',
  alignItems: 'center',
  justifyContent: 'center',
  variants: {
    hasError: {
      true: {
        borderColor: '$red10',
        borderWidth: 2,
        borderRadius: '$4',
      },
    },
    disabled: {
      true: {
        opacity: 0.5,
        pointerEvents: 'none',
      },
    },
  },
});

const BadgeCounterContent = styled(YStack, {
  name: 'BadgeCounterContent',
  flex: 1,
});

const BadgePosition = styled(YStack, {
  name: 'BadgePosition',
  position: 'absolute',
  zIndex: 1,
  top: -5,
  right: -5,
});

export type BadgeCounterProps = GetProps<typeof BadgeCounterFrame> & {
  /**
   * O conteúdo principal a ser renderizado.
   */
  children: React.ReactNode;
  /**
   * O número a ser exibido no contador.
   * @default 0
   */
  count?: number;
  /**
   * O número máximo a ser exibido. Acima deste valor, será exibido com um '+'.
   * @default 99
   */
  max?: number;
  /**
   * Se o contador deve ser exibido quando o valor for zero.
   * @default false
   */
  showZero?: boolean;
  /**
   * Se o componente está em estado de carregamento.
   */
  isLoading?: boolean;
};

export const BadgeCounter = forwardRef<HTMLDivElement, BadgeCounterProps>(
  (
    {
      children,
      count = 0,
      max = 99,
      showZero = false,
      isLoading = false,
      hasError = false,
      disabled = false,
      ...props
    },
    ref
  ) => {
    if (isLoading) {
      return <Skeleton width="$10" height="$10" borderRadius="$10" />;
    }

    const shouldShowBadge = showZero || count > 0;
    const displayCount = count > max ? `${max}+` : count;

    return (
      <BadgeCounterFrame ref={ref} hasError={hasError} disabled={disabled} {...props}>
        <BadgeCounterContent>{children}</BadgeCounterContent>
        {shouldShowBadge && (
          <BadgePosition>
            <Badge variant="destructive" size="sm">
              <BadgeText variant="destructive" size="sm">
                {displayCount}
              </BadgeText>
            </Badge>
          </BadgePosition>
        )}
      </BadgeCounterFrame>
    );
  }
);

BadgeCounter.displayName = 'BadgeCounter';
