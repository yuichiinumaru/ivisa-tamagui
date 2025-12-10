import React from 'react';
import { GetProps, Spinner, Switch as TamaguiSwitch, styled } from 'tamagui';

// # 1. Component Variants
const SwitchFrame = styled(TamaguiSwitch, {
  name: 'Switch',
  borderRadius: '$10',
  borderWidth: 0,
  backgroundColor: '$gray8',
  minHeight: 24,
  minWidth: 44,
  focusStyle: {
    outlineColor: '$blue10',
    outlineStyle: 'solid',
    outlineWidth: 2,
    outlineOffset: 2,
  },
  hoverStyle: {
    backgroundColor: '$gray9',
  },
  variants: {
    checked: {
      true: {
        backgroundColor: '$blue10',
        hoverStyle: {
          backgroundColor: '$blue11',
        },
      },
      false: {
        backgroundColor: '$gray8',
      },
    },
    disabled: {
      true: {
        opacity: 0.5,
        backgroundColor: '$gray8',
        pointerEvents: 'none',
      },
    },
    size: {
      small: {
        minHeight: 20,
        minWidth: 36,
      },
      medium: {
        minHeight: 24,
        minWidth: 44,
      },
      large: {
        minHeight: 28,
        minWidth: 52,
      },
    },
  } as const,
  defaultVariants: {
    checked: false,
    size: 'medium',
  },
});

const SwitchThumb = styled(TamaguiSwitch.Thumb, {
  name: 'SwitchThumb',
  backgroundColor: '$background',
  borderRadius: '$10',
  animation: 'quick',
  variants: {
    size: {
      small: {
        height: 16,
        width: 16,
      },
      medium: {
        height: 20,
        width: 20,
      },
      large: {
        height: 24,
        width: 24,
      },
    },
  } as const,
  defaultVariants: {
    size: 'medium',
  },
});

// # 2. Prop Types
export type SwitchProps = GetProps<typeof SwitchFrame> & {
  /**
   * Identificador único para o componente Switch.
   */
  id?: string;
  /**
   * O estado de carregamento do Switch.
   * @default false
   */
  loading?: boolean;
};

// # 3. Composed Component
const SwitchComponent = React.forwardRef<
  React.ElementRef<typeof SwitchFrame>,
  SwitchProps
>(({ loading = false, disabled, size, ...props }, ref) => {
  const isDisabled = loading || disabled;

  return (
    <SwitchFrame
      ref={ref}
      role="switch"
      aria-checked={props.checked}
      disabled={isDisabled}
      size={size}
      {...props}
    >
      <SwitchThumb size={size} />
      {loading && (
        <Spinner
          size={size === 'small' ? 'small' : 'large'}
          color="$background"
          style={{ position: 'absolute', margin: 'auto' }}
        />
      )}
    </SwitchFrame>
  );
});

SwitchComponent.displayName = 'Switch';

export const Switch = SwitchComponent;
