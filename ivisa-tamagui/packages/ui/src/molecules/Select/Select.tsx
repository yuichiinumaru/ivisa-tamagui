import { Check, ChevronDown } from '@tamagui/lucide-icons';
import React from 'react';
import {
  Adapt,
  isWeb,
  Select as TamaguiSelect,
  SelectProps as TamaguiSelectProps,
  Sheet,
  styled,
  XStack,
  YStack,
} from 'tamagui';
import type { YStackProps } from 'tamagui';
import { Spinner } from '../../atoms/Spinner';

const SelectRoot = (props: TamaguiSelectProps) => <TamaguiSelect {...props} />;

const SelectTriggerFrame = styled(XStack, {
  name: 'SelectTrigger',
  width: '100%',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  borderWidth: 1,
  borderColor: '$borderColor',
  backgroundColor: '$background',
  paddingHorizontal: '$3',
  height: '$10',
  borderRadius: '$2',
  gap: '$2',

  hoverStyle: {
    backgroundColor: '$backgroundHover',
  },

  focusStyle: {
    borderColor: '$ring',
    borderWidth: 2,
  },

  variants: {
    isError: {
      true: {
        borderColor: '$red10',
      },
    },
    disabled: {
      true: {
        opacity: 0.5,
        backgroundColor: '$background',
      },
    },
    isLoading: {
      true: {
        opacity: 0.5,
        backgroundColor: '$background',
      },
    },
  } as const,
});

type SelectTriggerProps = React.ComponentProps<typeof SelectTriggerFrame> & {
  hasError?: boolean;
  disabled?: boolean;
  isLoading?: boolean;
  rightSlot?: React.ReactNode;
};

const SelectTrigger = React.forwardRef<React.ElementRef<typeof SelectTriggerFrame>, SelectTriggerProps>(
  ({ children, hasError, disabled, isLoading, rightSlot, ...props }, ref) => {
    return (
      <TamaguiSelect.Trigger asChild disabled={disabled || isLoading} ref={ref}>
        <SelectTriggerFrame tabIndex={0} isError={hasError} disabled={disabled || isLoading} {...props}>
          {children}
          {isLoading ? <Spinner /> : rightSlot || <ChevronDown size={12} color="$mutedForeground" />}
        </SelectTriggerFrame>
      </TamaguiSelect.Trigger>
    );
  }
);

const SelectContent = (props: React.ComponentProps<typeof TamaguiSelect.Content>) => (
  <TamaguiSelect.Content zIndex={200000} {...props}>
    <TamaguiSelect.ScrollUpButton
      alignItems="center"
      justifyContent="center"
      position="relative"
      width="100%"
      height="$3"
    >
      <YStack zIndex={10}>
        <ChevronDown size={12} />
      </YStack>
    </TamaguiSelect.ScrollUpButton>

    <TamaguiSelect.Viewport minWidth={200}>{props.children}</TamaguiSelect.Viewport>

    <TamaguiSelect.ScrollDownButton
      alignItems="center"
      justifyContent="center"
      position="relative"
      width="100%"
      height="$3"
    >
      <YStack zIndex={10}>
        <ChevronDown size={12} />
      </YStack>
    </TamaguiSelect.ScrollDownButton>
  </TamaguiSelect.Content>
);

const SelectItem = styled(TamaguiSelect.Item, {
  name: 'SelectItem',
  paddingHorizontal: '$3',
  paddingVertical: '$2',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  borderRadius: '$2',
  height: '$10',

  variants: {
    disabled: {
      true: {
        color: '$colorDisabled',
        pointerEvents: 'none',
      },
    },
  } as const,
});

const SelectItemIndicator = (props: YStackProps) => (
  <TamaguiSelect.ItemIndicator marginLeft="auto" {...props}>
    <Check size={16} />
  </TamaguiSelect.ItemIndicator>
);

const SelectSheet = (props: React.ComponentProps<typeof Sheet>) => (
  <Adapt when="sm" platform="touch">
    <Sheet
      native={!isWeb}
      modal
      dismissOnSnapToBottom
      animationConfig={{
        type: 'spring',
        damping: 20,
        mass: 1.2,
        stiffness: 250,
      }}
      {...props}
    >
      <Sheet.Frame>
        <Sheet.ScrollView>
          <Adapt.Contents />
        </Sheet.ScrollView>
      </Sheet.Frame>
      <Sheet.Overlay animation="lazy" enterStyle={{ opacity: 0 }} exitStyle={{ opacity: 0 }} />
    </Sheet>
  </Adapt>
);

const SelectValue = TamaguiSelect.Value;
const SelectItemText = TamaguiSelect.ItemText;
const SelectGroup = TamaguiSelect.Group;
const SelectLabel = TamaguiSelect.Label;
const SelectViewport = TamaguiSelect.Viewport;
const SelectPortal = TamaguiSelect.Portal; // Alias for Portal

SelectRoot.Trigger = SelectTrigger;
SelectRoot.Value = SelectValue;
SelectRoot.Content = SelectContent;
SelectRoot.Item = SelectItem;
SelectRoot.ItemText = SelectItemText;
SelectRoot.ItemIndicator = SelectItemIndicator;
SelectRoot.Group = SelectGroup;
SelectRoot.Label = SelectLabel;
SelectRoot.Sheet = SelectSheet;
SelectRoot.Portal = SelectPortal; // Attach to Root

export {
  SelectRoot as Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
  SelectItemText,
  SelectItemIndicator,
  SelectGroup,
  SelectLabel,
  SelectSheet,
  SelectViewport,
  SelectPortal,
};
