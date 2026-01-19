export type MediaItem = {
  id: string;
  type: 'image' | 'video';
  url: string;
  thumbnailUrl?: string;
  title: string;
  description?: string;
  size?: number;
  createdAt?: string;
};

export interface MediaGridProps {
  items: MediaItem[];
  selectedIds?: string[];
  onSelect?: (id: string) => void;
  onMultiSelect?: (ids: string[]) => void;
  onDelete?: (ids: string[]) => void;
  onUpload?: () => void;
  isLoading?: boolean;
  viewMode?: 'grid' | 'list';
  onViewModeChange?: (mode: 'grid' | 'list') => void;
  acceptedTypes?: string[];
}

