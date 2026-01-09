import React, { useState } from 'react';
import { MediaGridProps, MediaItem } from './MediaGrid.props';
import { YStack, XStack, Text, Image, Button, ScrollView, Stack } from 'tamagui';
import { Check, Trash2, Upload, Grip, List as ListIcon } from '@tamagui/lucide-icons';
import { Card } from '../../molecules/Card';

export const MediaGrid = ({
  items,
  selectedIds = [],
  onSelect,
  onMultiSelect,
  onDelete,
  onUpload,
  isLoading = false,
  viewMode = 'grid',
  onViewModeChange,
  acceptedTypes,
}: MediaGridProps) => {
  const [internalViewMode, setInternalViewMode] = useState<'grid' | 'list'>(viewMode);

  // Use controlled or uncontrolled view mode
  const currentViewMode = onViewModeChange ? viewMode : internalViewMode;

  const handleViewModeChange = (mode: 'grid' | 'list') => {
    if (onViewModeChange) {
      onViewModeChange(mode);
    } else {
      setInternalViewMode(mode);
    }
  };

  return (
    <YStack gap="$4" f={1}>
      {/* Toolbar */}
      <XStack justifyContent="space-between" alignItems="center">
        <XStack gap="$2">
            {onUpload && (
                <Button icon={Upload} onPress={onUpload}>
                    Upload
                </Button>
            )}
            {selectedIds.length > 0 && onDelete && (
                <Button
                    theme="red"
                    icon={Trash2}
                    onPress={() => onDelete(selectedIds)}
                >
                    Delete ({selectedIds.length})
                </Button>
            )}
        </XStack>

        <XStack gap="$2" backgroundColor="$background" padding="$1" borderRadius="$4">
          <Button
            size="$3"
            chromeless={currentViewMode !== 'grid'}
            theme={currentViewMode === 'grid' ? 'active' : undefined}
            icon={Grip}
            onPress={() => handleViewModeChange('grid')}
          />
          <Button
            size="$3"
            chromeless={currentViewMode !== 'list'}
            theme={currentViewMode === 'list' ? 'active' : undefined}
            icon={ListIcon}
            onPress={() => handleViewModeChange('list')}
          />
        </XStack>
      </XStack>

      {/* Grid/List View */}
      <ScrollView>
        <XStack flexWrap="wrap" gap="$4">
          {items.map((item) => (
            <MediaItemCard
                key={item.id}
                item={item}
                selected={selectedIds.includes(item.id)}
                onSelect={onSelect ? () => onSelect(item.id) : undefined}
                viewMode={currentViewMode}
            />
          ))}
          {items.length === 0 && !isLoading && (
              <YStack f={1} alignItems="center" justifyContent="center" padding="$10">
                  <Text color="$color10">No media found</Text>
              </YStack>
          )}
        </XStack>
      </ScrollView>
    </YStack>
  );
};

const MediaItemCard = ({
    item,
    selected,
    onSelect,
    viewMode
}: {
    item: MediaItem;
    selected: boolean;
    onSelect?: () => void;
    viewMode: 'grid' | 'list';
}) => {
    if (viewMode === 'list') {
        return (
            <XStack
                width="100%"
                backgroundColor="$background"
                padding="$2"
                gap="$4"
                alignItems="center"
                hoverStyle={{ backgroundColor: '$backgroundHover' }}
                onPress={onSelect}
                cursor="pointer"
                borderWidth={1}
                borderColor={selected ? '$blue10' : '$borderColor'}
                borderRadius="$4"
            >
                <Image
                    source={{ uri: item.thumbnailUrl || item.url }}
                    width={40}
                    height={40}
                    borderRadius="$2"
                    objectFit="cover"
                />
                <YStack f={1}>
                    <Text fontWeight="bold">{item.title}</Text>
                    <Text fontSize="$2" color="$color10">{item.type} • {formatBytes(item.size)}</Text>
                </YStack>
                {selected && <Check color="$blue10" />}
            </XStack>
        );
    }

    return (
        <Card
            width={180}
            height={180}
            padding={0}
            overflow="hidden"
            onPress={onSelect}
            borderWidth={2}
            borderColor={selected ? '$blue10' : 'transparent'}
            hoverStyle={{ scale: 1.02 }}
            pressStyle={{ scale: 0.98 }}
            animation="quick"
        >
            <Image
                source={{ uri: item.thumbnailUrl || item.url }}
                width="100%"
                height="100%"
                objectFit="cover"
            />
            {selected && (
                <Stack
                    position="absolute"
                    top={8}
                    right={8}
                    backgroundColor="$blue10"
                    padding={4}
                    borderRadius={100}
                >
                    <Check size={12} color="white" />
                </Stack>
            )}
            <YStack
                position="absolute"
                bottom={0}
                left={0}
                right={0}
                backgroundColor="rgba(0,0,0,0.5)"
                padding="$2"
            >
                <Text color="white" numberOfLines={1} fontSize="$2">{item.title}</Text>
            </YStack>
        </Card>
    );
};

function formatBytes(bytes?: number, decimals = 2) {
    if (!bytes) return '-';
    if (bytes === 0) return '0 Bytes';

    const k = 1024;
    const dm = decimals < 0 ? 0 : decimals;
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];

    const i = Math.floor(Math.log(bytes) / Math.log(k));

    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
}

export type MediaGridProps = React.ComponentProps<typeof MediaGrid>

export type MediaItemCardProps = React.ComponentProps<typeof MediaItemCard>
