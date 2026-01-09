import React, { Children, cloneElement, forwardRef, isValidElement } from 'react';
import type { ReactNode } from 'react';
import { GetProps, styled, Text, XStack, YStack } from 'tamagui';
import { X } from '@tamagui/lucide-icons';

// --- STYLED COMPONENTS ---

const AlertFrame = styled(XStack, {
  name: 'Alert',
  tag: 'div',
  alignItems: 'center',
  borderRadius: '$md',
  borderWidth: 1,
  padding: '$4',
  gap: '$4',
  variants: {
    variant: {
      default: {
        backgroundColor: '$background',
        borderColor: '$borderColor',
      },
      destructive: {
        borderColor: '$red7',
        backgroundColor: '$red2',
        color: '$red11',
      },
      success: {
        borderColor: '$green7',
        backgroundColor: '$green2',
        color: '$green11',
      },
      warning: {
        borderColor: '$yellow7',
        backgroundColor: '$yellow2',
        color: '$yellow11',
      },
    },
  } as const,
  defaultVariants: {
    variant: 'default',
  },
});

const AlertTitleFrame = styled(Text, {
  name: 'AlertTitle',
  tag: 'h5',
  fontWeight: '500',
  fontFamily: '$heading',
  letterSpacing: -0.5,
  color: '$color12', // Will inherit color from the parent AlertFrame variant
});

const AlertDescriptionFrame = styled(Text, {
  name: 'AlertDescription',
  tag: 'div',
  fontSize: '$3',
  fontFamily: '$body',
  color: '$color11', // Will inherit color from the parent AlertFrame variant
});

const AlertCloseButton = styled(XStack, {
  name: 'AlertCloseButton',
  tag: 'button',
  als: 'flex-start', // Align self to the top
  p: '$1',
  borderRadius: '$2',
  opacity: 0.7,
  hoverStyle: {
    opacity: 1,
  },
  focusStyle: {
    outlineWidth: 2,
    outlineStyle: 'solid',
    outlineColor: '$blue8',
  },
  pressStyle: {
    opacity: 0.5,
  },
  variants: {
    variant: {
      default: {
        color: '$color11',
      },
      destructive: {
        color: '$red11',
      },
      success: {
        color: '$green11',
      },
      warning: {
        color: '$yellow11',
      },
    },
  } as const,
  defaultVariants: {
    variant: 'default',
  },
});


// --- TYPE DEFINITIONS ---

type AlertVariant = 'default' | 'destructive' | 'success' | 'warning';
type AlertFrameProps = GetProps<typeof AlertFrame>;
export type AlertTitleProps = GetProps<typeof AlertTitleFrame>;
export type AlertDescriptionProps = GetProps<typeof AlertDescriptionFrame>;

export interface AlertProps extends Omit<AlertFrameProps, 'variant'> {
  /** The visual variant of the alert. */
  variant?: AlertVariant;
  /** An optional icon to display before the content. */
  icon?: ReactNode;
  /** Determines if the alert can be closed. */
  isDismissible?: boolean;
  /** Callback function when the alert is dismissed. */
  onDismiss?: () => void;
}

// --- COMPOUND COMPONENT IMPLEMENTATION ---

type AlertComponent = React.ForwardRefExoticComponent<AlertProps & React.RefAttributes<HTMLDivElement>> & {
  Title: typeof AlertTitleFrame;
  Description: typeof AlertDescriptionFrame;
};

const AlertRoot = forwardRef<HTMLDivElement, AlertProps>(
  ({ variant = 'default', icon, isDismissible, onDismiss, children, ...props }, ref) => {
    // Inject the variant prop into children
    const childrenWithProps = Children.map(children, child => {
      if (isValidElement(child)) {
        return cloneElement(child as React.ReactElement<any>, { variant });
      }
      return child;
    });

    return (
      <AlertFrame ref={ref} variant={variant} role="alert" {...props}>
        {icon}
        <YStack flex={1} gap="$1.5">
          {childrenWithProps}
        </YStack>
        {isDismissible && (
          <AlertCloseButton
            variant={variant}
            aria-label="Fechar"
            onPress={() => onDismiss?.()}
          >
            <X size={16} />
          </AlertCloseButton>
        )}
      </AlertFrame>
    );
  }
);

AlertRoot.displayName = 'Alert';

export const Alert = AlertRoot as AlertComponent;
Alert.Title = AlertTitleFrame;
Alert.Description = AlertDescriptionFrame;

export type AlertRootProps = React.ComponentProps<typeof AlertRoot>
