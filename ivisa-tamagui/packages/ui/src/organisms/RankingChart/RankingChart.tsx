// @ts-nocheck
import { Card } from '@tamagui/card';
import { BarChart, Frown } from '@tamagui/lucide-icons';
import React from 'react';
import {
  Button,
  H3,
  Paragraph,
  Progress,
  Separator,
  Text,
  XStack,
  YStack,
} from 'tamagui';
import { Skeleton } from '../../atoms/Skeleton';

export interface RankingChartEntry {
  name: string;
  value: number;
  color: string;
}

export interface RankingChartProps {
  title: string;
  data: RankingChartEntry[];
  isLoading?: boolean;
  isError?: boolean;
  error?: string;
  onRetry?: () => void;
  headerActions?: React.ReactNode;
  emptyStateCTA?: React.ReactNode;
}

const RankingChartContent = ({ data }: { data: RankingChartEntry[] }) => {
  const total = data.reduce((acc, item) => acc + item.value, 0);

  return (
    <YStack gap="$4" flex={1}>
      {data.map((item, index) => (
        <YStack key={index} gap="$2">
          <XStack justifyContent="space-between" alignItems="center">
            <Text color="$gray11" fontWeight="bold">{item.name}</Text>
            <Text color="$gray11" fontWeight="bold">{`${((item.value / total) * 100).toFixed(0)}%`}</Text>
          </XStack>
          <Progress value={(item.value / total) * 100} backgroundColor={item.color} height="$1">
            <Progress.Indicator animation="bouncy" />
          </Progress>
        </YStack>
      ))}
    </YStack>
  );
};

export const RankingChart = ({
  title,
  data,
  isLoading = false,
  isError = false,
  error = 'Ocorreu um erro ao carregar os dados.',
  onRetry,
  headerActions,
  emptyStateCTA,
}: RankingChartProps) => {
  const renderContent = () => {
    if (isLoading) {
      return (
        <YStack gap="$4" flex={1} paddingHorizontal="$4" data-testid="loading-state">
          {[...Array(5)].map((_, i) => (
            <YStack key={i} gap="$2">
              <XStack justifyContent="space-between">
                <Skeleton width={100} height={20} />
                <Skeleton width={50} height={20} />
              </XStack>
              <Skeleton width="100%" height={10} />
            </YStack>
          ))}
        </YStack>
      );
    }

    if (isError) {
      return (
        <YStack flex={1} justifyContent="center" alignItems="center" gap="$4" padding="$4">
          <Frown size={48} color="$red10" />
          <Paragraph color="$red10" textAlign="center">{error}</Paragraph>
          {onRetry && <Button onPress={onRetry}>Tentar Novamente</Button>}
        </YStack>
      );
    }

    if (!data || data.length === 0) {
      return (
        <YStack flex={1} justifyContent="center" alignItems="center" gap="$4" padding="$4">
          <BarChart size={48} color="$gray8" />
          <Paragraph color="$gray10">Sem dados para exibir.</Paragraph>
          {emptyStateCTA}
        </YStack>
      );
    }

    return <RankingChartContent data={data} />;
  };

  return (
    <Card width="100%" padding="$4" gap="$4" tag="section">
      <XStack justifyContent="space-between" alignItems="center">
        <H3>{title}</H3>
        {headerActions}
      </XStack>
      <Separator />
      {renderContent()}
    </Card>
  );
};

export default RankingChart;

export type RankingChartContentProps = React.ComponentProps<typeof RankingChartContent>
