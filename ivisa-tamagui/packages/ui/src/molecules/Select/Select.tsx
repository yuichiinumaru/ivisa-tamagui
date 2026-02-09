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
  Text,
  GetProps,
} from 'tamagui';
import { Spinner } from '../../atoms/Spinner';

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

  hoverStyle: { backgroundColor: '$backgroundHover' },
  focusStyle: { borderColor: '$ring', borderWidth: 2 },

  variants: {
    isError: {
      true: { borderColor: '$red10' },
    },
    disabled: {
      true: { opacity: 0.5, backgroundColor: '$gray3' },
    },
  },
});

export interface SelectTriggerProps extends GetProps<typeof SelectTriggerFrame> {
  error?: string;
  isLoading?: boolean;
  rightSlot?: React.ReactNode;
}

const SelectTrigger = React.forwardRef<HTMLDivElement, SelectTriggerProps>(
  ({ children, error, disabled, isLoading, rightSlot, isError, ...props }, ref) => {
    // Unificamos o estado de bloqueio
    const isInteractionDisabled = disabled || isLoading;

    return (
      <YStack width="100%" gap="$1.5">
        <TamaguiSelect.Trigger asChild disabled={isInteractionDisabled}>
          <SelectTriggerFrame
            ref={ref}
            isError={isError || !!error}
            disabled={isInteractionDisabled}
            {...props}
          >
            <XStack flex={1} alignItems="center" gap="$2">
              {children}
            </XStack>

            {isLoading ? (
              <Spinner />
            ) : (
              rightSlot || <ChevronDown size={14} color="$mutedForeground" />
            )}
          </SelectTriggerFrame>
        </TamaguiSelect.Trigger>

        {error && (
          <Text color="$red10" fontSize="$2" marginLeft="$1">
            {error}
          </Text>
        )}
      </YStack>
    );
  }
);

SelectTrigger.displayName = 'SelectTrigger';

const SelectItem = styled(TamaguiSelect.Item, {
  name: 'SelectItem',
  paddingHorizontal: '$3',
  paddingVertical: '$2',
  flexDirection: 'row',
  alignItems: 'center',
  gap: '$2',
  borderRadius: '$2',
  height: '$10',
  hoverStyle: { backgroundColor: '$backgroundHover' },
});

export const Select = (props: TamaguiSelectProps) => <TamaguiSelect {...props} />;

const SelectContent = ({ children, ...props }: React.ComponentProps<typeof TamaguiSelect.Content>) => (
  <TamaguiSelect.Content zIndex={200000} {...props}>
    <TamaguiSelect.Viewport minWidth={200}>{children}</TamaguiSelect.Viewport>
  </TamaguiSelect.Content>
);

const SelectSheet = ({ children, ...props }: React.ComponentProps<typeof Sheet>) => (
  <Adapt when="sm" platform="touch">
    <Sheet
      native={!isWeb}
      modal
      dismissOnSnapToBottom
      animationConfig={{ type: 'spring', damping: 20, mass: 1.2, stiffness: 250 }}
      {...props}
    >
      <Sheet.Frame>
        <Sheet.ScrollView>
          <Adapt.Contents />
        </Sheet.ScrollView>
      </Sheet.Frame>
      <Sheet.Overlay
        animation="lazy"
        enterStyle={{ opacity: 0 }}
        exitStyle={{ opacity: 0 }}
        backgroundColor="$shadowColor"
      />
    </Sheet>
  </Adapt>
);

Select.Trigger = SelectTrigger;
Select.Value = TamaguiSelect.Value;
Select.Content = SelectContent;
Select.Item = SelectItem;
Select.ItemText = TamaguiSelect.ItemText;
Select.ItemIndicator = (props: GetProps<typeof TamaguiSelect.ItemIndicator>) => (
  <TamaguiSelect.ItemIndicator marginLeft="auto" {...props}>
    <Check size={16} color="$blue10" />
  </TamaguiSelect.ItemIndicator>
);
Select.Group = TamaguiSelect.Group;
Select.Label = TamaguiSelect.Label;
Select.Sheet = SelectSheet;

export {
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectSheet,
};

export const SelectValue = TamaguiSelect.Value;
export const SelectItemText = TamaguiSelect.ItemText;
export const SelectItemIndicator = Select.ItemIndicator;
export const SelectGroup = TamaguiSelect.Group;
export const SelectLabel = TamaguiSelect.Label;
export const SelectViewport = TamaguiSelect.Viewport;