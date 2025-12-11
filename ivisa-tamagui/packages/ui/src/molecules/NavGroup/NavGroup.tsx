import { NavLink } from '../../atoms/NavLink/NavLink';
import { Skeleton } from '../../atoms/Skeleton/Skeleton';
import React from 'react';
import {
  GetProps,
  Paragraph,
  Separator,
  XStack,
  YStack,
  styled,
} from 'tamagui';

const NavGroupFrame = styled(YStack, {
  name: 'NavGroup',
  gap: '$3',
  padding: '$2',
  borderRadius: '$4',
});

const NavGroupHeader = styled(XStack, {
  name: 'NavGroupHeader',
  justifyContent: 'space-between',
  alignItems: 'center',
  paddingHorizontal: '$3',
});

const NavGroupTitle = styled(Paragraph, {
  name: 'NavGroupTitle',
  fontWeight: 'bold',
  color: '$color',
  fontSize: '$3',
});

type NavGroupProps = GetProps<typeof NavGroupFrame> & {
  items: Array<{ label: string; href: string }>;
  title?: string;
  isLoading?: boolean;
  hasError?: boolean;
  isDisabled?: boolean;
  rightSlot?: React.ReactNode;
};

const NavGroup = NavGroupFrame.styleable<NavGroupProps>((props, ref) => {
  const {
    items,
    title = 'Navegação Principal',
    isLoading = false,
    hasError = false,
    isDisabled = false,
    rightSlot,
    ...rest
  } = props;

  const renderContent = () => {
    if (isLoading) {
      return (
        <YStack gap="$3" paddingHorizontal="$3" paddingTop="$2">
          <Skeleton height={20} width={120} />
          <Skeleton height={20} width={150} />
          <Skeleton height={20} width={100} />
        </YStack>
      );
    }

    if (hasError) {
      return (
        <Paragraph color="$red10" paddingHorizontal="$3" paddingTop="$2">
          Ocorreu um erro ao carregar a navegação.
        </Paragraph>
      );
    }

    return items.map((item, i) => (
      <NavLink key={i} href={item.href} disabled={isDisabled}>
        {item.label}
      </NavLink>
    ));
  };

  return (
    <NavGroupFrame
      ref={ref}
      borderWidth={hasError ? 1 : 0}
      borderColor={hasError ? '$red10' : '$borderColor'}
      opacity={isDisabled ? 0.5 : 1}
      {...rest}
      role="navigation"
      aria-label={title}
    >
      {(title || rightSlot) && (
        <NavGroupHeader>
          {title && <NavGroupTitle>{title}</NavGroupTitle>}
          {rightSlot}
        </NavGroupHeader>
      )}
      <Separator />
      <YStack gap="$2">{renderContent()}</YStack>
    </NavGroupFrame>
  );
});

export { NavGroup };
export type { NavGroupProps };
