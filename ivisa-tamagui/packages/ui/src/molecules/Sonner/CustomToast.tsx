// @ts-nocheck
import React from 'react';
import { XStack, YStack } from '../../atoms/Stack';
import { Text } from '../../atoms/Typography';
import { Button } from '../../atoms/Button';
import { CheckCircle, XCircle, AlertTriangle, Info } from '@tamagui/lucide-icons';
import { Spinner } from 'tamagui';

export type CustomToastProps = {
  title: string;
  description?: string;
  type?: 'success' | 'error' | 'warning' | 'info';
  action?: {
    label: string;
    onClick: () => void;
  };
  loading?: boolean;
};

const getIcon = (type: CustomToastProps['type']) => {
  switch (type) {
    case 'success':
      return <CheckCircle color="$colorSuccess" />;
    case 'error':
      return <XCircle color="$colorError" />;
    case 'warning':
      return <AlertTriangle color="$colorWarning" />;
    case 'info':
      return <Info color="$colorInfo" />;
    default:
      return null;
  }
};

export const CustomToast = ({ title, description, type, action, loading }: CustomToastProps) => {
  const icon = loading ? <Spinner /> : getIcon(type);

  return (
    <XStack
      gap="$4"
      alignItems="center"
      backgroundColor="$background"
      padding="$4"
      borderRadius="$4"
      borderWidth={1}
      borderColor="$borderColor"
      maxWidth={350}
    >
      {icon && <YStack>{icon}</YStack>}
      <YStack gap="$1" flex={1}>
        <Text fontWeight="bold">{title}</Text>
        {description && (
          <Text color="$gray10" numberOfLines={1} ellipse>
            {description}
          </Text>
        )}
      </YStack>
      {action && (
        <Button onPress={action.onClick} size="$2">
          {action.label}
        </Button>
      )}
    </XStack>
  );
};
